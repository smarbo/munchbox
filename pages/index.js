import HomeDisplay from "@/components/HomeDisplay";
import Layout from "@/components/Layout";

export default function Home() {
    return (
        <Layout
            title="Munchbox - Recipes made easy."
            topClass="AppContainer overflow-hidden"
        >
            <HomeDisplay />
        </Layout>
    );
}
