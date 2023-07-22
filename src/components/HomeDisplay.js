import { useState, useEffect } from "react";

export default function HomeDisplay() {
    const texts = ["Store", "Create", "Share"];
    const [currentIndex, setCurrentIndex] = useState(0);
    const date = new Date();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 2000);

        return () => clearInterval(interval);
    });

    return (
        <div className="HomeDisplay absolute left-32 top-64 min-w-full flex flex-col">
            <div className="HomeDisplay-Top text-4xl flex font-semibold text-gray-800">
                <div className="textstuff">
                    <h1 className="HomeDisplay-Title flex font-extrabold">
                        Munchbox - Recipes made easy.
                    </h1>
                    <div className="flex">
                        <div
                            className=" text-blue-900 flex justify-center items-center relative top-[18px] left-[80px] text-5xl uppercase font-extrabold"
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
                        <p className="mt-6 ml-[180px] font-bold">
                            recipes you love.
                        </p>
                    </div>
                    <div className="BUTTONSCONTAINER flex mt-10">
                        <a href="#btn-getstarted">
                            <button className="bg-gray-800 hover:-translate-y-1 cursor-pointer transition-all text-white text-2xl p-3 mr-4 px-6 rounded">
                                Get Started
                            </button>
                        </a>
                        <a href="#btn-about">
                            <button className="bg-gray-800 hover:-translate-y-1 cursor-pointer transition-all text-white text-2xl p-3 mr-4 px-6 rounded">
                                About
                            </button>
                        </a>
                    </div>
                </div>

                <img
                    src="./frontpage.jpeg"
                    alt="Delicious Food"
                    className="absolute left-[800px] shadow-lg hover:shadow-2xl transition-all top-0 hover:top-[-10px] rounded-2xl border-8 border-solid border-gray-900"
                    width={600}
                />
            </div>
        </div>
    );
}
