import React, { useState, useEffect } from "react";
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios'


const RegisterPage = ({}) => {
// set state for posting users
    return (
        <section className='register-section'>
            <Form>

            <div className='user-input-container'>

                <label className='user-Reg'>Create Username
                    <Field type='text' name='username'></Field>

                </label>

                <label className='email-Reg'>Email
                    <Field type='email' name='email'></Field>
                </label>

                <label className='password-Reg'>Create Password
                    <Field type='password' name='password'></Field>
                </label>

             </div>

            <div className='check-box-container'>

                <p>User Type</p>

                <label className='checkBox-Reg'>Donor
                <Field type='checkbox' name='user-type'></Field>
                </label>

                
                <label className='checkBox-Reg'>Organization
                <Field type='checkbox' name='user-type'></Field>
                </label>

            </div>

            <button type='submit'>Register</button>






            </Form>


        </section>
    )
}

const FormikRegister = withFormik({
    mapPropsToValues({}){
        return {

        }
    }


// validation schema

// handle submit and post


})(RegisterPage)
export default FormikRegister