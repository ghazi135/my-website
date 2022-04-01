import React from 'react';
import './Footer.css';
import {Fade,  Hidden} from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
function Footer() {

    return (
         <div>
             <Hidden mdDown>
                 <Fade in timeout={{enter: 1200}}>
                     <div >

                         <div className= "footer-style">
                             <a className="links"
                                target="_blank"
                                rel="noreferrer noopener"
                                href="https://www.instagram.com/photos_of_ghazi/">
                                 <InstagramIcon sx={{ color: "white"}}/>
                             </a>

                             <a className="links"
                                target="_blank"
                                rel="noreferrer noopener"
                                href="https://www.linkedin.com/in/ghazi-bouzazi/">
                                 <LinkedInIcon sx={{ color: "white"}}/>
                             </a>

                             <a className="links"
                                target="_blank"
                                rel="noreferrer noopener"
                                href="https://github.com/ghazi135">
                                 <GitHubIcon sx={{ color: "white"}}/>
                             </a>

                             <a  className="links"
                                 href='mailto:gbouzazi@gmail.com'
                                 target='_blank'
                                 rel='noopener noreferrer'>
                                 <MailOutlineIcon sx={{ color: "white"}}/>
                             </a>
                         </div>


                         <div className="footer-style-end">
                             &#169; ghazi bouzazi 2022 • all rights reserved
                         </div>

                     </div>

                 </Fade>
             </Hidden>
             <Hidden mdUp>
                 <Fade in timeout={{enter: 1200}}>
                     <div >

                         <div className= "footer-style-mobile">
                             <a className="links"
                                target="_blank"
                                rel="noreferrer noopener"
                                href="https://www.instagram.com/photos_of_ghazi/">
                                 <InstagramIcon sx={{ color: "white"}}/>
                             </a>

                             <a className="links"
                                target="_blank"
                                rel="noreferrer noopener"
                                href="https://www.linkedin.com/in/ghazi-bouzazi/">
                                 <LinkedInIcon sx={{ color: "white"}}/>
                             </a>

                             <a className="links"
                                target="_blank"
                                rel="noreferrer noopener"
                                href="https://github.com/ghazi135">
                                 <GitHubIcon sx={{ color: "white"}}/>
                             </a>

                             <a  className="links"
                                 href='mailto:gbouzazi@gmail.com'
                                 target='_blank'
                                 rel='noopener noreferrer'>
                                 <MailOutlineIcon sx={{ color: "white"}}/>
                             </a>
                         </div>


                         <div className="footer-style-end-mobile">
                             &#169; ghazi bouzazi 2022 • all rights reserved
                         </div>

                     </div>

                 </Fade>
             </Hidden>
         </div>
    );
}


export default Footer;