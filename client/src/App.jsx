import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Maincontent from './components/Maincontent';
import About from './components/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/experience';
import Project from './components/project/Project';
import Quotes from './components/Quotes/Quotes';
import NotFoundPage from './components/pagenotfound/NotFoundPage';
import { ThemeProvider, createTheme } from '@mui/material/styles'; 

function App() {

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div>
          <Header/>
        
          <Routes>
            <Route path='/Portfolio/' index element={<Maincontent />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/feature-project" element={<Project />} />
            <Route path="/quotes" element={<Quotes />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
