import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Layout(props) {
  return (
    <div className={props.topClass}>
      <Head>
        <title>{props.title}</title>
        <meta
          name="description"
          content="Munchbox is the easiest, free way to save your favourite recipes and share them with others."
        />
      </Head>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
}
