import '../styles/footer.css';
import blackGithubIcon from "../images/black-github-icon-30.png";
import linkedin from "../images/icons8-linkedin-48.png";
import React, { Component }  from 'react';
import {LinkedinOutlined, GithubOutlined, MailOutlined} from '@ant-design/icons'




function Footer(props){

    const linkedinUrl="https://www.linkedin.com/in/silva-2-isabel/";
    const gitHubUrl="https://github.com/isabel2296";
    return(
        <footer className="footer-section-info">
            
            <section className={props.iconStyle? 'footer-section-info-icons-collapsed': 'footer-section-info-icons-NOT-collapsed'}>

                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                    <LinkedinOutlined
                    style={{fontSize: '25px', color: "var(--dark-text)"}}
                    /> 
                </a>
                <a href={gitHubUrl} target="_blank" rel="noopener noreferrer">
                    <GithubOutlined
                    style={{fontSize: '25px', color: "var(--dark-text)"}}
                    />
                </a>
        
                <a href="mailto: isabelsilva2296@gmail.com? subject= Feedback&body = Message">
                <MailOutlined 
                    style={{fontSize: '25px', color: "var(--dark-text)"}}
                    />        
                </a> 

            </section>
       
        </footer>
    );
}

export default Footer;

