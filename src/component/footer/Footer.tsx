import React from 'react';
import './Footer.css';
import Instagram from '../../assets/social-media/instagram.png';
import LinkedIn from '../../assets/social-media/linkedin.png';
import Github from '../../assets/social-media/Octocat.png'
import {Fade} from "@mui/material";

function Footer() {

    return (
        <Fade in timeout={{enter: 1200}}>
            <footer className='footer-style'>
                <a target="_blank"
                   rel="noreferrer noopener"
                   href="https://www.instagram.com/photos_of_ghazi/">
                    <img className="logo-footer" src={Instagram} alt="instagram"/>
                </a>

                <a target="_blank"
                   rel="noreferrer noopener"
                   href="https://www.linkedin.com/in/ghazi-bouzazi/">
                    <img className="logo-footer" src={LinkedIn} alt="linkedIn"/>
                </a>

                <a target="_blank"
                   rel="noreferrer noopener"
                   href="https://github.com/ghazi135">
                    <img className="logo-footer" src={Github} alt="github"/>
                </a>
                <span>
                    &#169; ghazi bouzazi 2022 • all rights reserved
                </span>
            </footer>

        </Fade>

        );


}


export default Footer;