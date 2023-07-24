import Image from "next/image";
import { montserrat } from "@/components/Fonts";
import Link from "next/link";

function Recipe(props) {
    return (
        <div
            className={`RECIPE shadow-2xl shadow-gray-600 hover:shadow-none hover:translate-y-3  transition-all p-4 w-[250px] max-h-[500px] bg-gradient-to-br from-gray-700 via-gray-800 to-gray-700 bg-opacity-50 rounded-lg mx-4 my-3 flex flex-col justify-center items-center text-white ${montserrat.className} `}
            style={{
                backdropFilter: "blur(5px)",
            }}
        >
            <div id="imageContainer" className="w-[200px]">
                <Image
                    width={2000}
                    height={2000}
                    alt={props.children}
                    src={`/img/${props.img}`}
                    className="object-cover shadow-lg hover:shadow-none transition-all h-[300px] rounded-lg border-8 border-opacity-60 border-gray-900"
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

export default function ExploreDisplay() {
    return (
        <div className="EXPLOREDISPLAY pb-[200px] pt-[20px] max-w-full h-full flex mx-[30px] justify-center mt-10 flex-wrap overflow-scroll shadow-inner">
            <Recipe
                img="burger3.jpg"
                description="This meaty burger is quick to cook and has cheese meat and pepperonios!"
            >
                Mega Burger
            </Recipe>
            <Recipe img="prawnsalad.jpg" description="Cookies or biscuits">
                Gingerbread House
            </Recipe>
            <Recipe
                img="chicken1.jpg"
                description="This flavourful chicken is very delicious and uses the flavour technique to enlighten the taste buds!"
            >
                Lemon & Herb Chicken Wings
            </Recipe>
            <Recipe
                img="prawnsalad.jpg"
                description="This flavourful chicken on the bone is very delicious and uses the flavour technique to enlighten the taste buds!"
            >
                Chicken Leg
            </Recipe>
            <Recipe
                img="chicken3.jpg"
                description="This flavourful chicken on the bone is very delicious and uses the flavour technique to enlighten the taste buds!"
            >
                Chicken Leg
            </Recipe>
            <Recipe
                img="chicken3.jpg"
                description="This flavourful chicken on the bone is very delicious and uses the flavour technique to enlighten the taste buds!"
            >
                Chicken Leg
            </Recipe>
            <Recipe
                img="chicken3.jpg"
                description="This flavourful chicken on the bone is very delicious and uses the flavour technique to enlighten the taste buds!"
            >
                Chicken Leg
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
