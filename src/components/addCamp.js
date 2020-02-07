import React from "react";
import {withFormik, Form, Field} from 'formik';
import { Route } from 'react-router-dom'
import * as Yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';
import './addCampaign.css';



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
padding:0 3%;
`
const Section = styled.section `
width: 400px;
height: 600px;
margin: auto;
margin-top: 5%;
background-color:rgb(37, 68, 95,0.9);
box-shadow: 3px 3px 5px 5px rgb(133, 149, 136);
border-radius: 10px;
color:rgb(255, 255, 255);

`

const CampInput = styled.div `
text-align: center;
    display: flex;
    flex-direction: column;

`

const Radio = styled.div `
display:flex;
flex-direction:row;
text-align:center;
margin:1% 13%;


`


const AddCamp = ({errors,touched,props}) => {
    // console.log(props)
return (
    <Section className='add-campaign'>
        <H1>Add Campaign</H1>
        <Form>
            <CampInput className='camp-input'>

                <label className='camp-title'><H5>Add Title</H5>
                <Field type='text' name='title'></Field>
                {touched.title && errors.title && <p className='errors-reg'>{errors.title}</p>}
                </label>

                <label className='camp-location'><H5>Add Location</H5>
                <Field type='text' name='location'></Field>
                {touched.location && errors.location && <p className='errors-reg'>{errors.location}</p>}
                </label>

                <label className='camp-description'><H5>Add Description</H5>
                <Field as='textarea' type='text' name='description'></Field>
                {touched.description && errors.description && <p className='errors-reg'>{errors.description}</p>}
                </label>

            </CampInput>


            <Radio className='radio-container'>

                <H5>Urgency</H5>

                <label className='checkBox-camp'><H5>Low-</H5>
                <Field type='radio' name='radio' value='low'></Field>
                {touched.radio && errors.radio && <p className='errors-camp'>{errors.radio}</p>}
                </label>

                
                <label className='checkBox-camp2'><H5>Medium-</H5>
                <Field type='radio' name='radio' value='medium'></Field>
                {touched.radio && errors.radio && <p className='errors-camp'>{errors.radio}</p>}
                </label>

                <label className='checkBox-camp3'><H5>High</H5>
                <Field type='radio' name='radio' value='high'></Field>
                {touched.radio && errors.radio && <p className='errors-camp'>{errors.radio}</p>}
                </label>

            </Radio>

            <label className='fund-goal'><H5>Funding Goal</H5><Field className='fund-field' type='text' name='goal'></Field>
             </label>

             <Bttn type='submit'>Add</Bttn>

</Form>

    

</Section>
)
}

const FormikAddCamp = withFormik({
    mapPropsToValues(props){

        return {
            title:props.title || '',
            location: '',
            description:props.description || '',
            radio:props.radio || '',
            goal:props.goal || '',


        }

    },

    validationSchema: Yup.object().shape({
        title:Yup.string().required(),
        location:Yup.string().required(),
        description:Yup.string().required(),
        radio:Yup.string().required(),


    }),

    handleSubmit(values,props){
        console.log('submitting',values);
        axios.post('https://reqres.in/api/users',values)
        .then(res => {
            console.log('posting',res)
            props.props.history.push('/organizationPage')
        })
        .catch(err => console.log(err.res))
    }







})(AddCamp)

export default FormikAddCamp