import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardsList from "./Home";
import { CaracterPage } from "./CaracterPage";
import { Header } from "../components/header";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<CardsList />} />
                <Route path="/card/:id" element={<CaracterPage />} />
            </Routes>
        </BrowserRouter>
    )
}