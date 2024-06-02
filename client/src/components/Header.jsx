import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, Button, useMediaQuery, Box, Avatar } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import log from '../assets/icon/Nicon.jpg';
import { useTheme } from '@mui/material/styles';

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
        <Link to="/portfolio">
            <Avatar src={log} alt="Logo" sx={{ width: 60, height: 60, marginRight: 'auto', backgroundColor: 'transparent', border: '2px solid #fff' }} />
          </Link>
          <Typography variant="h6" style={{ flexGrow: 1 }}></Typography>
          {isMobile ? (
            <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleNavbar}>
              <FontAwesomeIcon icon={faBars} />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex',justifyContent: 'center', flexGrow: 4}}>
              <Button color="inherit" component={Link} to="/about">About</Button>
              <Button color="inherit" component={Link} to="/experience">Experience</Button>
              <Button color="inherit" component={Link} to="/feature-project">Project</Button>
              <Button color="inherit" component={Link} to="/quotes">Quotes</Button>
              <Button color="inherit" component={Link} to="/contact">Contact</Button>
            </Box>
          )}

          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Button variant="contained" color="primary" component={Link} to="/resume" sx={{ ml: 1 }}>Resume</Button>
              <Button variant="contained" color="secondary" component={Link} to="/hire-me" sx={{ ml: 1 }}>Hire Me</Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      
      <Drawer anchor="right" open={showNavbar} onClose={toggleNavbar}>
        <div style={{ width: '250px' }}>
          <IconButton onClick={toggleNavbar}>
            <FontAwesomeIcon icon={faTimes} />
          </IconButton>
          <List>
            <ListItem button component={Link} to="/about" onClick={toggleNavbar}>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button component={Link} to="/experience" onClick={toggleNavbar}>
              <ListItemText primary="Experience" />
            </ListItem>
            <ListItem button component={Link} to="/feature-project" onClick={toggleNavbar}>
              <ListItemText primary="Project" />
            </ListItem>
            <ListItem button component={Link} to="/quotes" onClick={toggleNavbar}>
              <ListItemText primary="Quotes" />
            </ListItem>
            <ListItem button component={Link} to="/contact" onClick={toggleNavbar}>
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
          <div style={{ display: 'flex', justifyContent: 'space-around', padding: '10px' }}>
            <Button variant="contained" color="primary" component={Link} to="/resume" onClick={toggleNavbar}>Resume</Button>
            <Button variant="contained" color="secondary" component={Link} to="/hire-me" onClick={toggleNavbar}>Hire Me</Button>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Header;
