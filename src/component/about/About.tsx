import React from 'react';
import './About.css';
import Fade from '@mui/material/Fade';
import picture from "../../assets/profile-picture.jpg"
import {Col, Container, Row} from "react-bootstrap";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import {SvgIcon} from "@mui/material";

// Custom TikTok Icon Component
const TikTokIcon = (props: any) => (
    <SvgIcon {...props} viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </SvgIcon>
);


function About() {
    return (
        <Fade in timeout={{enter: 1200}}>
            <div className="About">


                <Container className="containers-center">

                    <Row>
                        <Col md={{span: 2, offset: 3}}>
                            <div className="photo-container">
                                <img className="img-about" src={picture} alt="ghazi bouzazi"/>
                                <div className="social-links-about">
                                    <a className="social-link-about"
                                       target="_blank"
                                       rel="noreferrer noopener"
                                       href="https://www.instagram.com/ghazi.bouzazi/">
                                        <InstagramIcon sx={{ color: "white", fontSize: 32 }}/>
                                    </a>
                                    <a className="social-link-about"
                                       target="_blank"
                                       rel="noreferrer noopener"
                                       href="https://www.linkedin.com/in/ghazi-bouzazi/">
                                        <LinkedInIcon sx={{ color: "white", fontSize: 32 }}/>
                                    </a>
                                    <a className="social-link-about"
                                       target="_blank"
                                       rel="noreferrer noopener"
                                       href="https://github.com/ghazi135">
                                        <GitHubIcon sx={{ color: "white", fontSize: 32 }}/>
                                    </a>
                                    <a className="social-link-about"
                                       target="_blank"
                                       rel="noreferrer noopener"
                                       href="https://www.tiktok.com/@ghazibouzazi">
                                        <TikTokIcon sx={{ color: "white", fontSize: 32 }}/>
                                    </a>
                                    <a className="social-link-about"
                                       href='mailto:gbouzazi@gmail.com'
                                       target='_blank'
                                       rel='noopener noreferrer'>
                                        <MailOutlineIcon sx={{ color: "white", fontSize: 32 }}/>
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col md={{span: 5, offset: 2}}>
                        <p>
  Hi <span className="wave" role="img" aria-label="wave">👋🏼</span> I'm Ghazi —
  a Full-Stack Software Engineer, CTO, and tech entrepreneur. I design and build
  scalable applications with a strong focus on clean architecture, usability, and
  high-quality user experiences.
</p>

<p>
  I currently lead the technical vision of multiple projects, including Nova Metrics
  and I-RIIDE, where I work across backend architecture, mobile development, cloud
  infrastructure, and product strategy.
</p>

<p>
  Originally from Tunisia and now based between France and Switzerland, I love mixing
  creativity and technology. When I'm not shipping features or reviewing code, you'll
  find me exploring new cities, working on photography projects, or sharing insights
  about tech, design, and entrepreneurship.
</p>

<p>
  I occasionally write about development, UI/UX, and my journey in building products.
  Feel free to check out my GitHub for past work, or connect with me on Instagram
  to discover my latest photos and behind-the-scenes content.
</p>

                        </Col>
                    </Row>


                </Container>


            </div>

        </Fade>);
}

export default About;
