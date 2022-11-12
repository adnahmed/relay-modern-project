import React from "react";
import {useFarmStore} from "../../Models/Farm";
import logo from './logo.webp'
export function Logo(props) {
    return (
        <div style={{ width: '80px', height: '80px', ...props.style}} className="NavbarImage">
            <img src={logo} alt="KMAF"/>
        </div>
    )
}

export function FarmTitleBanner(props) {
    const farmName = useFarmStore(state => state.name)
    return (
        <>
            <div style={{background: 'lightseagreen'}} className="FarmTitleBanner">
                <div style={{color: 'white'}} className="FarmTitleBannerName">{farmName}</div>
            </div>
        </>
    )
}

export function AppBanner(props) {
    return (
        <>
            <div style={{background: 'lightseagreen'}} className="AppBanner">
                <h1> KESAN DIARY </h1>
            </div>
        </>
    )
}