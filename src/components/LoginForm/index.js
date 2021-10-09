import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
export const LoginForm = () => {
    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        validationSchema: Yup.object({
          password: Yup.string()
            .min(5, 'Must be 5 characters or less')
            .required('Required'),
          email: Yup.string().email('Invalid email address').required('Required'),
        }),
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form className="block-form" onSubmit={formik.handleSubmit}>
            <label> Email</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
            ) : null}
            <label> Password</label>
            <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
            ) : null}
    
       <button type="submit">Submit</button>
     </form>
    )
}

export default LoginForm;