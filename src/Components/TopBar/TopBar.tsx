import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Logo from "../Logo/Logo";
import MenuButton from "../MenuButton/MenuButton";
import './TopBar.scss'
import LocaleSelection from "../LocaleSelection/LocaleSelection";
import SearchBox from "../SearchBox/SearchBox";

export interface TopBarProps {
}

export default function TopBar(props: TopBarProps) {
    return (
        <div className="TopBar">
            <Link className="LogoLink" to="/">
                <Logo/>
            </Link>
            <div className="TopBarMenu">
                <div className="TopBarMenuWrapper">
                    <SearchBox />
                    <LocaleSelection />
                </div>
            </div>
            <div className="MenuButtonWrapper">
                <MenuButton/>
            </div>
        </div>
    );
}