import { Link } from "react-router-dom";

export default function MovieList({ data }) {

    return (
        <ul>
            {data.map((movie) => (
                <li key={movie.id}>
                    <Link to={`/movies/${movie.id}`}>
                        {movie.title}
                    </Link> 
                  
               </li>
           ))}
        </ul>
    )
}