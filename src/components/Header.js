// src/components/Navbar
import iconImageBlack from "../images/blacklogo.png"
import iconImageWhite from "../images/whitelogo.png"
import React, { useEffect, useState } from 'react';
import '../styles/toggle.css';
import { setTheme } from '../utils/themes';
import lightIcon from '../images/light-mode.png';
import darkIcon from '../images/dark-mode.png';
import "../styles/sideMenuHeader.css"
import { Switch } from "antd";
import SideMenu from "./SideMenu";
import {
    AppstoreOutlined,
    ContainerOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
  } from '@ant-design/icons';

function Header() {
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
    <div className="header-nav-container"> 
        {/* Logo */}

        
                       {/* {
        togClass ==="light"?
        <><img className="header-logo" src={iconImageBlack} /> <h2>Isabel Silva</h2> </>
        :
        <><img className="header-logo" src={iconImageWhite} /> <h2>Isabel Silva</h2> </>
        } */}
        {/* <h2 className="header-title">Isabel Silva</h2> */}

        {/* Toggle Light-Dark Theme */}

        
        <div className="header-space"></div>
        <div className="navbar-toggle-switch">
        
        <Switch  className="header-toggle-switch-b" size="small" checkedChildren="dark"
        unCheckedChildren="light"
        defaultChecked onChange={handleOnClick}/>

        </div >

    </div>  
    )
}

export default Header; 
