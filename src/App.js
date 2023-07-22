import Navbar from "./components/Navbar";
import HomeDisplay from "./components/HomeDisplay";

export default function App() {
    const date = new Date();
    return (
        <div className="AppContainer overflow-hidden">
            <Navbar />
            <HomeDisplay />
            <div className="HomeDisplay-Footer bg-gray-700 absolute bottom-0 w-full h-[50px] text-center pt-4 text-white font-bold left-0">
                Munchbox {date.getFullYear()}© by Eddie Obrams
            </div>
        </div>
    );
}
