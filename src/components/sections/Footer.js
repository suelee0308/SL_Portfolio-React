import React, {useState} from "react";
import github from '../styles/images/githubblank.png'
import linkedin from '../styles/images/linkedinblank.png'
import stack from '../styles/images/stackblank.png'
import githubhover from '../styles/images/githubhover.png'
import linkedinhover from '../styles/images/linkedinhover.png'
import stackhover from '../styles/images/stackhover.png'
import email from '../styles/images/emailblank.png'
import emailhover from '../styles/images/emailhover.png'
import '../styles/Footer.css';

export default function Footer({loading}) {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

    // const primaryNav = document.querySelector(".footerList");
    // const socialHamburger = document.querySelector(".socialHamburger")

    // socialHamburger.addEventListener("click", () => {
    //     const visibility = primaryNav.getAttribute('data-visible');

    //     if (visibility === false) {
    //         primaryNav.setAttribute("data-visible", true);
    //     }else (visibility === true) {
    //         primaryNav.setAttribute("data-visible", false
    //         )
    //     }
    // })

    return(
        <div className="Footer">
            { loading ? 

            <div></div>
                :
            (
            <div>
            
                <style>
                    {`
                        .footerList {
                            display: ${hamburgerOpen ? 'inline' : 'none'};
                        }
                        .socialHamburger {
                            display: ${hamburgerOpen ? 'none' : 'inline'};
                        }
                        .socialClose {
                            display: ${hamburgerOpen ? 'inline' : 'none'}
                        }

                    `}
                </style>
                <button className="socialClose" onClick={toggleHamburger}></button>
                <button className="socialHamburger" onClick={toggleHamburger}></button>
                

                <nav>
                    <ul className="footerList">
                        <li>
                            <a className="footerLink github" href="https://github.com/suelee0308" target='_blank' rel='noreferrer'>
                                <span>
                                    <img className='socialLogo' src={github} alt='github logo'/>
                                    <img className='socialLogo' src={githubhover} alt='github logo'/>
                                </span>
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
                        <li>
                            <a className="footerLink email" href="mailto:sue.lee0308@gmail.com" target='_blank' rel='noreferrer'>
                                <img className='socialLogo' src={email} alt='email logo'/>
                                <img className='socialLogo' src={emailhover} alt='email logo'/>
                            </a>
                        </li>
                    </ul>
                    </nav>

                </div>
                )
            }
        </div>
    )
}