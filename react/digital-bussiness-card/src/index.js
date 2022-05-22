import React from "react"
import  ReactDOM from "react-dom/client"
import "./style.css"
import { Header } from "./App"
import { About } from "./About"
import { Interest } from "./Interests"
const root = ReactDOM.createRoot(
    document.getElementById("root")
)
root.render(
    <div>
        <Header />
        <About />
        <Interest />
    </div>
    )