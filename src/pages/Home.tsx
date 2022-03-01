import profile from "../assets/profile.svg";
import server from "../assets/server.svg";
import "../styles/home.scss";
import {Button} from "../components/Button"

export function Home() {
    return (
        <div className="home-page">
            <div className="side-bar"> 
                <img src="https://avatars.githubusercontent.com/u/69362122?v=4" alt="profile"/>
                <h2>Matheus da Silva Ferreira</h2>
                <p>Student and web developer</p>
                <nav>
                    <a href="#a">Home</a>
                    <a href="#b">About me</a>
                    <a href="#c">Porfolio</a>
                    <a href="#d">Contact</a>
                    <a href="#e">Feedback</a>
                </nav>
            </div>
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