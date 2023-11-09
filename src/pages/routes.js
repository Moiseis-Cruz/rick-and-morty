import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CardsList } from "./cards";
import { Post } from "./card";

export const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<CardsList />} />
                <Route exact path="/card/:id" element={<Post />} />
            </Routes>
        </BrowserRouter>
    )
}