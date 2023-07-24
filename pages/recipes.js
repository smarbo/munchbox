import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RecipesDisplay from "@/components/RecipesDisplay";

export default function Recipes() {
    return (
        <div className="RECIPESPAGE w-full h-screen">
            <Head>
                <title>Munchbox - Recipes</title>
            </Head>
            <Navbar />
            <RecipesDisplay />
            <Footer />
        </div>
    );
}
