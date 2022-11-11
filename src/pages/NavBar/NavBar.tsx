import React from "react";
import {useFarmStore} from "../../Models/Farm";
import {CropYear} from "../../Models/Crop";

export function NavBar() {
    const farmLogo = useFarmStore(state => state.logo)
    return (
        <div className="NavbarImage">
            <img src={farmLogo} alt="KMAF"/>
        </div>
    )
}

export function FarmTitleBanner(props) {
    const farmName = useFarmStore(state => state.name)
    return (
        <>
            <div className="FarmTitleBanner">
                <div className="FarmTitleBannerName">{farmName}</div>
            </div>
        </>
    )
}

export function AppBanner(props) {
    return (
        <>
            <div className="AppBanner">
                <h1> KESAN DIARY </h1>
                <CropYear />
            </div>
        </>
    )
}