import React from 'react';
import { useFormik, Formik } from 'formik';
import * as Yup from 'yup';
export const SignUpForm = () => {
    const validation = Yup.object().shape({
        username: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
         password: Yup.number()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
      });
    const formik = useFormik({
        initialValues: {
            name:"",
            email:"",
            password:"",
        },
        validationSchema:{validation},
        onSubmit: (values) => {
           alert(JSON.stringify(values,null,2));
        },
        
    });
    return (
        <Formik  className="block-form" onSubmit={formik.handleSubmit} >
          {({values,erorrs, touched, handleChange,handleBlur,isValid,handleSubmit,dirty}) => (
              <>
                    <label>Name</label>
                    <input 
                        className="input-1" 
                        name="name" 
                        value={formik.values.name} 
                        onChange={handleChange} 
                        onBlur={handleBlur} 
                        type="text" 
                    />
                    <input className="input-2" name="email" value={formik.values.email} onChange={handleChange} type="email" />
                    <input className="input-2" name="password" value={formik.values.password} onChange={handleChange} type="password" />
                    <button className="btn-submit" type="submit">Submit</button>
            </>
          )}
        </Formik>
        
    )
}

export default SignUpForm;

/*
                
            <label>Name</label>
            <input 
                className="input-1" 
                name="name" 
                value={values.name} 
                onChange={handleChange} 
                onBlur={handlerBlur} 
                type="text" 
            />
                <input className="input-2" name="email" value={formik.values.email} onChange={formik.handleChange} type="email" />
                <input className="input-2" name="password" value={formik.values.password} onChange={formik.handleChange} type="password" />
                <button className="btn-submit" type="submit">Submit</button>
            */