// src/components/Projects
import Project from "./component-cards/ProjectCard";
import projectData from "../data/projectData.js";



function Projects () {
    const projects = projectData.map(x=>{
        return <Project 
            key= {x.id}
            projectTitle= {x.title}
            projDescriptio= {x.description}
            projImage= {x.image}
            githubURL={x.githubUrl}
            projectURL={x.projectUrl}
            year={x.date.year}
            month={x.date.month}  
        />
    })
 

    return(
        <section className="project-section">
            <h2>Projects</h2>
            <div>{projects}</div>
            
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