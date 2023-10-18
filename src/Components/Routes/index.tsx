import { Routes, Route } from "react-router-dom";
import Error404 from "../Comp/Error404";
import { Home } from "../Comp/Home";
import DarkModeToggle from "../Comp/Dark";

export const Rotas = () =>{
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dak" element={<DarkModeToggle />} />
            <Route path="*" element={<Error404 />} />
            

        </Routes>
    )
}