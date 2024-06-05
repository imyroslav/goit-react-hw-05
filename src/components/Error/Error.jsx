import Alert from "@mui/material/Alert";
import css from "./Error";


export default function Error() {
    return (
        <Alert className={css.error} variant="outlined" color="error" sevirity="warning">This is warning</Alert>
    )
    
}