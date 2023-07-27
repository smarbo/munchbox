import { useForm } from "react-hook-form";
import { montserrat } from "@/components/Fonts";
import Layout from "@/components/Layout";

export default function NewRecipePage() {
    return (
        <Layout
            topClass={`NEWRECIPEPAGE w-full h-screen ${montserrat.className}`}
            title="Munchbox - New Recipe"
        >
            <div className="RECIPEMAKERCONTAINER py-4 px-5 flex flex-col absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-[70%] h-[75%] bg-[rgba(40,41,48,0.65)] rounded-[22px]">
                <h1 className="w-full text-center text-white font-bold text-2xl">
                    Recipe Maker
                </h1>
                <div className="w-full h-full bg-blue-800 flex p-4">
                    <div className="LEFT w-[50%] h-full bg-purple-800 p-4">
                        <div className="TOP h-[50%] w-full bg-black"></div>
                        <div className="BOTTOM h-[50%] w-full bg-white"></div>
                    </div>
                    <div className="RIGHT w-[50%] h-full bg-yellow-400 p-4">
                        <div className="TOP h-[10%] w-full bg-black"></div>
                        <div className="MIDDLE h-[80%] w-full bg-white"></div>
                        <div className="BOTTOM h-[10%] w-full bg-black"></div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
