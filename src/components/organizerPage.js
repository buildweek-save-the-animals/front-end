import React from "react";
import { Link } from 'react-router-dom';
import './organizerPage.css';

import styled from 'styled-components';

const OrgDiv = styled.div `
text-align:center;
padding-top:5%;

`

const Button = styled.button `
background-color:rgb(37, 68, 95,0.9);
padding:2%;
`




const OrganizationHome = () => {


    return (

        <OrgDiv className='org-page'>
        <Button><Link className="button-camp" to='/addCampaign'>Add Campaign</Link></Button>
        <Button><Link className="button-camp" to='/editCampaign'>Edit Campaign</Link></Button>
        </OrgDiv>
    )
}




export default OrganizationHome