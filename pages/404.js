import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import {
    ErrorNotification,
    SuccessNotification,
} from "@/components/Notifications";
import { montserrat } from "@/components/Fonts";

export default function NotFound() {
    return (
        <div>
            <Head>
                <title>Munchbox - Page not found</title>
            </Head>
            <div className={`NotFound ${montserrat.className}`}>
                <Navbar />
                <div>The page you requested does not exist.</div>
                <ErrorNotification
                    duration={5}
                    message="The page could not be found on the server."
                />
                <Footer />
            </div>
        </div>
    );
}
