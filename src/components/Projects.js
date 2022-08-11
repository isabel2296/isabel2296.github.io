// src/components/Projects
import Project from "./component-cards/ProjectCard";
import projectData from "../data/projectData.js";

import '../styles/carousel.css';
import {useState, useEffect} from 'react'; 
function Projects () {
    const projects = projectData.map(x=>{
        return <Project 
            key= {x.id}
            projectTitle= {x.title}
            projDescription= {x.description}
            projImage= {x.image}
            githubURL={x.githubUrl}
            projectURL={x.projectUrl}
            year={x.date.year}
            month={x.date.month}  
        />
    })
    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(projects.length)

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
    // Set the length to match current children from props
    useEffect(() => {
        setLength(projects.length)
    }, [projects])

    return(
        <section className="project-section">
            <h2>Projects</h2>
            <div className="carousel-container">
                <div className="carousel-wrapper">
                    <button onClick={prev} className="left-arrow">
                        &lt;
                    </button>
                    <div className="carousel-content-wrapper">
                        <div className="carousel-content"style={{transform: `tranlateX(-${currentIndex * 100}%)`}}>
                            {projects[currentIndex]}
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