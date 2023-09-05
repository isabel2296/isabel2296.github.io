import React, { useState } from 'react';
import { Divider, Input, QRCode, Space } from 'antd';
import '../../styles/projectCard.css';
import { GithubOutlined} from '@ant-design/icons'
import { PassThrough } from 'nodemailer/lib/xoauth2';


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

    return(
        <section className='project-card-wrapper'>
            <div className='project-card-header'>
                <h3 className='project-title'>{props.title} ({props.year})</h3>

                {/* {props.projectUrl? (<p>yes</p>):({})} */}

            </div>
            <div className='project-card-body'>
                <p>{props.description}</p>
            </div>
            <div className='project-card-links'>
            <Divider style={{ borderColor: 'var(--light-text)' }}></Divider>

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