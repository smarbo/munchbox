require("dotenv").config();
import { useForm } from "react-hook-form";
import { FaPizzaSlice, FaBackspace, FaPlusCircle } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import { montserrat } from "@/components/Fonts";
import Layout from "@/components/Layout";

const authKey = JSON.parse(process.env.NEXT_PUBLIC_AUTH_KEY)[0];

export default function NewRecipePage() {
    const [selectedImage, setSelectedImage] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = (event) => {
                const dataUrl = `${event.target.result}`;
                setSelectedImage(dataUrl);
            };

            reader.readAsDataURL(file);
        } else {
            console.log("NO FILE");
        }
    };
    const handleIngredientDelete = (index) => {
        const updatedIngredients = [...ingredients];
        updatedIngredients.splice(index, 1);
        setIngredients(updatedIngredients);
    };
    return (
        <Layout
            topClass={`NEWRECIPEPAGE w-full h-screen ${montserrat.className}`}
            title="Munchbox - New Recipe"
        >
            <form
                className="RECIPEMAKERCONTAINER py-4 px-5 flex flex-col absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-[90%] lg:w-[70%] h-[75%] bg-[rgba(40,41,48,0.65)] rounded-[22px]"
                onSubmit={handleSubmit(async (data) => {
                    const body = {};
                    body.title = data.recipeTitle;
                    body.time = data.recipeTime;
                    body.ingredients = ingredients;
                    body.content = data.recipeContent;
                    body.creator = "@eddieobrams";
                    body.image = selectedImage;

                    try {
                        const res = await fetch("/api/recipes/", {
                            method: "POST",
                            headers: {
                                "munchbox-auth-key": authKey,
                                "Content-Type": "multipart/form-data",
                            },
                            body: JSON.stringify(body),
                        });

                        if (res.ok) {
                            console.log("Recipe created successfully");
                            console.log(await res.json());
                        } else {
                            console.log("Something went wrong.");
                            console.log(await res.json());
                        }
                    } catch (err) {
                        console.error("An error occurred: ", err);
                    }
                    console.log(
                        `Submitted form with a title of ${data.recipeTitle}`
                    );
                })}
            >
                <h1 className="w-full text-center text-white font-bold text-2xl">
                    Recipe Maker
                </h1>
                <div className={`w-full h-full flex flex-col lg:flex-row`}>
                    <div className="LEFT w-full lg:w-[50%] h-full  ">
                        <div className="TOP lg:h-[50%] w-full p-3">
                            <div
                                className={`IMAGECONTAINER ${
                                    errors.recipeImage
                                        ? "bg-[rgba(249,108,108,0.3)]"
                                        : "bg-[#434343]"
                                } rounded-t-[8px] flex justify-center items-center w-full min-h-[200px] h-[30%] lg:h-[85%]`}
                            >
                                {selectedImage ? (
                                    <Image
                                        src={selectedImage}
                                        alt="Your Image"
                                        className=" w-[50%] lg:w-full h-[30%] lg:h-full rounded-t-[8px] object-cover"
                                        width={400}
                                        height={400}
                                    />
                                ) : (
                                    <span className="font-bold text-[rgba(255,255,255,0.5)] m-4 text-center text-xl">
                                        No Image Selected
                                    </span>
                                )}
                            </div>
                            <button
                                type="button"
                                onClick={() => {
                                    document
                                        .getElementById("imageInput")
                                        .click();
                                }}
                                className=" w-full h-[15%] bg-[#2A8EEA] hover:bg-[#106EEA] transition-all flex justify-center items-center rounded-b-[8px] text-white font-bold "
                            >
                                Choose Image
                            </button>
                            <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                {...register("recipeImage", {
                                    required: "Please select an image.",
                                })}
                                id="imageInput"
                                onChange={handleImageChange}
                            />
                        </div>
                        <div className="BOTTOM h-[45%] w-full p-3">
                            <div className="h-full w-full bg-[#434343] px-2 py-3 rounded-[8px]">
                                <h1 className="text-center w-full text-white font-bold underline text-xl ">
                                    Ingredients
                                </h1>
                                <div className="INGREDIENTS lg:mb-0 mb-5 px-3 py-5 w-full h-[calc(100%-20px)] overflow-auto scrollbar scrollbar-track-[rgba(0,0,0,0.2)] scrollbar-thumb-[rgba(150,180,255,0.6)]">
                                    {ingredients.map((ingredient, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className="w-full flex h-[20px] lg:h-[40px] rounded-[8px] mt-4 text-white font-bold"
                                            >
                                                <p className="bg-[rgba(166,166,166,0.60)] line-clamp-1 overflow-ellipsis px-4 text-center lg:flex lg:justify-center lg:items-center text-sm rounded-md lg:rounded-lg mr-3 w-[60%] ring ring-gray-400 cursor-pointer">
                                                    {ingredient.name}
                                                </p>
                                                <p className="bg-[rgba(166,166,166,0.60)] text-center text-sm flex justify-center items-center rounded-md lg:rounded-lg mr-3 ring w-[30%] ring-gray-400 cursor-pointer">
                                                    {ingredient.amount}
                                                </p>
                                                <button
                                                    type="button"
                                                    className="bg-[rgba(249,108,108,0.6)] flex justify-center rounded-lg mr-3 items-center ring w-[10%] ring-gray-400 cursor-pointer"
                                                    onClick={() =>
                                                        handleIngredientDelete(
                                                            index
                                                        )
                                                    }
                                                >
                                                    <FaBackspace
                                                        size={28}
                                                        color="white"
                                                    />
                                                </button>
                                            </div>
                                        );
                                    })}
                                    <div className="w-full flex h-[20px] lg:h-[40px] rounded-[8px] mt-4 text-white font-bold">
                                        <input
                                            className="bg-[rgba(166,166,166,0.60)] text-center text-md rounded-md lg:rounded-lg mr-3 ring w-[60%] ring-gray-400 cursor-pointer"
                                            placeholder="Name"
                                            id="nameInput"
                                        />
                                        <input
                                            className="bg-[rgba(166,166,166,0.60)] text-center text-sm rounded-md lg:rounded-lg mr-3 ring w-[30%] ring-gray-400 cursor-pointer"
                                            placeholder="Amount"
                                            id="amountInput"
                                        />
                                        <button
                                            type="button"
                                            className="bg-[rgba(112,157,255,0.71)] flex justify-center rounded-md lg:rounded-lg items-center ring w-[10%] ring-gray-400 cursor-pointer"
                                            onClick={() => {
                                                if (
                                                    document.getElementById(
                                                        "nameInput"
                                                    ).value &&
                                                    document.getElementById(
                                                        "amountInput"
                                                    ).value
                                                ) {
                                                    setIngredients([
                                                        ...ingredients,
                                                        {
                                                            name: document.getElementById(
                                                                "nameInput"
                                                            ).value,
                                                            amount: document.getElementById(
                                                                "amountInput"
                                                            ).value,
                                                        },
                                                    ]);
                                                    document.getElementById(
                                                        "nameInput"
                                                    ).value = "";
                                                    document.getElementById(
                                                        "amountInput"
                                                    ).value = "";
                                                    document
                                                        .getElementById(
                                                            "nameInput"
                                                        )
                                                        .focus();
                                                    document.getElementById(
                                                        "amountInput"
                                                    ).tabIndex = 1;
                                                }
                                            }}
                                        >
                                            <FaPlusCircle
                                                size={26}
                                                color="white"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/**
                     *********************************************** Right side begins *********************************************************************
                     */}
                    <div className="RIGHT w-full lg:w-[50%] h-full ">
                        <div className="TOP h-[40%] lg:h-[15%] flex w-full p-3  ">
                            <input
                                type="text"
                                spellCheck="false"
                                autoComplete="off"
                                className={`${
                                    errors.recipeTitle
                                        ? "bg-[rgba(140,66,66,0.60)]"
                                        : "bg-[rgba(65,66,66,0.60)]"
                                } px-8 rounded-[11px] border-[rgba(65,66,66,0.60)] text-lg overflow-ellipsis border-[4px] placeholder:text-[#777777] font-semibold h-full w-[70%] focus:outline-none selection:bg-gray-700 text-white selection:text-white`}
                                placeholder="Recipe Title"
                                {...register("recipeTitle", {
                                    required: "Please enter a title.",
                                    minLength: {
                                        value: 4,
                                        message: "Provide at least 4 letters.",
                                    },
                                })}
                            />
                            <input
                                type="number"
                                placeholder="Time"
                                className={` ml-2 ${
                                    errors.recipeTime
                                        ? "bg-[rgba(140,66,66,0.60)]"
                                        : "bg-[rgba(65,66,66,0.60)]"
                                } px-2 lg:px-8 rounded-[11px] border-[rgba(65,66,66,0.60)] text-center text-lg overflow-ellipsis border-[4px] placeholder:text-[#777777] max-w-[30%] font-semibold h-full relative focus:outline-none selection:bg-gray-700 text-white selection:text-gray-700`}
                                {...register("recipeTime", {
                                    required: "Please enter a cook time.",
                                    min: {
                                        value: 1,
                                        message: "Can't be below 1.",
                                    },
                                })}
                            />
                        </div>
                        <div className="MIDDLE h-[72%] p-3 w-full  ">
                            <textarea
                                {...register("recipeContent", {
                                    required:
                                        "Please enter the recipe content.",
                                })}
                                spellCheck="false"
                                placeholder="Recipe Content"
                                className={`${
                                    errors.recipeContent
                                        ? "bg-[rgba(140,66,66,0.60)]"
                                        : "bg-[rgba(0,0,0,0.30)]"
                                } placeholder:text-[#777777] font-semibold pt-[20px] px-[40px] text-white resize-none rounded-[11px] scrollbar scrollbar-track-[rgba(0,0,0,0.2)] scrollbar-thumb-[rgba(150,180,255,0.6)] focus:outline-none whitespace-pre overflow-auto border-[5px] border-[rgba(65,66,66,0.60)] w-full min-h-[calc(100%+300px)] lg:min-h-full`}
                            />
                        </div>
                        <div className="BOTTOM lg:static absolute -bottom-[550px] lg:left-0 left-[50%] lg:translate-x-0 -translate-x-[50%] h-[8%] w-full  px-4 py-1">
                            <button className="w-full h-full group bg-[#2A8EEA] hover:bg-[#106EEA] transition-all  flex justify-center items-center rounded-[8px] text-white font-bold ring-[7px] ring-[#156FC2]">
                                Publish
                                <FaPizzaSlice
                                    size={16}
                                    className="ml-3 group-hover:rotate-180 transition-all"
                                    color="white"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </Layout>
    );
}
