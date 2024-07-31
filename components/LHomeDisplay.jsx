const authKey = JSON.parse(process.env.NEXT_PUBLIC_AUTH_KEY)[0];
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { montserrat } from "./Fonts";

export default function LHomeDisplay() {
  const [user, setUser] = useState({});
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

	const logoutUser = async () => {
		const res = await fetch("/api/users/login", {
			method: "DELETE",
			headers: {
				"munchbox-auth-key": authKey,
				"Content-Type": "application/json",
			}
		});
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
          alt="User's Profile Picture"
          className="rounded-full"
        />
        <div className="w-full flex overflow-hidden overflow-ellipsis flex-col pl-6 pt-2 text-blue-900 font-bold">
          <h1>Hi, @{user.username}!</h1>
          <h1>Recipes Posted: {user.recipes && user.recipes.length}</h1>
        </div>
				<button onClick={logoutUser} className="rounded-xl hidden my-2 md:block bg-gradient-to-r from-gray-500 to-gray-700 w-[120px]">
					Log Out
				</button>
      </div>
			<div className="flex mt-4 w-full h-[73%] bg-gradient-to-b from-pink-200 to-blue-400 rounded-xl">
				
			</div>
    </div>
  );
}

// TO DO:
//1 API ROUTE WHICH RETURNS USER DETAILS

//2 ADD LOG OUT BUTTON TO BOTH NAVBARS

//3 COMPLETE LHOMEDISPLAY
// - SHOW USERNAME, USER'S RECIPES, PROFILE PIC, AND GREETING
