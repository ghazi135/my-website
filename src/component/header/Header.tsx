import React from 'react';
import './Header.css';
import {Container, Nav, Navbar} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';
import {Fade} from "@mui/material";
import LangSwitch from "../LangSwitch";
import {FULL_NAME, useLang, useT} from "../../i18n/LanguageContext";

const LABELS = {
    en: {contact: 'Contact', about: 'About', project: 'Projects', cv: 'CV', photography: 'Photography', menu: 'Toggle navigation'},
    fr: {contact: 'Contact', about: 'À propos', project: 'Projets', cv: 'CV', photography: 'Photographie', menu: 'Ouvrir le menu'},
    ar: {contact: 'تواصل', about: 'نبذة عني', project: 'المشاريع', cv: 'السيرة الذاتية', photography: 'التصوير', menu: 'فتح القائمة'},
};

function Header() {
    const t = useT(LABELS);
    const {lang} = useLang();
    return (
        <Fade in timeout={{enter: 1200}}>
            <div className="Header">

                <Navbar bg="none" variant="dark" expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="/"><span>{FULL_NAME[lang].toUpperCase()}</span></Navbar.Brand>
                        <LangSwitch className="header-lang-mobile d-lg-none"/>
                        <Navbar.Toggle aria-controls="navbarScroll" aria-label={t.menu}/>
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{maxHeight: '100px'}}
                                navbarScroll
                            >

                            </Nav>
                            <Nav className="header-nav">
                                <LinkContainer to={process.env.PUBLIC_URL + "/contact"}>
                                    <Nav.Link>{t.contact}</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to={process.env.PUBLIC_URL + "/about"}>
                                    <Nav.Link>{t.about}</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to={process.env.PUBLIC_URL + "/project"}>
                                    <Nav.Link>{t.project}</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to={process.env.PUBLIC_URL + "/cv"}>
                                    <Nav.Link>{t.cv}</Nav.Link>
                                </LinkContainer>
                                <Nav.Link href="https://www.photography.ghazibouzazi.com/">{t.photography}</Nav.Link>
                                <LangSwitch className="header-lang d-none d-lg-inline-flex"/>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </Fade>
    );
}

export default Header;
