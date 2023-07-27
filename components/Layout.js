import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Layout(props) {
    return (
        <div className={props.topClass}>
            <Head>
                <title>{props.title}</title>
            </Head>
            <Navbar />
            {props.children}
            <Footer />
        </div>
    );
}
