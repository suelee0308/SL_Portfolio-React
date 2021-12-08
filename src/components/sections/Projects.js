import React from "react";
import "../styles/Projects.css";

export default function Projects() {

    const projects = [
        {
            image: './images/sheltr.png',
            title: 'Sheltr',
            description: 'Full Stack MERN application',
            tech: 'React | Node.js | Express.js | Mongoose | CSS',
            deploy: 'link',
            github: 'https://github.com/echo1826/sheltr',
        },
        {
            image: './images/feedyourlifestyle.png',
            title: 'Feed Your Lifestyle',
            description: 'Full Stack application',
            tech: 'Node.js | Express.js | SQL | Sequelize | Handlebars.js | HTML | CSS',
            deploy: 'https://feed-your-lifestyle.herokuapp.com/',
            github: 'https://github.com/Delmanat3/Feed-Your-Lifesyle',
        },
        {
            image: './images/fanjam.png',
            title: 'Fan Jam',
            description: 'Dynamic front-end application',
            tech: 'Javascript | Materialize.css | HTML | CSS',
            deploy: 'https://bradmw.github.io/FanJam-Project-1/',
            github: 'https://github.com/BradMW/FanJam-Project-1',
        },
        {
            image: './images/theoffice.png',
            title: 'The Office Quiz',
            description: 'Dynamic front-end application',
            tech: 'Javascript | HTML | CSS',
            deploy: 'https://suelee0308.github.io/code-quiz/',
            github: 'https://github.com/suelee0308/code-quiz',
        },
        {
            image: './images/fitness.png',
            title: 'Fitness Tracker',
            description: 'Full Stack node application',
            tech: 'MongoDB | Mongoose | Express.js | Node.js | Bootstrap',
            deploy: 'https://workout-sl.herokuapp.com/',
            github: 'https://github.com/suelee0308/NoSQL-workout-tracker',
        },
        {
            image: './images/employee.png',
            title: 'Employee Tracker',
            description: 'Command-line application for employee database',
            tech: 'MySQL2 | Node.js | Express.js',
            deploy: 'https://youtu.be/At2G9kqsIgA',
            github: 'https://github.com/suelee0308/SQL-Employee-Tracker',
        },
    ]

    return(
        <div className="Projects">
            <h1>My projects</h1>
            <ul className="projectUL">
                {projects.map((project) => {
                    return (
                    <div className="projectCards">
                    <li className="card">
                    <a href={project.deploy} target="_blank" rel="noreferrer" className="projectLink">
                        <img className="projectImg" src={project.image} alt={project.title} />
                    </a>
                    <div className="card-body">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <p>{project.tech}</p>
                        <a href={project.github} target="_blank" rel="noreferrer">
                            <p className="github-button">Github Repo</p>
                        </a>  
                    </div>
                    </li>
                    </div>
                    )
                })}
            </ul>
        </div>
    );
    
}