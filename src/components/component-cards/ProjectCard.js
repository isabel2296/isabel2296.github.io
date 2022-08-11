// src/components/Project
// key= {x.id}
// projectTitle= {x.title}
// projDescription= {x.description}
// projImage= {x.image}
// githubURL={x.githubUrl}
// projectURL={x.projectUrl}
// year={x.date.year}
// month={x.date.month}  
function Project(props){
    return(
        
        <section className="carousel-container" >
            <div className="carousel-wrapper">
              <div className="carousel-content-wrapper">
                
                    <h1>{props.projectTitle}
                    
                    </h1> 
                    <p>
                        {props.projDescription}
                    </p>   
            
              </div>
              <img className="project-card-image" src={`../images/${props.projImage}`}/>

            </div> 
        </section>
        
    );     
}        

export default Project; 
