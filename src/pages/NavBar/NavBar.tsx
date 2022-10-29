import React from "react";

export function NavBar() {
    return (
        <div className="Navbar">
            <h2 className="NavbarElement NavbarTitle">Kauser's Farm</h2>
            <img className="NavbarElement NavbarImage" src="src/pages/NavBar/NavBar" alt="Farm Logo"/>
        </div>
    )
}

export function FarmTitleBanner(props) {
    return (
        <>
            <div className="FarmTitleBanner">
                <div className="FarmTitleBannerName">Kauser Model Agriculture Farm</div>
                <div className="FarmTitleBannerAddress">Jhambra Sharki, Mianwali</div>
            </div>
        </>
    )
}

export function AppBanner(props) {
    return (
        <>
            <div className="AppBanner">
                <h1> KESAN DIARY </h1>
            </div>
        </>
    )
}