import Layout from "@/components/Layout";
import ExploreDisplay from "@/components/ExploreDisplay";

export default function Explore() {
    return (
        <Layout
            title="Munchbox - Explore."
            topClass="RECIPESPAGE w-full h-screen"
        >
            <h1 className="absolute left-[50%] md:block hidden -translate-x-[50%] mt-1 font-extrabold text-gray-900 text-2xl underline underline-offset-1">
                Recipe Explorer
            </h1>
            <ExploreDisplay />
        </Layout>
    );
}
