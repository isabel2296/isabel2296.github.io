// src/components/Project
// key= {x.id}
// projectTitle= {x.title}
// projDescriptio= {x.description}
// projImage= {x.image}
// githubURL={x.githubUrl}
// projectURL={x.projectUrl}
// year={x.date.year}
// month={x.date.month}  
// function Project(props){
//     return(
//         <div className="project-card">
//             <div className="project-info">
//                 <span>{props.projectTitle}</span>    
//             </div>            
//         </div>
//     );
// }

// export default Project; 


import '../../styles/carousel.css';
import {useState, useEffect} from 'react'; 
function Project (props) {
    const {children} = props 
    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(children.length)

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
        setLength(children.length)
    }, [children])

    return(
        <section className="project-section">
            <h2>Projects</h2>
            <div className="carousel-container">
                <div className="carousel-wrapper">
                    <button onClick={prev} className="left-arrow">
                        &lt;
                    </button>
                    <div className="carousel-content-wrapper">
                        <div className="carousel-content"
                             style={{transform: `tranlateX(-${currentIndex * 100}%)`}}>
                            {props.projectTitle}
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

export default Project; 
