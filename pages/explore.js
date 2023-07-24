import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ExploreDisplay from "@/components/ExploreDisplay";

export default function Explore() {
    return (
        <div className="RECIPESPAGE w-full h-screen">
            <Head>
                <title>Munchbox - Explore</title>
            </Head>
            <Navbar />
            <h1 className="absolute left-[50%] md:block hidden -translate-x-[50%] mt-1 font-extrabold text-gray-900 text-2xl underline underline-offset-1">
                Recipe Explorer
            </h1>
            <ExploreDisplay />
            <Footer />
        </div>
    );
}
