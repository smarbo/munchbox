import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Recipes() {
    return (
        <div className="RECIPESPAGE">
            <Head>
                <title>Munchbox - Recipes</title>
            </Head>
            <Navbar />
            <div className="RECIPESCONTENT">
                <h1>Recipes</h1>
            </div>
            <Footer />
        </div>
    );
}
