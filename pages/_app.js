import "@/styles/globals.css";

require("events").EventEmitter.defaultMaxListeners = 15;

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
