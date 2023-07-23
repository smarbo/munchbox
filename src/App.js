import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/recipes" element={<div>Recipes</div>} />
            </Routes>
        </BrowserRouter>
    );
}
