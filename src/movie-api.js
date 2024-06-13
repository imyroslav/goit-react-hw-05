import axios from "axios";

const accessToken = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MjdmYTY4M2JiMDk4MDZjOTRjNTE0MDU2ZTgzZDczNiIsInN1YiI6IjY2NWE3ZjMzYTdmOTgzODgxMDZlN2M3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sLCpShW_KTzUBUtC3uAJAQ9kL79MBhcp3aGF4cjDB1M";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] = accessToken;
axios.defaults.headers.common["accept"] = "application/json";

export const getTrendingMovies = async () => {
    const response = await axios.get("/trending/movie/day")
    // console.log(response)
    return response;
}