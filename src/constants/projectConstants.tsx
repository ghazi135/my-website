import React from "react";


import SafetyNet from '../assets/safetyNet.png';
import Mediscreen from '../assets/mediscreen.png';
import PayMyBuddy from '../assets/payMyBuddy.jpg';
import Fusescrum from '../assets/fuzeScrum.png';
import IRiide from '../assets/i.png';

export const projectInfo = [
    {
        image: IRiide,
        width: '350px',
        height: '200px',
        title: (<div>i-riide</div>),
        stack: 'Flutter + Web Technologies',
        description: (
            <p>
                A shared mobility platform reshaping cities through shared access. The goal is to make car ownership optional in urban Europe by creating seamless access to shared vehicles, parking, charging, and bikes. Less space wasted, fewer emissions, and more freedom.
            </p>
        ),
        buttons: {
            name: 'website',
            link: 'https://i-riide.com/about-us/',
        }
    },
    {
        image: Fusescrum,
        width: '350px',
        height: '200px',
        title: (<div>FuseScrum</div>),
        stack: 'detailed project specifications + Analyze a specification + List the features requested by a client + UML + Adobe XD',
        description: (
            <p>
                the purpose of this application is to connect a mentor with a student in order to support him in his
                professional field to improve his skills and feel comfortable
            </p>
        ),
        buttons: {
            name: 'code',
            link: 'https://github.com/ghazi135/P3-OC',
        }
    },
    {
        image: SafetyNet,
        width: '350px',
        height: '300px',
        title: (<div>Safety Net</div>),
        stack: 'Spring Boot',
        description: (
            <p>
                The purpose of this application is to send information to emergency service systems.
                Your role will be to create the back-end of this new application from scratch.
                To give you more clarification on usage, here are some examples: If, for example, a fire breaks out,
                SafetyNet Alerts needs to provide information about the people in the burning building, such as their
                phone numbers.
                In the event of a hurricane alert,
                we want SafetyNet Alerts to be able to text everyone in the area. To do this, SafetyNet Alerts needs to
                collect the phone numbers of people living in homes near the hurricane area. In the event of a flood,
                we want to provide emergency services with specific information about people in the area.
                We need to know the potential victims, their ages and their medical history (treatments, allergies,
                etc.).
            </p>
        ),
        buttons: {
            name: 'code',
            link: 'https://github.com/ghazi135/P5-OC',
        }
        ,
    },
    {
        image: PayMyBuddy,
        width: '350px',
        height: '150px',
        title: (<div>Pay My Buddy</div>),
        stack: 'Spring Boot + Thymleaf + MySql',
        description: (
            <p>
                an application that would allow customers to transfer money to manage their finances or pay their
                friends
            </p>
        ),
        buttons: {
            name: 'code',
            link: 'https://github.com/ghazi135/P6-OC',
        }
    },
    {
        image: Mediscreen,
        width: '280px',
        height: '120px',
        title: (<div>Mediscreen</div>),

        stack: 'Spring-Boot + Angular 12 + MySql + NoSql + Docker',
        description: (
            <p>
                An application in the field of medicine which allows the practitioner to detect and follow up on his
                patients in order to identify cases at risk of diabetes
            </p>
        ),
        buttons: {
            name: 'code',
            link: 'https://github.com/ghazi135/P9-OC',
        }
    },


];