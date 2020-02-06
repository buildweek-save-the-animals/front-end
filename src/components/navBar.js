import React from 'react';
import './navBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    
      <div className="navBar">
          <img className='nav-img' src='https://images.unsplash.com/photo-1516728918023-0fd81a3a149c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'></img>
        
          <Link to="/" className='links'>Home</Link>
        
        
          <Link to="/Register" className='links'>Register</Link>
        
        
          <Link to="/organizationLogin" className='links'>Organization Login</Link>
        
        
          <Link to="/donorLogin" className='links'>Donor Login</Link>
        
        </div>
      
      
   
  );
};

export default NavBar;