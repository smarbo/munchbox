import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function RecipePage() {
    return (
        <div className="RECIPEPAGE h-full w-full">
            <Navbar />
            <div className="RECIPE bg-gray-800 rounded-lg flex shadow-2xl shadow-gray-700 bg-opacity-30 backdrop-blur-3xl  px-8 py-4 h-[70vh] absolute top-[50%] -translate-y-[50%] w-[80%] left-[50%] -translate-x-[50%]">
                <div className="RECIPEIMAGE w-full sm:w-[30vw] h-[25vh] sm:h-[40vh] shadow-2xl shadow-gray-600">
                    <Image
                        src="/img/burger3.jpg"
                        alt="Burger"
                        width={400}
                        height={400}
                        className="object-cover h-full w-full rounded-xl"
                    />
                </div>
                <div className="RECIPECONTENT absolute left-0 top-[30vh] sm:top-0 sm:left-[32vw] bg-red-800 w-full h-[50%] sm:w-[60%] sm:h-[100%]"></div>
            </div>
            <Footer />
        </div>
    );
}
