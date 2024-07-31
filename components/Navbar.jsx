import {
  FaPizzaSlice,
  FaHome,
  FaCompass,
  FaUsers,
  FaPlus,
  FaUser,
} from "react-icons/fa";
import Link from "next/link";
import { montserrat } from "@/components/Fonts";
import { useState, useEffect } from "react";
const authKey = JSON.parse(process.env.NEXT_PUBLIC_AUTH_KEY)[0];

function NavbarItem(props) {
  return props.type === "btn" ? (
    <div className="Navbar-Item">
      <Link href={`${props.href}`}>
        <button
          className={`bg-white hover:shadow-none hover:bg-gray-400
           flex justify-center items-center text-gray-700 shadow-lg transition-all duration-300 px-3 py-1 rounded`}
        >
          {props.children}
        </button>
      </Link>
    </div>
  ) : (
    <div className="Navbar-Item hover:text-xl text-lg transition-all duration-500 ease-in-out hover:underline underline-offset-8 hover:underline-offset-2">
      <Link href={`${props.href}`}>{props.children}</Link>
    </div>
  );
}

function MobileNavbarItem(props) {
  return (
    <div className="Navbar-MobileMenuItem text-center h-[60px] py-2 text-white capitalize text-sm font-bold px-3 flex flex-col items-center bg-gray-800 p-1 rounded-lg m-3">
      <props.icon color="white" size={28} />
      <Link href={props.href} className="">
        {props.children}
      </Link>
    </div>
  );
}

export default function Navbar(props) {
  const [menuToggled, setMenuToggled] = useState(false);
  const links = {
    home: "/",
    explore: "/explore",
    social: "#social",
    getStarted: "/auth",
    newRecipe: "/recipes/new",
  };

  const [activated, setActivated] = useState(false);
  useEffect(() => {
    fetch("/api/users/login", {
      method: "GET",
      headers: {
        "munchbox-auth-key": authKey,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setActivated(data.loggedIn);
      });
  }, []);

  return (
    <div
      className={`Navbar ${montserrat.className} flex bg-gray-800 py-5 px-10 min-w-full min-h-[70px] max-h-[70px] overflow-x-hidden pr-40 lg:pr-20`}
    >
      <Link href={links.home}>
        <div className="Navbar-Icon font-black px- text-white flex flex-row justify-center items-center text-xl cursor-pointer select-none group">
          <p className="rotate-[270deg] mr-5 group-hover:rotate-[0] transition-all duration-500">
            <FaPizzaSlice color="white" size={32} />
          </p>
          <p className="mr-5">MUNCHBOX</p>
        </div>
      </Link>

      <div className="Navbar-Items md:flex md:text-white hidden md:font-bold md:text-lg md:min-w-full md:justify-evenly ">
        <NavbarItem href={links.home}>Home</NavbarItem>
        <NavbarItem href={links.explore}>Explore</NavbarItem>
        <NavbarItem href={links.social}>Social</NavbarItem>

        <NavbarItem
          type="btn"
          href={activated ? links.newRecipe : links.getStarted}
        >
          <FaPlus size={16} color="#1f2937" className="mr-2" />
          {activated ? "New Recipe" : "Log In"}
        </NavbarItem>
      </div>
      <div
        className="Navbar-MobileMenuBtn absolute right-5 top-[17px] md:hidden cursor-pointer"
        onClick={() => {
          setMenuToggled(!menuToggled);
        }}
      >
        <div className="BARS">
          <div
            className={`BAR relative w-[38px] bg-white h-[6px] my-[5px] rounded transition-all duration-500 ease-in-out ${
              menuToggled ? "rotate-[45deg] translate-y-[10px]" : ""
            }`}
          ></div>
          <div
            className={`BAR relative w-[38px] bg-white h-[6px] my-[5px] rounded transition-all duration-500 ease-in-out ${
              menuToggled ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`BAR relative w-[38px] bg-white h-[6px] my-[5px] rounded transition-all duration-500 ease-in-out ${
              menuToggled ? "rotate-[-45deg] translate-y-[-12px]" : ""
            }`}
          ></div>
        </div>
      </div>
      <div
        className={`Navbar-MobileMenu transition-all flex origin-top-right justify-evenly items-center duration-150 z-10 left-0 absolute top-[70px] md:hidden bg-gray-900 w-full h-[90px] ${
          menuToggled ? "scale-1" : "scale-y-0"
        }`}
      >
        <MobileNavbarItem href={links.home} icon={FaHome}>
          Home
        </MobileNavbarItem>
        <MobileNavbarItem href={links.explore} icon={FaCompass}>
          Explore
        </MobileNavbarItem>
        <MobileNavbarItem href={links.social} icon={FaUsers}>
          Social
        </MobileNavbarItem>
        <MobileNavbarItem
          href={activated ? links.newRecipe : links.getStarted}
          icon={FaPlus}
        >
          {activated ? "Create" : "Log In"}
        </MobileNavbarItem>
      </div>
    </div>
  );
}
