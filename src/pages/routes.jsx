import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CardsList } from "./cards";
import { Post } from "./charater";
import { Header } from "../components/header";

export const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/" element={<CardsList />} />
                <Route exact path="/card/:id" element={<Post />} />
            </Routes>
        </BrowserRouter>
    )
};