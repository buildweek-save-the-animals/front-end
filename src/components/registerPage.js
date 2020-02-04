import React, { useState, useEffect } from "react";
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios'


const RegisterPage = ({values, errors, touched, status}) => {
// set state for posting users
// const [users, setUsers] = useState([]);
// useEffect(()=>{
//     console.log('status has changed', status);
//     status && setUsers(users => 
//        [...users, status])
// },[status])

    return (
        <section className='register-section'>
            <Form>

            <div className='user-input-container'>

                <label className='user-Reg'>Create Username
                    <Field type='text' name='username'></Field>
                    {touched.username && errors.username && <p className='errors-reg'>{errors.username}</p>}

                </label>

                <label className='email-Reg'>Email
                    <Field type='email' name='email'></Field>
                    {touched.email && errors.email && <p className='errors-reg'>{errors.email}</p>}
                </label>

                <label className='password-Reg'>Create Password
                    <Field type='password' name='password'></Field>
                    {touched.password && errors.password && <p className='errors-reg'>{errors.password}</p>}
                </label>

             </div>

            <div className='check-box-container'>

                <p>User Type</p>

                <label className='checkBox-Reg'>Donor
                <Field type='radio' name='radio' value='donor'></Field>
                {touched.radio && errors.radio && <p className='errors-reg'>{errors.radio}</p>}
                </label>

                
                <label className='checkBox-Reg'>Organization
                <Field type='radio' name='radio' value='organization'></Field>
                {touched.radio && errors.radio && <p className='errors-reg'>{errors.radio}</p>}
                </label>

            </div>

            <button type='submit'>Register</button>






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


handleSubmit(values,formikBag) {
    console.log('submitting',values);
    axios.post('https://bw-save-the-animals.herokuapp.com/auth/register')
    .then(res => {
        console.log('post is working', res)
        // setStatus(res.data)
    })
    .catch(err => console.log(err.res))
}


})(RegisterPage)
export default FormikRegister