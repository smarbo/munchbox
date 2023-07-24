import { FaPizzaSlice, FaHome, FaBook, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

function NavbarItem(props) {
    return props.type === "btn" ? (
        <div className="Navbar-Item">
            <Link to={`${props.href}`}>
                <button className="bg-white text-gray-700 shadow-lg hover:shadow-none hover:bg-gray-400  transition-all duration-300 px-3 py-1 rounded">
                    {props.children}
                </button>
            </Link>
        </div>
    ) : (
        <div className="Navbar-Item hover:text-xl text-lg transition-all duration-500 ease-in-out hover:underline underline-offset-8 hover:underline-offset-2">
            <Link to={`${props.href}`}>{props.children}</Link>
        </div>
    );
}

function MobileNavbarItem(props) {
    return (
        <div className="Navbar-MobileMenuItem text-center h-[60px] py-2 text-white capitalize text-sm font-bold px-3 flex flex-col items-center bg-gray-800 p-1 rounded-lg m-3">
            <props.icon color="white" size={28} />
            <Link to={props.href} className="">
                {props.children}
            </Link>
        </div>
    );
}

export default function Navbar() {
    const [menuToggled, setMenuToggled] = useState(false);
    const links = {
        home: "/",
        recipes: "#recipes",
        social: "#social",
        getStarted: "/auth",
    };

    return (
        <div className="Navbar flex bg-gray-800 py-5 px-10 min-w-full min-h-[70px] max-h-[70px] overflow-x-hidden pr-40 lg:pr-20">
            <Link to={links.home}>
                <div className="Navbar-Icon font-black px- text-white flex flex-row justify-center items-center text-xl cursor-pointer select-none group">
                    <p className="rotate-[270deg] mr-5 group-hover:rotate-[0] transition-all duration-500">
                        <FaPizzaSlice color="white" size={32} />
                    </p>
                    <p className="mr-5">MUNCHBOX</p>
                </div>
            </Link>

            <div className="Navbar-Items md:flex md:text-white hidden md:font-bold md:text-lg md:min-w-full md:justify-evenly ">
                <NavbarItem href={links.home}>Home</NavbarItem>
                <NavbarItem href={links.recipes}>Recipes</NavbarItem>
                <NavbarItem href={links.social}>Social</NavbarItem>
                <NavbarItem type="btn" href={links.getStarted}>
                    Get Started
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
                            menuToggled
                                ? "rotate-[45deg] translate-y-[10px]"
                                : ""
                        }`}
                    ></div>
                    <div
                        className={`BAR relative w-[38px] bg-white h-[6px] my-[5px] rounded transition-all duration-500 ease-in-out ${
                            menuToggled ? "opacity-0" : ""
                        }`}
                    ></div>
                    <div
                        className={`BAR relative w-[38px] bg-white h-[6px] my-[5px] rounded transition-all duration-500 ease-in-out ${
                            menuToggled
                                ? "rotate-[-45deg] translate-y-[-12px]"
                                : ""
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
                <MobileNavbarItem href={links.recipes} icon={FaBook}>
                    Recipes
                </MobileNavbarItem>
                <MobileNavbarItem href={links.social} icon={FaUsers}>
                    Social
                </MobileNavbarItem>
            </div>
        </div>
    );
}
