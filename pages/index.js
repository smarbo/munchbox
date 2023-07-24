import Footer from "@/components/Footer";
import HomeDisplay from "@/components/HomeDisplay";
import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function Home() {
    return (
        <div className="AppContainer overflow-hidden">
            <Head>
                <title>Munchbox - Recipes made easy.</title>
            </Head>
            <Navbar />
            <HomeDisplay />
            <Footer />
        </div>
    );
}
