import React from 'react';
import './Footer.css';
import {Fade,  Hidden, SvgIcon} from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

// Custom TikTok Icon Component
const TikTokIcon = (props: any) => (
    <SvgIcon {...props} viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </SvgIcon>
);
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
                                href="https://www.instagram.com/ghazi.bouzazi/">
                                 <InstagramIcon sx={{ color: "white"}}/>
                             </a>
                             <a className="links"
                                target="_blank"
                                // TikTok icon removed due to missing import/component. If you add a valid TikTok Icon import, restore these lines appropriately.
                                href="https://www.linkedin.com/in/ghazi-bouzazi/">
                                 <LinkedInIcon sx={{ color: "white"}}/>
                             </a>

                             <a className="links"
                                target="_blank"
                                rel="noreferrer noopener"
                                href="https://github.com/ghazi135">
                                 <GitHubIcon sx={{ color: "white"}}/>
                             </a>

                             <a className="links"
                                target="_blank"
                                rel="noreferrer noopener"
                                href="https://www.tiktok.com/@ghazibouzazi">
                                 <TikTokIcon sx={{ color: "white"}}/>
                             </a>

                             <a  className="links"
                                 href='mailto:gbouzazi@gmail.com'
                                 target='_blank'
                                 rel='noopener noreferrer'>
                                 <MailOutlineIcon sx={{ color: "white"}}/>
                             </a>
                         </div>


                         <div className="footer-style-end">
                             &#169; ghazi bouzazi 2026 • all rights reserved
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
                             &#169; ghazi bouzazi 2023 • all rights reserved
                         </div>

                     </div>

                 </Fade>
             </Hidden>
         </div>
    );
}


export default Footer;
