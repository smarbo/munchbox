import Navbar from "../components/Navbar";
import HomeDisplay from "../components/HomeDisplay";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <div className="AppContainer overflow-hidden">
            <Navbar />
            <HomeDisplay />
            <Footer />
        </div>
    );
}
