import SkillCard from "./component-cards/SkillCard"
import skilldata from "../data/skillsData.js"
import React from 'react';

export default function Skills() {
    const skills = skilldata.map(x=>{
        return <SkillCard
            key={x.id}
            title={x.title}
            icon={x.icon}  
            years={x.years}
        />
    })
    return(
        <div id = "Skills" className="skill-wrapper">
            <h2 className="skill-title-h2">Skills & Technologies</h2>
            <section className="skill-list">{skills}</section>
        </div>
    );

}