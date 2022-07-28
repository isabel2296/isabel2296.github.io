// src/components/Navbar
import iconImageBlack from "../logo-images/blacklogo.png"
import iconImageWhite from "../logo-images/whitelogo.png"
import React, { useEffect, useState } from 'react';
import '../styles/toggle.css';
import { setTheme } from '../utils/themes';
import lightIcon from '../logo-images/light-mode.png';
import darkIcon from '../logo-images/dark-mode.png';

function Navbar(props) {
    const [togClass, setTogClass] = useState('dark');
    let theme = localStorage.getItem('theme');

    const handleOnClick = () => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTheme('theme-light');
            setTogClass('light')
        } else {
            setTheme('theme-dark');
            setTogClass('dark')
        }
    }

    useEffect(() => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTogClass('dark')
        } else if (localStorage.getItem('theme') === 'theme-light') {
            setTogClass('light')
        }
    }, [theme])

    return( 
    <header className="header-nav"> 
        <a href="#about" >
             {
            togClass ==="light"?
            <img className="icon-image" src={iconImageBlack} /> 
            :
            <img className="icon-image" src={iconImageWhite} /> 
            }
            {/* <img className="icon-image" src={togClass=="light"? {iconImageBlack}: {iconImageWhite}} */}
        </a>      
        <nav className="nav-bar">
            <a href="#projects" className="nav-href" >
                Projects
            </a>
            <a  href="#skills" className="nav-href">
                Skills
            </a>
            <a href="#experience" className="nav-href">
                Experience
            </a>
            <a href="#contact" className="nav-href" >
            Contact Me
            </a>  
        </nav>
        {
             togClass ==="light"?
             <input type="image" src={darkIcon} className="toggle-icon" onClick={handleOnClick}/> 
             :
             <input type="image" src={lightIcon} className="toggle-icon" onClick={handleOnClick}/>
            }
    </header>        
    )
}

export default Navbar; 