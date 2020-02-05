import React from "react";
import {withFormik, Form, Field} from 'formik';
import './registerPage.css';
import * as Yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';

//need to bring in conditional statement that increases div height for background if validation fails on register.

const H5 = styled.h5 `
text-align:center;
font-family: Verdana, Geneva, Tahoma, sans-serif;
`
const H1 = styled.h1 `
text-align:center;
font-family: Verdana, Geneva, Tahoma, sans-serif;
`

const RegisterPage = ({values, errors, touched, status}) => {


    return (
        <section className='register-section'>
            <H1>Register Page</H1>
            <Form>

            <div className='user-input-container'>

                <label className='user-Reg'><H5>Create Username</H5>
                    <Field type='text' name='username'></Field>
                    {touched.username && errors.username && <p className='errors-reg'>{errors.username}</p>}

                </label>

                <label className='email-Reg'><H5>Email</H5>
                    <Field type='email' name='email'></Field>
                    {touched.email && errors.email && <p className='errors-reg'>{errors.email}</p>}
                </label>

                <label className='password-Reg'><H5>Create Password</H5>
                    <Field type='password' name='password'></Field>
                    {touched.password && errors.password && <p className='errors-reg'>{errors.password}</p>}
                </label>

             </div>

            <div className='check-box-container'>

                <H5>User Type</H5>

                <label className='checkBox-Reg'>Donor
                <Field type='radio' name='radio' value='donor'></Field>
                {touched.radio && errors.radio && <p className='errors-reg'>{errors.radio}</p>}
                </label>

                
                <label className='checkBox-Reg'>Organization
                <Field type='radio' name='radio' value='organization'></Field>
                {touched.radio && errors.radio && <p className='errors-reg'>{errors.radio}</p>}
                </label>

            </div>

            <button className='reg-button' type='submit'>Register</button>






            </Form>


        </section>
    )
}

const FormikRegister = withFormik({
    mapPropsToValues({username,email,password,radio}){
        return {
            username:'',
            email:'',
            password:'',
            radio:'',
        }
    },



validationSchema: Yup.object().shape({
username: Yup.string().required(),
email: Yup.string().required(),
password: Yup.string().min(8).required(),
// radio: Yup.boolean().oneOf(['donor','organization']),
radio:Yup.string().required(),

}),


handleSubmit(values) {
    console.log('submitting',values);
    axios.post('https://bw-save-the-animals.herokuapp.com/auth/register',values)
    .then(res => {
        console.log('post is working', res)
       
    })
    .catch(err => console.log(err.res))
}


})(RegisterPage)
export default FormikRegister