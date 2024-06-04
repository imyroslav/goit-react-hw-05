import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./SearchBar.module.css"

const SearchSchema = Yup.object().shape({moviename: Yup.string().min(3, "Too short").max(5, "Too long").required("Required")});


export default function SearchBar({ onSearch }) {
    const handleSubmit = (values, actions) => { 
        console.log(values)
        actions.resetForm();
    };


    return (
        <Formik initialValues={{ moviename: "" }}
                onSubmit={handleSubmit}
                validationSchema={SearchSchema}
        >
            <Form className={css.form}>
                <div>
                    <label>Enter movie name, please</label>
                    <Field
                        className={css.field}
                        name="moviename"
                        autoComplete="off"
                        autoFocus
                        placeholder="Let's find movie"
                    />
                    <ErrorMessage className={css.error} name="moviename" component="span"/>
                </div>
            
                <button className={css.button} type="Submit">Search</button>

            </Form>

        </Formik>
    )
}