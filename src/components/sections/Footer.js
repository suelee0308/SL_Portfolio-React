import React from "react";
import github from '../styles/images/githubblank.png'
import linkedin from '../styles/images/linkedinblank.png'
import stack from '../styles/images/stackblank.png'
import '../styles/Footer.css';

export default function Footer() {
    
    return(
        <div className="Footer">
            <nav>
                <ul className="footerList">
                    <li>
                        <a className="github" href="https://github.com/suelee0308" target='_blank' rel='noreferrer'><img className='socialLogo' src={github} alt='github logo'/></a>
                    </li>
                    <li>
                        <a className="linkedin" href="https://www.linkedin.com/in/sue-lee-b1b3aa21b/" target='_blank' rel='noreferrer'><img className='socialLogo' src={linkedin} alt='linkedin logo'/></a>
                    </li>
                    <li>
                        <a className="stack" href="https://stackoverflow.com/users/16763627/sue-lee?tab=profile" target='_blank' rel='noreferrer'><img className='socialLogo' src={stack} alt='stack logo'/></a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}