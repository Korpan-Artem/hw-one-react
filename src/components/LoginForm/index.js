import React from "react";
import { useFormik } from 'formik';
export const LoginForm = () => {
    const formik = useFormik({
        initialValues: {
            email:"foobar@example.com",
            password:"foobar",
        },
        onSubmit: (values) => {
           alert(JSON.stringify(values,null,2));
        },
    });
    return (
        <form  className="block-form" onSubmit={formik.handleSubmit}>
            <input className="input-1" name="email" value={formik.values.email} onChange={formik.handleChange} type="email" />
            <input className="input-2" name="password" value={formik.values.password} onChange={formik.handleChange} type="password" />
            <button className="btn-submit" type="submit">Submit</button>
        </form>
    )
}

export default LoginForm;