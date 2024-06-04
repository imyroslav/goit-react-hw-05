import css from "./HomePage.module.css";
import MovieTrends from "../../components/MovieTrends/MovieTrends";


export default function HomePage() {
    return (
        <div>
            <h2 className={css.title}>Trending today</h2>
            <MovieTrends />
        </div>
    )
}