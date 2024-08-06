import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';
import { Button, Typography } from '@mui/material';

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className='Navbar'>
      <div className='nav-content'>
        <div className='nav-left'>
          <Link to="/" className='nav-title'>
            <Typography variant="h6" component="div" className='nav-title-text'>Zoo Tech</Typography>
          </Link>
        </div>
        <div className='nav-right'>
          <Button onClick={() => handleNavigation('/')} className='nav-button'>
            Home
          </Button>
          <Button onClick={() => handleNavigation('/about')} className='nav-button'>
            About
          </Button>
          <Button onClick={() => handleNavigation('/contact')} className='nav-button'>
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
