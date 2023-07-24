import Image from "next/image";
import { montserrat } from "@/components/Fonts";
import Link from "next/link";

function Recipe(props) {
    return (
        <div
            className={`RECIPE shadow-lg shadow-gray-800 p-4 w-[250px] max-h-[500px] bg-gray-600 rounded-lg mx-4 my-3 flex flex-col justify-center items-center text-white ${montserrat.className} `}
        >
            <div id="imageContainer" className="w-[200px]">
                <Image
                    width={2000}
                    height={2000}
                    alt={props.children}
                    src={`/img/${props.img}`}
                    className="object-cover h-[300px] rounded-lg border-8 border-gray-800"
                />
            </div>

            <div className="RECIPEINFO">
                <h1 className="RECIPETITLE text-center font-bold max-w-[200px] my-4 overflow-hidden whitespace-nowrap overflow-ellipsis ">
                    {props.children}
                </h1>
                <p className="RECIPEDESCRIPTION max-w-[200px] overflow-hidden whitespace-pre-line text-left max-h-[100px]">
                    {props.description}
                </p>
            </div>
        </div>
    );
}

export default function RecipesDisplay() {
    return (
        <div className="RECIPESDISPLAY w-full h-full flex mx-64">
            <Recipe
                img="burger3.jpg"
                description="This meaty burger is quick to cook and has cheese meat and pepperonios!"
            >
                Mega Burger
            </Recipe>
            <Recipe
                img="chicken1.jpg"
                description="This flavourful chicken is very delicious and uses the flavour technique to enlighten the taste buds!"
            >
                Lemon & Herb Chicken Wings
            </Recipe>
            <Recipe
                img="chicken3.jpg"
                description="This flavourful chicken on the bone is very delicious and uses the flavour technique to enlighten the taste buds!"
            >
                Chicken Leg
            </Recipe>
        </div>
    );
}
