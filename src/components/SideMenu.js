import { MailOutlined, SettingOutlined, MenuUnfoldOutlined,
    PieChartOutlined, ContainerOutlined, MenuFoldOutlined,
     DesktopOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Menu, Switch, Button } from 'antd';
import React ,{ useEffect, useState } from 'react';
import Header from './Header';
import Contact from './Contact.js';
import projectData from "../data/projectData.js";
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import '../styles/sideMenuHeader.css'
import Footer from './Footer.js';

const getItem = (label, key, icon, children, type) => {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

const SideMenu = () => {
  let [theme, setThemeMenu] = useState(localStorage.getItem('theme'));
  const [current, setCurrent] = useState('1');
  const [collapsed, setCollapsed] = useState(true);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

    const items = [
    // getItem('', 'toggle', <Button type="primary"  onClick={toggleCollapsed}  icon>{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}</Button>),
    getItem('', 'toggle', <div className="" type="primary"  onClick={toggleCollapsed}  icon>{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}</div>),

    getItem('About', '1', <ContainerOutlined />, null , 'page'),
    // getItem('Experience', '2', <DesktopOutlined />, null, 'page'),
    getItem('Projects', '3', <AppstoreOutlined />, null , 'page'),    
    getItem('Contact Me', '4', <MailOutlined />, null, 'page'),
    ];

  useEffect(() => {
    const handleStorageChange = (event) => {
        if (localStorage.getItem("theme") === 'theme-dark') {
            setThemeMenu('dark');
        } else {
            setThemeMenu('light');
        }

      };
  
      window.addEventListener('storage', handleStorageChange);
  
      return () => {
        window.removeEventListener('storage', handleStorageChange);
      };
    }, []);

  // Handle Functions
  const handleMenuClick = ({key} ) => {
    console.log(key)
    if(key != 'toggle'){
      setCurrent(key);
    }

  }

  return (
    <div className='portfolio-sideMenu-Header-wrapper'>
      
        <div className = "sideMenu-container ">
          
       <Menu
        theme={theme}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        inlineCollapsed={collapsed}
        items={items}
        style={{
            flex: '1',
        }}
        selectedKeys={[current]}
        onClick={handleMenuClick}
         >
          {
            items.map((item)=>(
              <Menu.Item key = {item.key} icon ={item.icon} type={item.type}>
                {item.label}
              </Menu.Item>
            ))
          }
        </Menu>
       
      </div> 
        <div className='content-container-wrapper'>
            <Header/>
            <div className='content-container'>
              {current === '1' && <About />}
              {current === '2' && <Experience />}
              {current === '4' && <Contact />}
              {current === '3' && <Projects/>}
              {/* Render other page components based on their respective keys */}
              {/* Example: {activePage === '2' && <SkillsPage />} */}
            </div>
        </div>
          <Footer iconStyle={collapsed} />
    </div>
  );
};
export default SideMenu;