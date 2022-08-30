import React, { Component }  from 'react';

function SkillCard(props){
    return(
        <div className="skill-card">
            <img src={`../images/${props.icon}`} className="skill-card-icon" alt="location"/>
            <div className="skill-card-info">
                <span className="skill-title">{props.title} 
                  <span className="skill-years">({props.years} years)</span>
                </span>
            </div>
        </div>
    );
}

export default SkillCard;