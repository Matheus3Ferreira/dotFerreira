import { NavLink } from "react-router-dom";
import profile from "../assets/profile.svg";
import "../styles/sidebar.scss"

export function SideBar(){
    
    function CheckNavLinkActived(active: boolean) {
        const activeClassName = "actived-navlink navlink"
        return active ? activeClassName : "navlink"
    }

    return (
        <div className="side-bar"> 
            <img src={profile} alt="profile"/>
            <h2>Matheus da Silva Ferreira</h2>
            <p>Student and web developer</p>
            <nav>
                <NavLink className={({isActive}) => CheckNavLinkActived(isActive)} to="/">Home</NavLink>
                <NavLink className={({isActive}) => CheckNavLinkActived(isActive)} to="/aboutme">About me</NavLink>
                <NavLink className={({isActive}) => CheckNavLinkActived(isActive)} to="/projects">Projects</NavLink>
                <NavLink className={({isActive}) => CheckNavLinkActived(isActive)} to="/contactme">Contact me</NavLink>
                <NavLink className={({isActive}) => CheckNavLinkActived(isActive)} to="/feedback">Feedback</NavLink>
            </nav>
        </div>
    )
}