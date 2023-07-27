// src/components/About
import React from "react"
import resume_url from "../documentations/Isabel-Silva-Resume.pdf"
import { Button, Divider, Image} from 'antd';
import portrait from '../images/portrait.png'

import "../styles/about.css";
import Skills from "./Skills";

function About() {

    return(
        <div id="about"className="about-section" >
              <Image
                src={portrait}
                alt="Profile image for portfolio"
                className="about-styled-image"
                style={{width:'200px', height: '200px'}}
                />
            <div className="about-intro-wrapper">
                <h1 className="about-intro">Hello! I'm  </h1>
                 <h1 className="about-intro-name">Isabel Silva</h1>
            </div>                       
            
            <Button className="about-download-resume" href={resume_url} download="Silva-Isabel-Resume"> Download Resume </Button>

            <p className="about-summary">
            I am skilled Software Engineer with a Master of Science in Software Engineering from California State University, Fullerton. During my academic journey, I achieved academic honors with a remarkable 3.97 GPA, reflecting my dedication and passion for the field.
            <br/><br/> My technical expertise encompasses a wide range of programming languages, including Python, C/C++, SQL, JavaScript, and Java. Additionally, I am proficient in using various developer tools such as Git, VS Code, X Code, and more.
                <br/><br/>
                I have a strong passion for full stack web developing. 
                <br/><br/> 
                
            </p>                
            <Divider />
            <Skills/>

        </div>
    );
}
    
export default About;