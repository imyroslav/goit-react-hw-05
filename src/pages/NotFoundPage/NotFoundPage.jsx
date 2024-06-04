import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";



export default function NotFoundPage() {

    return <div>
        <p className={css.sorry}>Sorry, page not found. Please go back to your <Link to="/">Home</Link></p>
    </div>
}