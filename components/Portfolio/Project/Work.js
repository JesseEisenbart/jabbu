import styles from "./Work.module.scss";
import React from "react";

const Work = ({title, titleLink, date, desc, list=[]}) => {

    let titleH2 = titleLink ? <a href={titleLink} rel="noreferrer" target="blank"><h2 className={styles.workTitle}>{title}&nbsp;</h2></a> : <h2 className={styles.workTitle}>{title}</h2>;
    
    let projects = list.map((project, index) => 
        (
        
        <li key={index} className={styles.project}>
            <div>
               {project.link == "" ? <h3 className={styles.projectTitle}>{project.name}&nbsp;<span className={styles.date}>{project.date != "" ? "(" + project.date + ")" : ""}</span></h3> :  <a href={project.link} rel="noreferrer" target="blank"><h3 className={styles.projectTitle}>{project.name}&nbsp;<span className={styles.date}>{project.date != "" ? "(" + project.date + ")" : ""}</span></h3></a>}               
            </div>
            <p className={styles.projectDesc}>{project.desc}</p>
        </li>)
    );

    return (
        <div className={styles.work}>
            { titleH2 }
            <div>
                <p className={styles.desc}>{desc}</p>
                <ul className={styles.projects}>{projects}</ul>
            </div>
            <div className={styles.lineBreak}/>
        </div>
    )
};

export default Work;
