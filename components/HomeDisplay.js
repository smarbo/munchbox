import { useState, useEffect } from "react";
import { montserrat, gochi } from "@/components/Fonts";
import Link from "next/link";
import Image from "next/image";

export default function HomeDisplay() {
    const texts = ["Store", "Create", "Share"];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imageIndex, setImageIndex] = useState(0);
    const images = [
        "/img/prawnsalad.jpg",
        "/img/chicken1.jpg",
        "/img/burger3.jpg",
        "/img/chicken3.jpg",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
            setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);

        return () => {
            clearInterval(interval);
        };
    });

    return (
        <div
            className={`HomeDisplay ${montserrat.className} absolute lg:left-32 lg:top-64 lg:mt-0 mt-5 min-w-full flex flex-col px-5`}
        >
            <div className="HomeDisplay-Top text-xl text-center lg:text-4xl lg:flex-row flex-col flex font-semibold text-gray-800">
                <div className="textstuff flex flex-col">
                    <h1 className="HomeDisplay-Title flex font-extrabold lg:text-left text-center">
                        Munchbox - Recipes made easy.
                    </h1>
                    <div className="flex">
                        <div
                            className={` ${gochi.className} text-blue-900 flex justify-center font-normal stroke-slate-950 stroke-2 items-center relative top-[9px] left-[80px] lg:top-[20px] lg:left-[80px] text-3xl lg:text-5xl uppercase`}
                            id="movingText"
                        >
                            {texts.map((text, index) => (
                                <div
                                    key={index}
                                    className={`transition-all duration-700 absolute ${
                                        index === currentIndex
                                            ? "opacity-1"
                                            : "translate-y-[10px] opacity-0"
                                    }`}
                                >
                                    {text}
                                </div>
                            ))}
                        </div>
                        <p className="ml-[150px] mt-3 lg:mt-8 lg:ml-[180px] font-bold">
                            recipes you love.
                        </p>
                    </div>
                    <div className="BUTTONSCONTAINER flex mt-10 items-center lg:justify-start justify-center">
                        <Link href="/auth">
                            <button className="bg-gray-800 text-md active:bg-gray-950  hover:translate-y-1 max-h-[75px] min-h-[75px] w-fit lg:min-w-[200px] border-4 border-gray-900 cursor-pointer transition-all text-white lg:text-2xl p-3 mr-4 px-6 rounded-lg shadow-2xl shadow-gray-700 hover:shadow-none">
                                Get Started
                            </button>
                        </Link>
                        <Link href="#about">
                            <button className="bg-gray-800 text-md active:bg-gray-950 hover:translate-y-1 max-h-[75px] min-h-[75px] w-fit lg:min-w-[200px] border-4 border-gray-900 cursor-pointer transition-all text-white lg:text-2xl p-3 mr-4 px-6 rounded-lg shadow-2xl shadow-gray-700 hover:shadow-none">
                                About
                            </button>
                        </Link>
                    </div>
                </div>
                {images.map((image, index) => (
                    <div
                        id="imageContainer"
                        key={index}
                        className={`${
                            index === imageIndex
                                ? "currentImage"
                                : "notCurrentImage"
                        } lg:h-[400px]  transition-all duration-700 absolute rotate-0 lg:left-[800px] shadow-lg lg:translate-y-0 translate-y-[38vh] h-[250px] w-[250px] lg:w-[600px] lg:translate-x-0 left-[50%] translate-x-[-50%] hover:shadow-2xl lg:top-0 hover:top-[-10px] rounded-2xl border-8 border-solid border-gray-900 ${
                            index === imageIndex ? "opacity-1" : "opacity-0"
                        }`}
                    >
                        <Image
                            src={image}
                            alt="Delicious Food"
                            className={`w-full object-cover h-full lg:w-[600px] rotate-0`}
                            height={400}
                            width={400}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
