/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import  ReactDOM from "react-dom/client"
import { Icon } from '@iconify/react';
import AtsuImg from "./atsu-img.jpg"
export const Header =() =>{
    return(
        <header>
            <div className="header-img-box">
                <img src = {AtsuImg} className ="header-img"></img>
            </div>
            <div className="header-profile">
                <h2 className="header-name">atsuya tanaka</h2>
                <p className="header-job">frontend developer</p>
                <div className="header-btn-box">
                    <div className="header-eamil">
                        <Icon icon="ci:mail" color="black" height="20" />
                        <p className="eamil"> eamil</p>
                    </div>
                    <div className="header-linkedin">
                        <Icon icon="logos:linkedin-icon" color="#ccc" height="19" />
                        <p className="linkedin">linkedin</p>
                    </div>
                </div>
            </div>
        </header>
    )
}