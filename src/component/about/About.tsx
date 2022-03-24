import React from 'react';
import './About.css';
import Fade from '@mui/material/Fade';
import picture from "../../assets/profile-picture.jpg"
import {Col, Container, Row} from "react-bootstrap";


function About() {
    return (
        <Fade in timeout={{enter: 1200}}>
            <div className="About">


                <Container className="containers-center">

                    <Row>

                        <Col md={{span: 2, offset: 3}}> <img className="img-about" src={picture} alt="ghazi bouzazi"/></Col>
                        <Col md={{span: 5, offset: 2}}>
                            <p>Hi <span className="wave" role="img" aria-label="wave">👋🏼</span> I'm Ghazi, a Full
                                Stack web developer. I'm interested in anything tech — especially web dev and UI/UX. I
                                love building delightful and clean experiences.</p>

                            <p>Currently I work as a Full Stack engineer for <a target="_blank"
                                                                                rel="noreferrer noopener"
                                                                                href="https://www.qiminfo.ch/"><span
                                className="qim-info">QIM INFO</span></a> Come build greet experience for our clients
                                with us. We're hiring!</p>

                            <p>I'm from Tunisia and i moved to France when i was 17 years old. If I'm not beep booping,
                                you can find me playing frisbee, visiting friendos, Yelping restaurants to try, or
                                speaking to your manager.</p>

                            <p>Sometimes I blog (read: complain/meme) about coding and design and doing some shooting
                                with models or landscapes. Check out my instagram page and enjoy watching my best photos
                                or some of my past projects on my Github space and
                                feel free to connect!</p>
                        </Col>
                    </Row>


                </Container>


            </div>

        </Fade>);
}

export default About;
