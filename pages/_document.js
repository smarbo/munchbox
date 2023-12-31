import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body
                className="bg-gray-400 bg-gradient-to-b from-gray-400 to-blue-300"
                style={{ height: "100dvh" }}
            >
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
