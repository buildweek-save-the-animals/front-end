import React from "react";
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios'
import styled from 'styled-components'

const Bttn = styled.button `
margin:15% 40%;
    padding:5% 5%;
    border-radius: 5px;
    box-shadow: 3px 3px 0px 2px rgb(133, 149, 136)
`

const H1 = styled.h1 `
text-align:center;
font-family: Verdana, Geneva, Tahoma, sans-serif;
`
const H5 = styled.h5 `
text-align:center;
font-family: Verdana, Geneva, Tahoma, sans-serif;
`


const OrgLogin = ({values, errors, touched, status}) => {


    return (
        <section className='register-section'>
            <H1>Organization Login</H1>
            <Form>

            <div className='user-input-container'>

                <label className='user-org'><H5>Enter Username</H5>
                    <Field type='text' name='username'></Field>
                    {touched.username && errors.username && <p className='errors-reg'>{errors.username}</p>}

                </label>

        

                <label className='password-org'><H5>Enter Password</H5>
                    <Field type='password' name='password'></Field>
                    {touched.password && errors.password && <p className='errors-reg'>{errors.password}</p>}
                </label>

             </div>

       
           

            <Bttn className='sub-bttn-log' type='submit'>Login</Bttn>






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
    axios.post('https://bw-save-the-animals.herokuapp.com/auth/login',values)
    .then(res => {
        console.log('post is working', res)
       
    })
    .catch(err => console.log(err.res))
}


})(OrgLogin)
export default FormikOrgLogin