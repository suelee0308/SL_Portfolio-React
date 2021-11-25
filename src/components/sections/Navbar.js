import React from "react";
import "../styles/Navbar.css";

export default function Navbar(props) {
    
    return(
        <div className="Navbar">
            <h1 className="navH1">
                Sue Lee
            </h1>
            <nav className="navCont">
                <ul className="navbarList">
                    <li className='aboutTab'>
                        <a className='About' href="#about" onClick={() => props.handlePageChange('About')}>About Me</a>
                    </li>
                    <li className='projectsTab'>
                        <a className='Projects' href="#projects" onClick={() => props.handlePageChange('Projects')}>Projects</a>
                    </li>
                    <li className='resumeTab'>
                        <a className='Resume' href="#resume" onClick={() => props.handlePageChange('Resume')}>Resume</a>
                    </li>
                    <li className='contactTab'>
                        <a className='Contact' href="#contact" onClick={() => props.handlePageChange('Contact')}>Contact Me</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
