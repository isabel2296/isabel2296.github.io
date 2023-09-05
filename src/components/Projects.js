// src/components/Projects
import projectData from "../data/projectData.js";
import blackGithubIcon from "../images/black-github-icon-30.png";
import '../styles/carousel.css';
import {useState, useEffect} from 'react'; 
import {LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
import ProjectCard from "./component-cards/ProjectCard.js";
import "../styles/projectCard.css";
function Projects () {
    //get the data from the project list data dictonary
    const projects_list = projectData.map(x=>{
        return x ; 
    })
    //sort the data based on the year it was created
    const sortedProjectListByYear = projects_list.slice().sort((a,b) =>{
        return   b.date.year - a.date.year;
    });

    const  cards = sortedProjectListByYear.map(x=>{
        return <ProjectCard
                key={x.id}
                id={x.id}
                category={x.category}
                title={x.title}
                description={x.description}
                languages={x.languages}
                image={x.image}
                githubUrl={x.githubUrl}
                projectUrl={x.projectUrl}
                year={x.date.year}
        />
    })

    return(
       <section>
            <h2 className="page-title">Projects</h2> 
            <section className="project-card-container">{cards}</section> 
            <br></br> <br/>
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