// src/components/About
import React from "react"
import resume_url from "../documentations/Isabel-Silva-Resume.pdf"
import blackGithubIcon from "../logo-images/black-github-icon-30.png";
import linkedin from "../logo-images/icons8-linkedin-48.png"

function About() {
    return(
        <section className="about-section" >
            <h1>HELLO, MY NAME IS ISABEL SILVA</h1>
            <p className="about-summary">
                I am a software developer with a B.S in Computer Science & earning a M.S in Software Engineering. I love to keep up with the latest programming languages and best practices. I am always looking for new things to learn. 

                
            </p>
            <div className="about-actions">
                <a className="about-resume-download" href={resume_url} download="Silva-Isabel-Resume">Download Resume</a>
               
           </div>
        </section>
    );
}
    
export default About;