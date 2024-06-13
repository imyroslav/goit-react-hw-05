import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../movie-api";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";




export default function MovieList() {

    const [trends, setTrends] = useState([]);
     const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        
        async function fetchTrends() {
            try { 
                setIsLoading(true);
                setIsError(false);
                const { data: { results } } = await getTrendingMovies();
                setTrends(results);
                const titles = results.map(result => result.original_title)
                console.log(titles)
            } catch (error) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
            
        
        }
        
        fetchTrends();
    }, []);

    return (

        <>
            {isError && <Error />}
            {trends.length > 0 &&
                <ul>
                    {trends.map(trend => (
                        <li key={trend.id}>
                            <p>{trend.original_title}</p>
                        </li>))}
                </ul>
            }
            {isLoading && <Loader />}
            
        </>
        
    )
    
    
}