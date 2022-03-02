import profile from "../assets/profile.svg";
import "../styles/sidebar.scss"

export function SideBar(){
    return (
        <div className="side-bar"> 
            <img src={profile} alt="profile"/>
            <h2>Matheus da Silva Ferreira</h2>
            <p>Student and web developer</p>
            <nav>
                <a href="/">Home</a>
                <a href="/aboutme">About me</a>
                <a href="#c">Porfolio</a>
                <a href="#d">Contact</a>
                <a href="#e">Feedback</a>
            </nav>
        </div>
    )
}