import React from 'react';
import { Container } from '@material-ui/core';
import './App.css';
import { Route } from 'react-router-dom'
// import HomePage from './components/homePage';
import NavBar from './components/navBar';
import FormikRegister from './components/registerPage';
import FormikOrgLogin from './components/OrgLogin'



function App() {
  return (
    <Container maxWidth="sm">

    <div className="App">
      <NavBar />

      {/* <Route exact path='/'>
        <HomePage />
        </Route> */}

      <Route path='/register'>
      <FormikRegister/>
      </Route>

      <Route path='/organizationLogin'>
      <FormikOrgLogin/>
      </Route>
      
      </div>

    </Container>
  );
}

export default App;
