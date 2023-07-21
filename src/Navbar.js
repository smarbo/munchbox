import { FaPizzaSlice } from "react-icons/fa";

function NavbarItem(props) {
    return props.type === "btn" ? (
        <div className="Navbar-Item">
            <a href={`${props.href}`}>
                <button className="bg-white text-gray-700 shadow-lg hover:shadow-none hover:bg-gray-400  transition-all duration-300 px-3 py-1 rounded">
                    {props.children}
                </button>
            </a>
        </div>
    ) : (
        <div className="Navbar-Item hover:text-2xl text-lg transition-all">
            <a href={`${props.href}`}>{props.children}</a>
        </div>
    );
}

export default function Navbar() {
    return (
        <div className="Navbar flex bg-gray-800 py-5 px-10 min-w-full min-h-[70px]">
            <a href="/">
                <div className="Navbar-Icon font-black text-white flex flex-row justify-center items-center text-xl cursor-pointer select-none group">
                    <p className="rotate-[270deg] mr-5 group-hover:rotate-[0] transition-all duration-500">
                        <FaPizzaSlice color="white" size={32} />
                    </p>
                    <p className="mr-5">MUNCHBOX</p>
                </div>
            </a>

            <div className="Navbar-Items flex text-white font-bold text-lg min-w-full justify-evenly">
                <NavbarItem href="/#nav-home">Home</NavbarItem>
                <NavbarItem href="/#nav-newrecipe">New Recipe</NavbarItem>
                <NavbarItem href="/#nav-social">Social</NavbarItem>
                <NavbarItem type="btn" href="/#nav-cta">
                    Get Started
                </NavbarItem>
            </div>
        </div>
    );
}
