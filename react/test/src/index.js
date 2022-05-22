import React from "react"
import  ReactDOM from "react-dom/client"
import ReactLogo from "./logo512.png"
import "./style.css"
import {NavBar} from "./app"
import { Main } from "./main"



const root = ReactDOM.createRoot(
    document.getElementById("root")
)
root.render(
    <div>
        <NavBar />
        <Main />
    </div>
    )
