import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Atv01 from "./Pages/Atv01";
import Atv02 from "./Pages/Atv02";

export default function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/atv01" element={<Atv01/>}></Route>
                <Route path="/atv02" element={<Atv02/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}