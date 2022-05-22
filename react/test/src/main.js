import React from "react"
import  ReactDOM from "react-dom/client"

export const Main = () =>{
    return(
        <main>
            <h1>Fun Facts about React</h1>
            <ul className="main-list">
                <li><span>Was first released in 2013</span></li>
                <li><span>Was originaly created by Joradon Walker</span></li>
                <li><span>Has well over 100k stars on Github</span></li>
                <li><span>Is  maintained by Facebook</span></li>
                <li><span>Power thousands of enterprise apps, including mobile app</span></li>
            </ul>
        </main>
    )
}