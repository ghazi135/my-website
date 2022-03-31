import React from 'react';
import '../App.css';
import Header from "./header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./about/About";
import {Route, Routes} from 'react-router-dom';
import Contact from "./contact/Contact";
import Project from "./project/Project";
import Footer from "./footer/Footer";
import Error from "./error/Error";


function App() {
    return (
        <div className="App">
            <Header/>
            <Routes >

                <Route  path={ "/"} element={<About/>}/>
                    <Route path={ "/about"} element={<About/>}/>
                    <Route path={"/contact"} element={<Contact/>}/>
                    <Route path={"/project"} element={<Project/>}/>
                <Route path={ "*"} element={<Error />}/>

            </Routes>
             <Footer />

        </div>
    );
}

export default App;
