/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import  ReactDOM from "react-dom/client"
import ReactLogo from "./logo512.png"
export const NavBar = () => {
    return(
        <nav>
            <div className="title">
                <img src = {ReactLogo} className = "nav-img"></img>
                <h3 className="react">React Facts</h3>
            </div>
            <h4>React Course - Project</h4>
        </nav>
    )
}
