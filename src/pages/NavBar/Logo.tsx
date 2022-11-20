import React from "react";
import {useFarmStore} from "../../Models/useFarmStore";
import AppLogo from '../../Components/Logo/Logo'
export function Logo(props) {
    return (
        <div style={{ width: '80px', height: '80px', ...props.style}} className="NavbarImage">
            <AppLogo />
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