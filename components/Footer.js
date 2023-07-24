import Link from "next/link";
import { montserrat } from "../components/Fonts";

export default function Footer() {
    const date = new Date();
    return (
        <div
            className={`Footer bg-gray-700 absolute bottom-0 w-full h-[50px] text-center pt-4 text-white font-bold left-0 ${montserrat.className}`}
        >
            <Link
                href="/"
                className="hover:underline underline-offset-[10px] hover:underline-offset-2 transition-all"
            >
                Munchbox
            </Link>{" "}
            {date.getFullYear()}© by{" "}
            <Link
                href="https://github.com/smarbo"
                className="hover:underline underline-offset-[10px] hover:underline-offset-2 transition-all"
            >
                Eddie Obrams
            </Link>
        </div>
    );
}
