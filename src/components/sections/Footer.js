import React from "react";
import github from '../styles/images/githubblank.png'
import linkedin from '../styles/images/linkedinblank.png'
import stack from '../styles/images/stackblank.png'
import githubhover from '../styles/images/githubhover.png'
import linkedinhover from '../styles/images/linkedinhover.png'
import stackhover from '../styles/images/stackhover.png'
import '../styles/Footer.css';

export default function Footer({loading}) {
    
    return(
        <div className="Footer">
            { loading ? 

            <div></div>
                :
            (<nav>
                <ul className="footerList">
                    <li>
                        <a className="footerLink github" href="https://github.com/suelee0308" target='_blank' rel='noreferrer'>
                            <img className='socialLogo' src={github} alt='github logo'/>
                            <img className='socialLogo' src={githubhover} alt='github logo'/>
                        </a>
                    </li>
                    <li>
                        <a className="footerLink linkedin" href="https://www.linkedin.com/in/sue-lee-b1b3aa21b/" target='_blank' rel='noreferrer'>
                            <img className='socialLogo' src={linkedin} alt='linkedin logo'/>
                            <img className='socialLogo' src={linkedinhover} alt='linkedin logo'/>
                        </a>
                    </li>
                    <li>
                        <a className="footerLink stack" href="https://stackoverflow.com/users/16763627/sue-lee?tab=profile" target='_blank' rel='noreferrer'>
                            <img className='socialLogo' src={stack} alt='stack logo'/>
                            <img className='socialLogo' src={stackhover} alt='stack logo'/>
                        </a>
                    </li>
                </ul>
                </nav>
                )
            }
        </div>
    )
}