import errorNotFound from "../assets/error404.svg"

export default function NotFound(){
    return (
        <div>
            <h1>Page not found.</h1>
            <img src={errorNotFound} alt="Error 404" />
            <a href="https://storyset.com/web">Web illustrations by Storyset</a>
        </div>
    )
}