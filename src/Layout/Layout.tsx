import {Outlet} from "react-router-dom";
import React from "react";
import {AppBanner, FarmTitleBanner, Logo} from "../pages/NavBar/Logo";

export function Layout(props) {
    return (
        <div>
            <header style={{display: 'flex'}}>
                <div style={{flex: '1'}}>
                    <FarmTitleBanner/>
                    <AppBanner/>
                </div>
                <Logo/>
            </header>
            <Outlet/>
        </div>
    )
}

