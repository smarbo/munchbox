import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function NotFound() {
    return (
        <div className="NotFound">
            <Navbar />
            <div>The page you requested does not exist.</div>
            <Footer />
        </div>
    );
}
