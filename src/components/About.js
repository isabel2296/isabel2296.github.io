// src/components/About
import React from "react"
import resume_url from "../documentations/Isabel-Silva-Resume.pdf"
import blackGithubIcon from "../logo-images/black-github-icon-30.png";

import aboutImage from "../logo-images/emile-perron-unsplash.png"

function About() {
    return(
        <section className="about-section" >
            <h1>HELLO, MY NAME IS ISABEL SILVA</h1>
            <p>description</p>
            <div className="about-actions">
                <a className="about-resume-download" href={resume_url} download="Silva-Isabel-Resume">Download Resume</a>
            <a  href="https://github.com/isabel2296">
                                        <img  className="about-project-card-github" src={blackGithubIcon} />
                                    </a></div>
        </section>
    );
}
    
export default About;