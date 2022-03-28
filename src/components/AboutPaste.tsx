import { ReactNode } from "react";
import "../styles/about-paste.scss"
type AboutPasteProps = {
    id: number;
    selected: number;
    children: ReactNode;
    background: string;
}

export default function AboutPaste({id, selected, children, background}: AboutPasteProps ){

    return (
        <div className={selected !== id ? "disabled-paste" : "paste"} style={{ background: background}}>
            {children}
        </div>
    )
    
}