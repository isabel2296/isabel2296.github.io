import React, { useState } from 'react';
import { Divider, Input, QRCode, Space } from 'antd';
import '../../styles/projectCard.css';
import { GithubOutlined} from '@ant-design/icons';
import linkIconLight from '../../images/icons8-link-48-light.png';
import linkIconDark from '../../images/icons8-link-48-dark.png'
// key={x.id}
// id={x.id}
// category={x.category}
// title={x.title}
// description={x.description}
// languages={x.languages}
// image={x.image}
// githubUrl={x.githubUrl}
// projectUrl={x.projectUrl}
// year={x.date.year}

function ProjectCard(props){
    // state variables
    const languageIcons = props.languages.map(x=>{
        return <img className="carousel-content-lang-icons" src={`../images/${x}`} />
    })
    const currentTheme= localStorage.getItem('theme');
    return(
        <section className='project-card-wrapper'>
            <div className='project-card-header'>
                <div className='project-card-header-title-w-link'>
                    <h4 className='project-title'>{props.title}  </h4>
                    <div>{props.projectUrl? (<a  href={props.projectUrl} target="_blank" rel="noopener noreferrer">
                    <img className="project-link-icon" src={currentTheme=="theme-light"?linkIconLight : linkIconDark} alt="Link Icon" /> </a>):(<span/> )}</div>
                </div>
                <p>({props.year})  </p>

            </div>
            <div className='project-card-body'>
            <a className="project-card-languages">{languageIcons}</a>

                <p>{props.description}</p>
            </div>
            <div className='project-card-links'>
            {/* <Divider style={{ borderColor: 'var(--light-text)' }}></Divider> */}

            <a href={props.githubUrl} target="_blank" rel="noopener noreferrer">
                    <GithubOutlined
                    style={{fontSize: '30px', color: "var(--dark-text)"}}
                    />
                </a>

            </div>

        </section>
    );
}

export default ProjectCard;