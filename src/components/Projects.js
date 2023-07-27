// src/components/Projects
import projectData from "../data/projectData.js";
import blackGithubIcon from "../images/black-github-icon-30.png";
import '../styles/carousel.css';
import {useState, useEffect} from 'react'; 
import {LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';

function Projects () {
    const projects_list = projectData.map(x=>{
        return x ; 
    })
    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(projects_list.length)
    const [isFilled, setIsFilled] = useState(false)
    const next = () => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 1)
        }else if (currentIndex == length-1) {
            setCurrentIndex(prevState => 0)
        } 
    }
    
    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }else if(currentIndex == 0){
            setCurrentIndex(prevState => length-1)
        }
    }
    const circles = Array.from(Array(length).keys());
        
    const displayCircles = circles.map(x=>{
        return <div className="circle"></div>
    })
    const languageIcons = projects_list[currentIndex].languages.map(x=>{
        return <img className="carousel-content-lang-icons" src={`../images/${x}`} />
    })
    
    // Set the length to match current children from props
    useEffect(() => {
        setLength(projects_list.length)
    }, [projects_list])

    return(
        <section id="Projects"className="project-wrapper">
            <h2 className="page-title">Projects</h2> 
            <div className="project-section">
            <div className="project-movement">
            
                <button onClick={prev} className="project-arrow">
                              <LeftCircleOutlined 
             style={{fontSize: '27px', color: "var(--dark-text)"}}

                              />

                        </button>
                <div className="card-number-position">
                        {/* {displayCircles}        */
                            
                    }{currentIndex+1}/{length}
                </div>
                <button onClick={next}className="project-arrow">
                        <RightCircleOutlined 
                            style={{fontSize: '27px', color: "var(--dark-text)"}}

                        />
                        </button>
           </div>
            <div className="carousel-container">
                <div className="carousel-wrapper">
                    
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
                   
                    
                    
                </div> 
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