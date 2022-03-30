import maintence from "../assets/maintence.svg"
import "../styles/maintence.scss"

export default function Maintence(){
    return (
        <div className="maintence-page">
            <h1>We are making the design, soon will have great things!</h1>
            <div className="storyset maintence">
                <img src={maintence} alt="maintence" />
                <a href="https://storyset.com/worker">Worker illustrations by Storyset</a>
            </div>
        </div>
    )
}