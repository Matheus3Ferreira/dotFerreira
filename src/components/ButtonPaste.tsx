import { ButtonHTMLAttributes, ReactNode } from "react"
import "../styles/button-paste.scss"
type ButtonPasteProps = {
    numberPaste: any,
    children: ReactNode,
    background: string,
};

export default function ButtonPaste({ numberPaste, children, background}: ButtonPasteProps) {
    return (
        <button className="btn-paste" style={{backgroundColor: background}} onClick={numberPaste}><span>{children}</span></button>
    )
};