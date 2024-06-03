import { NavLink } from "react-router-dom"


export default function Navigation() {

    return (
         <nav>   
                <ul>
                    <li>
                    <NavLink to="/" className={(params) => {
                        console.log(params.isActive)
                        return "superhru"
                    }} >
                        Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/movies">Movies</NavLink>
                    </li>
                </ul>
            </nav>
    )
}