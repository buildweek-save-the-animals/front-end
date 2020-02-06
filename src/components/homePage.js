import React from 'react'
import styled from 'styled-components';
import './homePage.css';

const HomeDiv = styled.div `
margin:10% 25%;
background-color:rgb(37, 68, 95,0.9);
box-shadow: inset 0 0 10px #000000;
border-radius:10px;
`

const Pgraph = styled.p `
font-size:1.3rem;
color:rgb(255, 255, 255);
padding:10%;
font-family: Verdana, Geneva, Tahoma, sans-serif;
`

const H1title =styled.h1 `
color:rgb(255, 255, 255);
text-align:center;
padding-top:5%;
font-family: Verdana, Geneva, Tahoma, sans-serif;
`

const HomePage = () => {

    return (
        <HomeDiv>
            <H1title className='home-title'>Save The Animals</H1title>
            <Pgraph>Will need to add something relatively original here-->
            Key Conservation is helping conservationists receive critical funding and increased global support through an app that provides real-time updates on day-to-day campaigns. We can stop global extinction if we utilize new technology and interact with supporters in ways that they want! </Pgraph>
        </HomeDiv>
    )
}

export default HomePage