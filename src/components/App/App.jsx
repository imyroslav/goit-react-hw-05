import { Route, Routes } from "react-router-dom";
import css from "./App.module.css";
import Navigation from "../Navigation/Navigation";
import HomePage from "../../pages/HomePage/HomePage";
import MoviesPage from "../../pages/MoviesPage/MoviesPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

export default function App() {

    return (
        <>
            <header className={css.container}>
                <Navigation />
            </header>
            <main>
                
                <Routes>

                    <Route path="/" element={<HomePage />} />
                    <Route path="/movies" element={<MoviesPage />} />
                    <Route path="*" element={<NotFoundPage />} />

                </Routes>

            </main>
           

        </>
            

           

        
    )
}