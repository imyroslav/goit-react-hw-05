import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css"

const linkActive = ({ isActive }) => {
                        return clsx(css.link, isActive && css.active);
                    }

export default function Navigation() {

    return (
         <nav>   
                <ul className={css.list} >
                    <li>
                    <NavLink to="/" className={linkActive} > Home</NavLink>
                    </li>
                    <li>
                    <NavLink to="/movies"
                             className={linkActive} >Movies</NavLink>
                    </li>
                </ul>
            </nav>
    )
}