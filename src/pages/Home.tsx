
import server from "../assets/server.svg";
import "../styles/home.scss";
import {Button} from "../components/Button"

export function Home() {
    return (
        <div className="home-page">
            <main>
                <h2 className="page-title">DotFerreira.com</h2>
                <h1>Hello, it's me, Matheus.<br/>Javascript and Typescript developer.</h1>
                <div className="grid-container">
                    <h2 className="grid-title">Wanna know more about my skills?<br/>Check out about me. 👇</h2>
                    <Button className="button-home button">About me</Button>
                    <img src={server} alt="" className="server"/>
                </div>
            </main>
        </div>
    )
}