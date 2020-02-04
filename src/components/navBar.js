import React from 'react'

import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    
      <div className="navBar">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/Register">Register</Link>
        </div>
        <div>
          <Link to="/organizationLogin">Organization Login</Link>
        </div>

      
      </div>
   
  );
};

export default NavBar;