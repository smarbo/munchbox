import Layout from "@/components/Layout";

export default function NewRecipePage() {
    return (
        <Layout
            title="Munchbox - New Recipe"
            topClass="NEWRECIPEPAGE w-full h-screen"
        >
            <div className="absolute left-[50%] flex -translate-x-[50%] w-[60%] h-full -z-10 bg-gradient-to-tl from-gray-800 to-gray-700 via-gray-800">
                <div className="text-gray-700 font-black text-4xl w-fit h-fit py-3 px-8 bg-gray-200 border-4 border-gray-900  rounded-lg">
                    Test
                </div>
            </div>
        </Layout>
    );
}
