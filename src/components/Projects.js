// src/components/Projects
import projectData from "../data/projectData.js";
import blackGithubIcon from "../logo-images/black-github-icon-30.png";
import '../styles/carousel.css';
import {useState, useEffect} from 'react'; 
import React, { Component }  from 'react';

function Projects () {
    const projects_list = projectData.map(x=>{
        return x ; 
    })
    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(projects_list.length)

    const next = () => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }
    
    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }

    const languageIcons = projects_list[currentIndex].languages.map(x=>{
        return <img className="carousel-content-lang-icons" src={`../images/${x}`} />
    })
    
    // Set the length to match current children from props
    useEffect(() => {
        setLength(projects_list.length)
    }, [projects_list])

    return(
        <section className="project-section">
            <h2>Projects</h2>
            <div className="carousel-container">
                <div className="carousel-wrapper">
                    <button onClick={prev} className="left-arrow">
                        &lt;
                    </button>
                    <div className="carousel-content-wrapper">
                        <div className="carousel-content">
                            <div className="card-discreption">
                                <div>
                                <h1 className="card-title">                                   
                                    {projects_list[currentIndex].title} 
                                    <a  href={projects_list[currentIndex].githubUrl}>
                                        <img  className="project-card-github" src={blackGithubIcon} />
                                    </a>

                                </h1> 
                                <hr/>
                                </div>
                                <a className="carousel-content-lang-icon-collection">{languageIcons}</a>
                                <p>
                                    {projects_list[currentIndex].description}

                                </p>

                              
                             
                            </div>
                            <img className="project-card-image" src={`../images/${projects_list[currentIndex].image}`}/>

                        </div>
                    </div>
                    <button onClick={next}className="right-arrow">
                        &gt;

                    </button>
                </div>
            </div>
        </section>
    );
    
}
export default Projects;

// id:
// category: 
// title: 
// description: 
// languages:
// image: 
// githubUrl:
// projectUrl:
// date:{
//     year: 
//     month: 
// },  