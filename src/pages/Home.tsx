import server from "../assets/server.svg";
import "../styles/home.scss";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

export function Home() {
    const navigate = useNavigate();
    return (
        <main>
            <h1 className="home-title">Hello, it's me, Matheus.<br/>Javascript and Typescript developer.</h1>
            <div className="grid-container">
                <h2 className="grid-title">Wanna know more about my skills?<br/>Check out about me. 👇</h2>
                <Button className="button-home button" onClick={() => navigate('/aboutme')}>About me</Button>
                <img src={server} alt="" className="server"/>
            </div>
        </main>
    )
}