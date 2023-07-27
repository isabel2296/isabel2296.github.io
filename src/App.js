import logo from './logo.svg';
import './App.css';
import React, { Component }  from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { keepTheme } from './utils/themes';
import { useState, useEffect } from 'react';
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Footer from './components/Footer';
import SlideMenu from './components/SideMenu';
import Header from './components/Header';
import SideMenu from './components/SideMenu';

function App() {
  let theme=localStorage.getItem('theme');
  const handleMouseDown = (event) => {
    theme=localStorage.getItem('theme');

  }
  useEffect(() => {
    keepTheme();
    window.addEventListener('mousedown',handleMouseDown);

    return () => {

      window.removeEventListener('keydown', handleMouseDown);

    };
    },[])
  return (
    <div className="App">
       {/* <Navbar theme={theme}/> */}
       {/* <About /> */}
       {/* <Projects /> */}
       {/* <Skills /> */}
       {/* <Experience /> */}
       {/* <Contact /> */}
       {/* <Footer /> */}
       <BrowserRouter>
        <Routes>
          <Route exact path = "/" element ={<SideMenu/>} />
          {/* <Route exact path = "/login" element={<UserLogin/>}/>
          <Route exact path = "/registration" element={<UserRegistration/>}/>
          <Route exact path = "/user/profile" element={<UserProfile/>}/>
          <Route exact path = "/tagcards" element={<TagCardsHome/>} />
          <Route exact path = "/e-card" element={<BusinessCardTemplate/>} /> */}
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
