import React from 'react';
// import { Container } from '@material-ui/core';
import './App.css';
import { Route, withRouter } from 'react-router-dom'
import HomePage from './components/homePage';
import NavBar from './components/navBar';
import FormikRegister from './components/registerPage';
import FormikOrgLogin from './components/OrgLogin';
import FormikDonorLogin from './components/userLogin';
import CampaignSummary from './components/campaignSummary';
import FormikAddCamp from './components/addCamp';
import OrganizationHome from './components/organizerPage';

// import lbRain from './images/luca-bravo-forest-macro';



function App(props) {
  // console.log(props)
  return (
    // <Container maxWidth='sm'>
   

    <div  className="App">
   
      <NavBar />

      <Route exact path='/'>
        <HomePage />
        </Route>

        <Route path='/register'>
          <FormikRegister {...props} />
        </Route>

      <Route path='/organizationLogin'>
      <FormikOrgLogin {...props}/>
      </Route>

      <Route path='/donorLogin'>
      <FormikDonorLogin {...props}/>
      </Route>

      <Route path='/campaignSummary'>
        <CampaignSummary/>
      </Route>

      <Route path='/addCampaign'>
  <FormikAddCamp {...props}/>
      </Route>

      <Route path = '/organizationPage'>
        <OrganizationHome {...props}/>
      </Route>
      </div>
    
    // </Container>
  );
}

export default withRouter(App);
