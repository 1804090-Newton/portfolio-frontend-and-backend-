import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Box } from '@mui/material';

const Bread = () => {

  const toggleAbout = () => {
    // Add your logic here if needed
  };

  return (
    <div className="bread" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className="main-content" style={{ textAlign: 'center' }}>
        <Typography variant="h1">Hi, I'm Newton</Typography>
        <Typography variant="h4">I design and build things</Typography>
        <br/><br/><br/><br/><br/><br/><br/>
        <Link to="/about" onClick={toggleAbout} style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary">Learn More</Button>
        </Link>
      </div>
    </div>
  );
};

export default Bread;
