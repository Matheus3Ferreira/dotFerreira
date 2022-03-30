import { useState } from "react"
import AboutPaste from "../components/AboutPaste";
import ButtonPaste from "../components/ButtonPaste";
import "../styles/about-me.scss";
import rocket from "../assets/rocket.svg";
import boi from "../assets/boi.png";
import Maintence from "../components/Maintence";

export function AboutMe() {
    //Every paste has a id, and it changes the state to the paste id to show it.
    const [paste, setPaste] = useState(1);

    //PasteInfo is the title of the buttons and the color of buttons and pastes
    const pasteInfo = [
        {
            title: "Certifications",
            color: "#171920"
        },
        {
            title: "Skills",
            color: "#182966"
        },
        {
            title: "Personal data",
            color: "#134555"
        }        
    ]
    
    return (
        <div className="about-page">
            <h1>About me</h1>  
            <h2>I’m a Developer Backend, able to learn everything, searching incredible ideas to make it happen.</h2>
                
                {/* This map is for the buttons. */}
                <div>
                    {pasteInfo.map(elem => <ButtonPaste numberPaste={() => setPaste(pasteInfo.indexOf(elem) + 1)} background={elem.color}>{elem.title}</ButtonPaste>)}
                </div>
                <div className="pastes-container">

                    <AboutPaste id={1} background={pasteInfo[0].color} selected={paste}>
                        <Maintence />
                    </AboutPaste>

                    <AboutPaste id={2} background={pasteInfo[1].color} selected={paste}>
                        <h2>What I code:</h2>
                        <ul>
                            <li>Languages: Javascript and Typescript.</li>
                            <li>Frontend: HTML, CSS, SCSS, ReactJS.</li>
                            <li>Backend: NodeJS, Express, TypeORM, API REST.</li>
                            <li>Databases: SQLServer, mySQL, PostgreSQL.</li>
                        </ul>
                        <div className="storyset rocket">
                            <div className="position">
                                <img src={rocket} alt="rocket stages" />
                                <a href="https://storyset.com/business">Business illustrations by Storyset</a>
                            </div>
                        </div>

                    </AboutPaste>

                    <AboutPaste id={3} background={pasteInfo[2].color} selected={paste}>
                        <p>I’m a bot lover, gamer, I like everything about code and the world of technology and I’m searching a opportunity to make great solutions.</p>
                        <p>I’m 23 years old, living in Santos, São Paulo, Brazil, able to learn with the world.</p>
                        <div className="flex-text-img">
                            <div>
                            <p>Now I’m working on Ferreira.dev project.</p>
                            <p>I live learning how to code better.</p>
                            <p>I started code was 22 years old,  but only in 2021 I learned about development web and the multiples ways that I can take.</p>
                            <p className="bold-title">Contact information</p>
                            <ul>
                                
                                <li>
                                    Phone:&nbsp;<a href="tel:+551332244214" className="link-underlined">+55 (13) 3224-4214</a>
                                    &nbsp;or&nbsp;
                                    <a href="tel:+5513920004406" className="link-underlined">+55 (13) 92000-4406</a>
                                </li>
                                <li>
                                    Email:&nbsp;<a href="mailto:matheus.s.f@outlook.com.br" className="link-underlined">matheus.s.f@outlook.com.br</a>
                                </li>
                                <li>GitHub: <a href="https://github.com/Matheus3Ferreira" className="link-underlined">https://github.com/Matheus3Ferreira</a> </li>
                            </ul>
                        </div>
                        <img src={boi} alt="boi" />
                        </div>
                    </AboutPaste>
                </div>

        </div>
    )
}