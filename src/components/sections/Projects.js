import React from "react";
import "../styles/Projects.css";

export default function Projects() {

    const projects = [
        {
            image: './images/boba.png',
            title: 'Sheltr',
            description: 'Full Stack MERN application',
            tech: 'blah blah blah',
            deploy: 'link',
            github: 'link',
        },
        {
            image: './images/boba.png',
            title: 'Sheltr',
            description: 'Full Stack MERN application',
            tech: 'blah blah blah',
            deploy: 'link',
            github: 'link',
        },
        {
            image: './images/boba.png',
            title: 'Sheltr',
            description: 'Full Stack MERN application',
            tech: 'blah blah blah',
            deploy: 'link',
            github: 'link',
        },
    ]

    return(
        <div className="Projects">
            <h1>My projects</h1>
            <ul className="card-wrapper">
                {projects.map((project) => {
                    return (
                    <li className="card">
                    <a href={project.deploy} target="_blank" rel="noreferrer">
                        <img className="projectIng" src={project.image} alt={project.title} />
                    </a>
                    <div className="card-body">
                        <h3>{project.title}</h3>
                        <p>{project.tech}</p>
                        <a href={project.github} target="_blank" rel="noreferrer">
                            <p className="github-button">Github Repo</p>
                        </a>  
                    </div>
                    </li>
                    )
                })}
            </ul>
        </div>
    );
    
}