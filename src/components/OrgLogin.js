import React from "react";
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios'


const OrgLogin = ({values, errors, touched, status}) => {


    return (
        <section className='register-section'>
            <Form>

            <div className='user-input-container'>

                <label className='user-Reg'>Enter Username
                    <Field type='text' name='username'></Field>
                    {touched.username && errors.username && <p className='errors-reg'>{errors.username}</p>}

                </label>

        

                <label className='password-Reg'>Enter Password
                    <Field type='password' name='password'></Field>
                    {touched.password && errors.password && <p className='errors-reg'>{errors.password}</p>}
                </label>

             </div>

       
           

            <button type='submit'>Login</button>






            </Form>


        </section>
    )
}

const FormikOrgLogin = withFormik({
    mapPropsToValues({username,password}){
        return {
            username:'',
            password:'',
           
        }
    },



validationSchema: Yup.object().shape({
username: Yup.string().required(),
password: Yup.string().min(8).required(),


}),


handleSubmit(values) {
    console.log('submitting',values);
    axios.post('https://bw-save-the-animals.herokuapp.com/auth/register')
    .then(res => {
        console.log('post is working', res)
       
    })
    .catch(err => console.log(err.res))
}


})(OrgLogin)
export default FormikOrgLogin