import { useEffect } from "react";
import { getTrendingMovies } from "../../movie-api";



export default function MovieTrends() {
    
    useEffect(() => {
    getTrendingMovies().then(data => {
        console.log(data);
    })
}, [])

    return (
        <div>Trends</div>
    );
}