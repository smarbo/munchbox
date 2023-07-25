import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { montserrat } from "@/components/Fonts";
import Image from "next/image";

function Recipe(props) {
    return (
        <div
            className={`RECIPE ${montserrat.className} bg-gray-800 rounded-lg flex shadow-2xl shadow-gray-700 bg-opacity-30 backdrop-blur-3xl  px-8 py-4 h-[70vh] absolute top-[50%] -translate-y-[50%] w-[80%] left-[50%] -translate-x-[50%]`}
        >
            <div className="RECIPEIMAGE w-full sm:w-[30vw] h-[25vh] sm:h-[40vh] shadow-2xl shadow-gray-600">
                <Image
                    src={`/img/${props.image}`}
                    alt={props.name}
                    width={400}
                    height={400}
                    className="object-cover h-full w-full rounded-xl"
                />
            </div>

            <div className="RECIPECONTENT shadow-inner shadow-gray-800 text-gray-300 ml-[2%] whitespace-pre pr-[100px] text-lg overflow-auto font-semibold absolute left-0 top-[30vh] sm:top-0 sm:left-[32vw] w-full h-[50%] sm:w-[58%] CUSTOMBG sm:h-[100%]">
                <h1 className="RECIPETITLEMETHOD text-center pt-8 pr-[150px] font-bold underline text-white text-2xl">
                    Guide
                </h1>
                {props.content}
            </div>
        </div>
    );
}

export default function RecipePage() {
    return (
        <div className="RECIPEPAGE h-full w-full">
            <Navbar />
            <Recipe
                image="burger3.jpg"
                name="Mega Burger"
                content={`
                How to make Eddie's Mega Burger
                Step 1. Place your meat on the oily hot pan.
                Step 2. Add salt, pepper, smash the meat with a mallet.
                Step 3. Let meat sizzle for 25 minutes.
                ## MAKING OUR GARLIC SAUCE -- WHILE THE MEAT IS COOKING ##
                Step 1. Get a small pot/cup/container to make the sauce in and put 3-4 tablespoons of mayonnaise
                Step 2. Add salt, pepper, smash the meat with a mallet.
                Step 3. Let meat sizzle for 25 minutes.
                ## MAKING OUR GARLIC SAUCE -- WHILE THE MEAT IS COOKING ##
                Step 1. Get a small pot/cup/container to make the sauce in and put 3-4 tablespoons of mayonnaise
                Step 2. Add salt, pepper, smash the meat with a mallet.
                Step 3. Let meat sizzle for 25 minutes.
                ## MAKING OUR GARLIC SAUCE -- WHILE THE MEAT IS COOKING ##
                Step 1. Get a small pot/cup/container to make the sauce in and put 3-4 tablespoons of mayonnaise
                Step 2. Add salt, pepper, smash the meat with a mallet.
                Step 3. Let meat sizzle for 25 minutes.
                ## MAKING OUR GARLIC SAUCE -- WHILE THE MEAT IS COOKING ##
                Step 1. Get a small pot/cup/container to make the sauce in and put 3-4 tablespoons of mayonnaise
                Step 2. Add salt, pepper, smash the meat with a mallet.
                Step 3. Let meat sizzle for 25 minutes.
                ## MAKING OUR GARLIC SAUCE -- WHILE THE MEAT IS COOKING ##
                Step 1. Get a small pot/cup/container to make the sauce in and put 3-4 tablespoons of mayonnaise
                `}
            ></Recipe>
            <Footer />
        </div>
    );
}
