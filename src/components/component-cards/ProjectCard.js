// src/components/Project
// key= {x.id}
// projectTitle= {x.title}
// projDescriptio= {x.description}
// projImage= {x.image}
// githubURL={x.githubUrl}
// projectURL={x.projectUrl}
// year={x.date.year}
// month={x.date.month}  
function Project(props){
    return(
        <div className="project-card">
            <div className="project-info">
                <span>{props.projectTitle}</span>    
            </div>            
        </div>
    );
}

export default Project; 
