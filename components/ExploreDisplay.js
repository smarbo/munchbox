import Image from "next/image";
import { montserrat } from "@/components/Fonts";
import { FaTrash } from "react-icons/fa";
require("dotenv").config();
import { useEffect, useState } from "react";
import Link from "next/link";

function Recipe(props) {
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("username") === "admin") {
            return setIsAdmin(true);
        }
    }, []);

    async function handleDeleteButton() {
        const response = await fetch(
            process.env["NEXT_PUBLIC_RUN_ENV"] === "dev"
                ? `${process.env["NEXT_PUBLIC_DEV_BASE_URL"]}/api/recipes/${props.id}`
                : `${process.env["NEXT_PUBLIC_PROD_BASE_URL"]}/api/recipes/${props.id}`,
            {
                method: "DELETE",
                headers: {
                    "munchbox-auth-key": [
                        ...JSON.parse(process.env["NEXT_PUBLIC_AUTH_KEY"]),
                    ][0],
                },
            }
        );

        if (response.ok) {
            window.location.href = "/explore";
        }
    }

    return (
        <Link
            href={`/recipes/${props.link}`}
            className=" shadow-2xl shadow-gray-600 group hover:shadow-none hover:translate-y-3  transition-all p-4 w-[250px] max-h-[500px] bg-gradient-to-br from-gray-700 via-gray-800 to-gray-700 bg-opacity-50 rounded-lg mx-4 my-3 flex flex-col justify-center items-center text-white ${montserrat.className} "
        >
            {isAdmin ? (
                <button
                    onClick={handleDeleteButton}
                    className="absolute z-50 bg-red-700 hover:bg-red-800 transition-all p-3 group-hover:scale-100 scale-0 origin-center rounded-[50%] right-0 translate-x-[10%] -translate-y-[10%] top-0"
                >
                    <FaTrash color="white" size={16} />
                </button>
            ) : (
                ""
            )}

            <div
                className={`RECIPECONTAINER ${montserrat.className}`}
                style={{
                    backdropFilter: "blur(5px)",
                }}
            >
                <div id="imageContainer" className="w-[200px]">
                    <Image
                        width={2000}
                        height={2000}
                        alt={props.title}
                        src={props.img}
                        className="object-cover shadow-lg hover:shadow-none transition-all h-[300px] rounded-lg border-8 border-opacity-60 border-gray-900"
                    />
                </div>

                <div className="RECIPEINFO">
                    <h1 className="RECIPETITLE text-center font-bold max-w-[200px] my-4 overflow-hidden whitespace-nowrap overflow-ellipsis ">
                        {props.title}
                    </h1>
                    <p className="RECIPEBOTTOM line-clamp-4 max-w-[200px] overflow-hidden whitespace-pre-line text-left max-h-[100px]">
                        {props.description}
                        By{" "}
                        <span className="font-semibold hover:underline">
                            {props.creator}
                        </span>
                        <br />
                        Takes{" "}
                        <span className="font-semibold">{props.time}</span>{" "}
                        minutes
                    </p>
                </div>
            </div>
        </Link>
    );
}

export default function ExploreDisplay({ data }) {
    return (
        <div className="EXPLOREDISPLAY pb-[200px] pt-[20px] max-w-full h-full flex mx-[30px] justify-center mt-10 flex-wrap overflow-scroll shadow-inner">
            {data.length >= 1 ? (
                data.map((r) => {
                    return (
                        <Recipe
                            key={r._id}
                            link={r._id}
                            img={r.image}
                            time={r.time}
                            creator={r.creator}
                            title={r.title}
                            id={r._id}
                        />
                    );
                })
            ) : (
                <h1>No recipes found.</h1>
            )}
        </div>
    );
}
