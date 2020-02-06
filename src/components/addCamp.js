import React from "react";
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';


const AddCamp = ({errors,touched}) => {
return (
    <section className='add-campaign'>
        <h1>Add Campaign</h1>
        <Form>
            <div className='camp-input'>

                <label className='camp-title'><h5>Add Title</h5>
                <Field type='text' name='title'></Field>
                </label>

                <label className='camp-location'><h5>Add Location</h5>
                <Field type='text' name='location'></Field>
                </label>

                <label className='camp-description'><h5>Add Description</h5>
                <Field as='textarea' type='text' name='description'></Field>
                </label>

            </div>


            <div className='radio-container'>

                <H5>Urgency</H5>

                <label className='checkBox-camp'>Low
                <Field type='radio' name='radio' value='low'></Field>
                {touched.radio && errors.radio && <p className='errors-camp'>{errors.radio}</p>}
                </label>

                
                <label className='checkBox-camp2'>Medium
                <Field type='radio' name='radio' value='medium'></Field>
                {touched.radio && errors.radio && <p className='errors-camp'>{errors.radio}</p>}
                </label>

                <label className='checkBox-camp3'>High
                <Field type='radio' name='radio' value='high'></Field>
                {touched.radio && errors.radio && <p className='errors-camp'>{errors.radio}</p>}
                </label>

            </div>

            





           











        </Form>
    </section>
)
}