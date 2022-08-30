import logo from './logo.svg';
import './App.css';
import { keepTheme } from './utils/themes';
import { useEffect } from 'react';
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Footer from './components/Footer';
import { useState } from 'react';
import React, { Component }  from 'react';

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
       <Navbar theme={theme}/>
       <About />
       <Projects />
       <Skills />
       {/* <Experience /> */}
       <Contact />
       <Footer />
    </div>
  );
}

export default App;
