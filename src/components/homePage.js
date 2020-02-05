import React from 'react'
import styled from 'styled-components';

const HomeDiv = styled.div `
margin:10% 25%;
background-color:rgb(37, 68, 95,0.5);
box-shadow: inset 0 0 10px #000000;
border-radius:10px;
`

const Pgraph = styled.p `
font-size:1.3rem;

padding:10%;
`

const HomePage = () => {

    return (
        <HomeDiv>
            <Pgraph>Will need to add something relatively original here-->
            Key Conservation is helping conservationists receive critical funding and increased global support through an app that provides real-time updates on day-to-day campaigns. We can stop global extinction if we utilize new technology and interact with supporters in ways that they want! </Pgraph>
        </HomeDiv>
    )
}

export default HomePage