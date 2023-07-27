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
            I am a skilled Software Engineer with a Master of Science in Software Engineering from California State University, Fullerton. Throughout my academic journey, I had the privilege of achieving academic honors with a remarkable 3.97 GPA, which reflects my unwavering dedication and immense passion for the field.            
            <br/><br/> My technical expertise encompasses a wide range of programming languages, including Python, C/C++, SQL, JavaScript, and Java. Additionally, I am proficient in using various developer tools such as Git, VS Code, X Code, and more. Embracing new challenges and continuously seeking opportunities to grow and learn are qualities that define me both personally and professionally.
                <br/><br/>
                I am a highly motivated individual with a deep passion for full-stack web development, backed by exceptional technical skills and a genuine love for computing. Besides my enthusiasm for technology, I also cherish spending quality time with my family, unwinding with video games, exploring new places through travel, and fostering meaningful connections with others. I am known for being an adaptable learner, a reliable team player, and always eager to embrace new opportunities for growth and learning.
                <br/><br/> 
                
            </p>                
            <Divider />
            <Skills/>

        </div>
    );
}
    
export default About;