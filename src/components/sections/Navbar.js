import React from "react";
import "../styles/Navbar.css";

export default function Navbar(props) {
    
    return(
        <div className="Navbar">
            <h1>
                Sue Lee
            </h1>
            <nav>
                <ul className="navbarList">
                    <li>
                        <a className={props.currentPage === 'About' ? 'nav-link active' : 'nav-link'} href="#about" onClick={() => props.pageRender('About')}>About Me</a>
                    </li>
                    <li>
                        <a className={props.currentPage === 'Projects' ? 'nav-link active' : 'nav-link'} href="#projects" onClick={() => props.pageRender('Projects')}>Projects</a>
                    </li>
                    <li>
                        <a className={props.currentPage === 'Resume' ? 'nav-link active' : 'nav-link'} href="#resume" onClick={() => props.pageRender('Resume')}>Resume</a>
                    </li>
                    <li>
                        <a className={props.currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} href="#contact" onClick={() => props.pageRender('Contact')}>Contact Me</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
