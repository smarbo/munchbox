import Footer from "@/components/Footer";
import HomeDisplay from "@/components/HomeDisplay";
import Navbar from "@/components/Navbar";

export default function Home() {
    return (
        <div className="AppContainer overflow-hidden">
            <Navbar />
            <HomeDisplay />
            <Footer />
        </div>
    );
}
