import { useState } from "react"
import AboutPaste from "../components/AboutPaste";
import ButtonPaste from "../components/ButtonPaste";
import maintence from "../assets/maintence.svg"

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
        <div>
            <h1>About me</h1>  
            <h2>I’m a Developer Backend, able to learn everything, searching incredible ideas to make it happen.</h2>
                
                {/* This map is for the buttons. */}
                {pasteInfo.map(elem => <ButtonPaste numberPaste={() => setPaste(pasteInfo.indexOf(elem) + 1)} background={elem.color}>{elem.title}</ButtonPaste>)}
                
                <AboutPaste id={1} background={pasteInfo[0].color} selected={paste}>

                <a href="https://storyset.com/worker">Worker illustrations by Storyset</a>
                </AboutPaste>

                <AboutPaste id={2} background={pasteInfo[1].color} selected={paste}>
                    <span>Uiui</span>
                </AboutPaste>

                <AboutPaste id={3} background={pasteInfo[2].color} selected={paste}>
                    <span>Piupiu</span>
                </AboutPaste>

        </div>
    )
}