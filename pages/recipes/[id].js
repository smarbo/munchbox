require("dotenv").config();
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import { FaClock } from "react-icons/fa";
import { montserrat } from "@/components/Fonts";
import Image from "next/image";

function Recipe(props) {
    return (
        <div
            className={`RECIPE ${montserrat.className} select-all bg-gray-800 rounded-lg flex flex-col shadow-2xl shadow-gray-700 bg-opacity-30 backdrop-blur-3xl  px-8 py-4 h-[70vh] absolute top-[50%] -translate-y-[50%] overflow-y-auto w-[80%] left-[50%] -translate-x-[50%] pb-10 sm:pb-0`}
        >
            <div className="RECIPEIMAGE w-full sm:w-[30vw] h-[25vh] sm:h-[40vh] shadow-none sm:shadow-2xl transition-all hover:shadow-none shadow-gray-800">
                <Image
                    src={props.image}
                    alt={props.name}
                    width={400}
                    height={400}
                    className="object-cover h-full w-full rounded-xl transition-all"
                />
            </div>
            <div className="MOBILERECIPEDETAILS sm:hidden block w-full h-[50%] ">
                <h1 className="w-full text-left pl-4 underline mb-2 text-white font-bold mt-2 underline-offset-2 text-xl line-clamp-1">
                    {props.name}
                </h1>
                <h1 className="flex pl-4 items-center text-white font-semibold">
                    <FaClock color="white" className="mr-1" size={16} />
                    {props.time}
                </h1>
                <h1 className="pl-4 text-white font-medium hover:underline">
                    {props.creator}
                </h1>
                <div className="INGREDIENTS flex-col justify-center h-28 items-center w-full">
                    <h1 className="text-center font-bold underline mb-2 text-white pt-2">
                        Ingredients
                    </h1>
                    <div className="INGREDIENTS h-[70%] overflow-y-auto overflow-x-hidden overflow-ellipsis">
                        {props.ingredients.map((i) => {
                            return (
                                <div className="INgredient bg-[rgba(0,0,0,0.5)] shadow-md pl-2 text-white mb-2 rounded mx-1">
                                    {i.name}: {i.amount}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="RECIPECONTENT mt-52 sm:mt-0 select-text shadow-gray-800 text-gray-300 ml-[2%] text-base leading-normal pb-[30px] text-left whitespace-pre-line pl-[30px] sm:whitespace-pre sm:pr-[0] sm:text-lg overflow-auto overflow-x-hidden font-semibold absolute left-[50%] -translate-x-[50%] top-[30vh] sm:top-[50%] sm:translate-x-0 sm:-translate-y-[50%] sm:left-[34vw] w-[90%] h-fit sm:mb-0 mb-10 sm:w-[50%] CUSTOMBG sm:h-[95%] rounded-xl">
                <h1 className="text-center select-text pt-8 w-[150%] sm:mt-[10px]  pr-[150px] font-bold underline text-white text-2xl">
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
                <div className="INGREDIENTS flex-col justify-center h-28 items-center w-full">
                    <h1 className="text-center font-bold underline mb-2 text-white pt-2">
                        Ingredients
                    </h1>
                    <div className="INGREDIENTS h-[80%] overflow-y-auto overflow-x-hidden overflow-ellipsis">
                        {props.ingredients.map((i) => {
                            return (
                                <div className="INgredient bg-[rgba(0,0,0,0.5)] shadow-md pl-2 text-white mb-2 rounded mx-1">
                                    {i.name}: {i.amount}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function RecipePage(props) {
    const recipe = props.recipe;
    return (
        <div className="RECIPEPAGE h-full w-full overflow-x-hidden">
            <Head>
                <title>Munchbox - {recipe.creator}'s recipe.</title>
            </Head>
            <Navbar />
            <Recipe
                image={recipe.image}
                name={recipe.name}
                creator={recipe.creator}
                time={recipe.time}
                ingredients={recipe.ingredients}
                content={recipe.content}
            ></Recipe>
            <Footer />
        </div>
    );
}

export async function getServerSideProps(context) {
    const response = await fetch(
        process.env["NEXT_PUBLIC_RUN_ENV"] === "dev"
            ? `${process.env["NEXT_PUBLIC_DEV_BASE_URL"]}/api/recipes/${context.query.id}`
            : `${process.env["NEXT_PUBLIC_PROD_BASE_URL"]}/api/recipes/${context.query.id}`,
        {
            method: "GET",
            headers: {
                "munchbox-auth-key": [
                    ...JSON.parse(process.env["AUTH_KEY"]),
                ][0],
            },
        }
    );
    let data = await response.json();
    if (data.notFound) {
        return {
            redirect: {
                destination: "/404",
                permanent: false,
            },
        };
    }
    return {
        props: {
            recipe: data.recipe,
        },
    };
}
