import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import { FaClock } from "react-icons/fa";
import { useRouter } from "next/router";
import { montserrat } from "@/components/Fonts";
import Image from "next/image";

function Recipe(props) {
    return (
        <div
            className={`RECIPE ${montserrat.className} select-all bg-gray-800 rounded-lg flex shadow-2xl shadow-gray-700 bg-opacity-30 backdrop-blur-3xl  px-8 py-4 h-[70vh] absolute top-[50%] -translate-y-[50%] w-[80%] left-[50%] -translate-x-[50%]`}
        >
            <div className="RECIPEIMAGE w-full sm:w-[30vw] h-[25vh] sm:h-[40vh] shadow-2xl transition-all hover:shadow-none hover:mt-3 shadow-gray-800">
                <Image
                    src={`/img/${props.image}`}
                    alt={props.name}
                    width={400}
                    height={400}
                    className="object-cover h-full w-full rounded-xl transition-all"
                />
            </div>

            <div className="RECIPECONTENT select-text  shadow-inner shadow-gray-800 text-gray-300 ml-[2%] text-base leading-normal pb-[30px] text-left whitespace-pre-line pl-[30px] sm:whitespace-pre sm:pr-[100px] sm:text-lg overflow-auto font-semibold absolute left-[50%] -translate-x-[50%] top-[30vh] sm:top-[50%] sm:translate-x-0 sm:-translate-y-[50%] sm:left-[34vw] w-[90%] h-[50%] sm:w-[50%] CUSTOMBG sm:h-[95%] rounded-3xl">
                <div className="MOBILERECIPEDETAILS sm:hidden w-[90%] h-[100px] mb-[150px]">
                    <div className="select-text">
                        <h1 className="text-center pt-3 select-text w-[150%]  pr-[150px] font-semibold underline text-white text-lg">
                            {props.name}
                        </h1>
                    </div>
                    <div className="select-text">
                        <h1 className="text-center pt-3 select-text w-[150%] flex justify-center items-center pr-[150px] font-bold underline text-white text-lg">
                            <FaClock size={16} className="mr-1" /> {props.time}{" "}
                            minutes
                        </h1>
                    </div>
                    <div className="select-text">
                        <h1 className="text-center pt-3 select-text w-[150%]  pr-[150px] font-semibold underline text-white text-lg">
                            By {props.creator}
                        </h1>
                    </div>
                    <div className="select-text">
                        <h1 className="text-center select-text pt-3 w-[150%] mb-[1vh]  pr-[150px] font-bold underline text-white text-lg">
                            Description
                        </h1>
                        {props.description}
                    </div>
                </div>
                <h1 className="text-center select-text pt-8 w-[150%] sm:mt-[10px] mt-[330px]  pr-[150px] font-bold underline text-white text-2xl">
                    Recipe
                </h1>
                {props.content}
            </div>
            <div className="RECIPEDETAILS hidden text-center sm:flex flex-col px-4 py-2 justify-center items-center font-semibold w-[30vw] h-[23vh] absolute top-[45vh] ">
                <div className="text-white select-text underline text-lg">
                    {props.name}
                </div>
                <div className="text-white select-text text-md">
                    By {props.creator}
                </div>
                <div className="text-white select-text text-md flex justify-center items-center">
                    <FaClock size={16} className="mr-2" /> {props.time} minutes
                </div>
                <div className="text-white select-text text-md mt-[1vh] line-clamp-3 overflow-ellipsis">
                    {props.description}
                </div>
            </div>
        </div>
    );
}

export default function RecipePage() {
    const router = useRouter();
    const { recipename } = router.query;
    //
    const recipe =
        recipename === "Gold Burger"
            ? {
                  name: "Gold Burger",
                  image: "burger3.jpg",
                  creator: "@umamistreetfood",
                  time: "20-35",
                  description:
                      "This is one of Umami Street Food's speciality burgers, the gold burger.",
                  content: `
Ingredients:
    - Beef patty
    - Cheeese
    - Mustard
    - Onion rings
    - Ketchup
    - Spicy Sauce
How to Cook:
    Step 1. Cook beef patty on oily hot pan
    Step 2. Add salads
    Step 3. Add cheese, mustard, ketchup, and spicy sauce.
    Step 4. Let patty with salads, cheese, mustard, ketchup, and spicy sauce to cook for 15 minutes.
    Step 5. Eat and enjoy!!!!!!
`,
              }
            : {
                  name: "Lemon and Herb Chicken",
                  image: "chicken1.jpg",
                  creator: "@umamistreetfood",
                  time: "25-30",
                  description:
                      "This is one of Umami Street Food's speciality chicken, the lemon&herb chicken.",
                  content: `
Ingredients:
    - Chicken
    - Chicken Cheese
    - Chicken Mustard
    - Chicken Onion rings
    - Chicken Ketchup
    - Chicken Spicy Sauce
How to Cook:
    Step 1. Cook chicken beef patty on oily hot pan
    Step 2. Add chicken salads
    Step 3. Add chicken cheese, chicken mustard, chicken ketchup, and chicken spicy sauce.
    Step 4. Let chicken patty with chicken salads, chicken cheese, chicken mustard, chicken  ketchup, and chicken spicy sauce to cook for 15 minutes.
    Step 5. Eat chicken and enjoy!!!!!!
`,
              };
    return (
        <div className="RECIPEPAGE h-full w-full">
            <Head>
                <title>
                    Munchbox - {recipe.name} by {recipe.creator}
                </title>
            </Head>
            <Navbar />
            <Recipe
                image={recipe.image}
                name={recipe.name}
                creator={recipe.creator}
                time={recipe.time}
                description={recipe.description}
                content={recipe.content}
            ></Recipe>
            <Footer />
        </div>
    );
}
