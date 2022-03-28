import server from "../assets/server.svg";
import "../styles/home.scss";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

export function Home() {
    const navigate = useNavigate();
    return (
        <div>
            <h1 className="home-title">Hello, it's me, Matheus.<br/>Javascript and Typescript developer.</h1>
            <h2 className="grid-title">Wanna know more about my skills?<br/>Check out about me. 👇</h2>
            <div className="flex-container">
                <Button className="button-home button" onClick={() => navigate('/aboutme')}>About me</Button>
                <div className="storyset">
                    <img src={server} alt="server"/>
                    <a href="https://storyset.com/internet">Internet illustrations by Storyset</a>
                </div>
            </div>
        </div>
    )
}