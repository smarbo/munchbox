const authKey = JSON.parse(process.env.NEXT_PUBLIC_AUTH_KEY)[0];
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { montserrat } from "./Fonts";
import Link from "next/link";

export default function LHomeDisplay() {
  const [user, setUser] = useState({});
  const [recipes, setRecipes] = useState([]);
  const router = useRouter();
  useEffect(() => {
    fetch("/api/users/", {
      method: "GET",
      headers: {
        "munchbox-auth-key": authKey,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });


  }, []);

  useEffect(() => {
    const fetchRecipes = async () => {
      if (user.recipes) {
        const rps = user.recipes.map(async (rid) => {
          const fr = await fetch(`/api/recipes/${rid}`, { headers: { "munchbox-auth-key": authKey } });
          const rc = await fr.json();
          return rc;
        });

        const rsrps = await Promise.all(rps);
        setRecipes(rsrps);
      }
    }
    fetchRecipes()
  }, [user])

  const logoutUser = async () => {
    await fetch("/api/users/login", {
      method: "DELETE",
      headers: {
        "munchbox-auth-key": authKey,
        "Content-Type": "application/json",
      }
    });
    window.location.href = "/";
  };

  const handleDelete = async (id) => {
    await fetch(`/api/recipes/${id}`, {
      headers: {
        "munchbox-auth-key": authKey,
      },
      method: "DELETE",
    })
    window.location.href = "/";
  }

  return (
    <div
      className={`LHomeDisplay absolute translate-x-[-50%] left-[50%] bg-slate-900 text-white px-4 py-8 w-full md:w-[800px] h-[100vh]  bg-opacity-[30%] ${montserrat.className}`}
    >
      <div className="flex w-full bg-gradient-to-b from-blue-300 to-pink-200 rounded-xl h-[110px] px-4 py-4">
        <Image
          src={user.image}
          width={80}
          height={80}
          alt="loading"
          className="rounded-full"
        />
        <div className="w-full flex overflow-hidden overflow-ellipsis flex-col pl-6 pt-2 text-blue-900 font-bold">
          <h1>Hi, @{user.username || "LOADING"}!</h1>
          <h1>Recipes Posted: {user.recipes && user.recipes.length}</h1>
        </div>
        <button onClick={logoutUser} className="rounded-xl hidden my-2 sm:block bg-gradient-to-r from-gray-500 to-gray-700 w-[120px]">
          Log Out
        </button>
      </div>
      <div className="flex mt-4 w-full h-[73%] px-4 py-6 bg-gradient-to-b from-pink-200 to-blue-400 rounded-xl">
        <div className="flex rounded-[inherit] w-[50%] mr-2 px-2 space-y-2 pt-4 flex-col bg-black bg-opacity-10">
          <h1 className="underline pl-2">Your Recipes</h1>
          {
            recipes.map((r, i) => {
              r = r.recipe;
              let opacity = i % 2 === 0 ? "bg-opacity-30" : "bg-opacity-20";
              return <Link href={`/recipes/${r._id}`}><div onClick={() => { handleDelete(r._id) }} className="absolute w-[18px] translate-y-[3px] translate-x-[-2px] text-red-500 rounded-full h-[18px] right-[51%] bg-red-500"></div><div className={`pl-2 hover:bg-blue-500 transition-all rounded-sm bg-black ${opacity}`}>• {r.title} •</div></Link>
            })
          }
        </div>

        <div className="flex rounded-[inherit] w-[50%] ml-2 px-2 space-y-2 pt-4 flex-col bg-black bg-opacity-10">
          <button onClick={logoutUser} className="text-white border-solid border-2 border-white mx-4 rounded-lg h-[60px] bg-gray-700 sm:hidden">Log Out</button>
          <Link href="/recipes/new" className="w-full flex"><button className="bg-gradient-to-bl grow from-blue-300 to-purple-300 text-white border-solid border-2 border-white mx-4 rounded-lg h-[60px] bg-opacity-40">New Recipe</button></Link>
        </div>

      </div>
    </div >
  );
}

// TO DO:
//1 API ROUTE WHICH RETURNS USER DETAILS

//2 ADD LOG OUT BUTTON TO BOTH NAVBARS

//3 COMPLETE LHOMEDISPLAY
// - SHOW USERNAME, USER'S RECIPES, PROFILE PIC, AND GREETING
