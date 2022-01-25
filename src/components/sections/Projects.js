import React from "react";
import "../styles/Projects.css";

export default function Projects() {

    const projects = [
        {
            image: '/images/sheltr.png',
            title: 'Sheltr',
            description: 'MERN stack application that connects users to local animal shelters and saves animals of their liking to make the adoption process easier through a Tinder-like filtering process.',
            tech: 'React | Node.js | Express.js | Mongoose | CSS',
            deploy: 'https://sheltr-app.herokuapp.com/',
            github: 'https://github.com/echo1826/sheltr',
        },
        {
            image: '/images/feedyourlifestyle.png',
            title: 'Feed Your Lifestyle',
            description: 'Full stack node application that allows users to search recipes based on dietary lifestyles they want to live.',
            tech: 'Node.js | Express.js | SQL | Sequelize | Handlebars.js | HTML | CSS',
            deploy: 'https://feed-your-lifestyle.herokuapp.com/',
            github: 'https://github.com/Delmanat3/Feed-Your-Lifesyle',
        },
        {
            image: '/images/fanjam.png',
            title: 'Fan Jam',
            description: 'Dynamic front-end application with third-party API calls that allows users to search an artist’s song lyrics and is provided with upcoming live events and artist’s platforms.',
            tech: 'Javascript | Materialize.css | HTML | CSS',
            deploy: 'https://bradmw.github.io/FanJam-Project-1/',
            github: 'https://github.com/BradMW/FanJam-Project-1',
        },
        {
            image: '/images/theoffice.png',
            title: 'The Office Quiz',
            description: 'Dynamic front-end trivia quiz/game application. Timed, multiple choice trivia based off the show "The Office".',
            tech: 'Javascript | HTML | CSS',
            deploy: 'https://suelee0308.github.io/code-quiz/',
            github: 'https://github.com/suelee0308/code-quiz',
        },
        {
            image: '/images/fitness.png',
            title: 'Fitness Tracker',
            description: 'Full Stack node application with a Mongo database using Mongoose schema. Users can view, create and track daily workouts and graph their progress.',
            tech: 'MongoDB | Mongoose | Express.js | Node.js | Bootstrap',
            deploy: 'https://workout-sl.herokuapp.com/',
            github: 'https://github.com/suelee0308/NoSQL-workout-tracker',
        },
        {
            image: '/images/employee.png',
            title: 'Employee Tracker',
            description: 'Command-line application for employee database. Users can view or add departments, roles or employees, as well as update roles of an employee.',
            tech: 'MySQL2 | Node.js | Express.js',
            deploy: 'https://youtu.be/At2G9kqsIgA',
            github: 'https://github.com/suelee0308/SQL-Employee-Tracker',
        },
    ]

    return(
        <div className="Projects" id="projects">
            <h1>My projects</h1>
            <ul className="projectUL">
                {projects.map((project) => {
                    return (
                    <div className="projectCards">
                    <li className="card">
                    <a href={project.deploy} target="_blank" rel="noreferrer" className="projectATag">
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