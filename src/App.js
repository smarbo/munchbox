import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home.js";
import Authentication from "./routes/Authentication.js";
import NotFound from "./routes/NotFound.js";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/auth" element={<Authentication />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}
