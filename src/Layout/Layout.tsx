import {Outlet} from "react-router-dom";
import React from "react";
import {AppBanner, FarmTitleBanner, NavBar} from "../pages/NavBar/NavBar";

export function Layout(props) {
    return (
        <div>
            <header>
                <nav>
                    <NavBar/>
                </nav>
                <FarmTitleBanner/>
                <AppBanner/>
            </header>
            <Outlet/>
        </div>
    )
}

