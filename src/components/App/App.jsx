import { Route, Routes } from "react-router-dom";
import css from "./App.module.css";
import Navigation from "../Navigation/Navigation";
import SearchBar from "../SearchBar/SearchBar";

export default function App() {

    return (
        <>
            <header className={css.container}>
                <Navigation />
            </header>
            <main>
                <SearchBar />
                <Routes>

                    <Route path="/" element={<div>Home Page</div>} />
                    <Route path="/movies" element={<div>Movies Page</div>} />
                    <Route path="*" element={<div>404 Not Found Page</div>} />

                </Routes>

            </main>
           

        </>
            

           

        
    )
}