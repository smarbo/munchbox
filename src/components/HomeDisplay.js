import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function HomeDisplay() {
    const texts = ["Store", "Create", "Share"];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 2000);

        return () => clearInterval(interval);
    });

    return (
        <div className="HomeDisplay absolute lg:left-32 lg:top-64 lg:mt-0 mt-5 min-w-full flex flex-col px-5">
            <div className="HomeDisplay-Top text-xl text-center lg:text-4xl lg:flex-row flex-col flex font-semibold text-gray-800">
                <div className="textstuff flex flex-col">
                    <h1 className="HomeDisplay-Title flex font-extrabold lg:text-left text-center">
                        Munchbox - Recipes made easy.
                    </h1>
                    <div className="flex">
                        <div
                            className=" text-blue-900 flex justify-center items-center relative top-[9px] left-[80px] lg:top-[20px] lg:left-[80px] text-3xl lg:text-5xl uppercase font-extrabold"
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
                    <div className="BUTTONSCONTAINER flex mt-10 justify-center items-center">
                        <Link to="#get-started">
                            <button className="bg-gray-800 text-md  hover:-translate-y-1 max-h-[90px] min-h-[90px] cursor-pointer transition-all text-white lg:text-2xl p-3 mr-4 px-6 rounded-lg hover:shadow-2xl">
                                Get Started
                            </button>
                        </Link>
                        <Link to="#about">
                            <button className="bg-gray-800 text-md hover:-translate-y-1 max-h-[90px] min-h-[90px] min-w-fit cursor-pointer transition-all text-white lg:text-2xl p-3 mr-4 px-6 rounded-lg hover:shadow-2xl">
                                About
                            </button>
                        </Link>
                    </div>
                </div>

                <img
                    src="./frontpage.jpeg"
                    alt="Delicious Food"
                    className="w-[300px] lg:w-[600px] absolute lg:left-[800px] shadow-lg lg:translate-y-0 translate-y-[35vh] lg:translate-x-0 left-[50%] translate-x-[-50%] hover:shadow-2xl transition-all lg:top-0 hover:top-[-10px] rounded-2xl border-8 border-solid border-gray-900"
                    width={600}
                />
            </div>
        </div>
    );
}
