import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button } from '@mui/material';

const Bread = () => {
  

  return (
    <div className="bread">
      <div className="main-content">
        <Typography variant="h1">Hi, I'm Newton</Typography>
        <Typography variant="h4">I design and build things</Typography>
        <br/><br/><br/><br/><br/><br/><br/>
        <Link to="/about" onClick={toggleAbout}>
          <Button variant="contained" color="primary">Learn More</Button>
        </Link>
      </div>
    </div>
  );
};

export default Bread;
