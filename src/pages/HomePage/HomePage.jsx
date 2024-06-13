import css from "./HomePage.module.css";
import MovieList from "../../components/MovieList/MovieList"



export default function HomePage() {
    return (
        <div>
            <h2 className={css.title}>Trending today</h2>
            <MovieList />
        </div>
    )
}