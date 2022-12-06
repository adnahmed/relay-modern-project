import React from 'react';
import {Link} from "react-router-dom";
import Logo from "../Logo/Logo";
import MenuButton from "../MenuButton/MenuButton";
import './TopBar.scss'
import LocaleSelection from "../LocaleSelection/LocaleSelection";
import SearchBox from "../SearchBox/SearchBox";
import {useAuth} from "../../Hooks/useAuth";

export interface TopBarProps {
}

export default function TopBar(props: TopBarProps) {
    const auth = useAuth();

    return (
        <div className="TopBar">
            <Link className="LogoLink" to="/">
                <Logo/>
            </Link>
            <div className="TopBarMenu">
                <div className="TopBarMenuWrapper">
                    <SearchBox />
                    <LocaleSelection/>
                </div>
            </div>
            <div className="MenuButtonWrapper">
                {!auth?.user && <div className="NewUser">
                    <Link className='link' to="/signup">
                        <button>Sign Up</button>
                    </Link>
                    <Link className='link' to="/signin">
                        <button>Sign In</button>
                    </Link>
                </div>
                }
                <MenuButton/>
            </div>
        </div>
    );
}