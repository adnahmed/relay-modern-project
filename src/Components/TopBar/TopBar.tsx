import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";
import Logo from "../Logo/Logo";

interface TopBarProps {
}

const TopBarWrapper = styled.div`
  display: flex;
`

const Options = styled.div`
  @media (max-width: 20rem) {
    flex: 2;
  }
  @media (min-width: 21rem) and (max-width: 26rem) {
    flex: 3;
  }
  @media (min-width: 26rem) and (max-width: 53rem) {
    flex: 5;
  }
  flex: 9;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
`
const SearchBox = styled.input`
  @media (max-width: 20rem) {
    visibility: hidden;
  }
`
const LocaleSelection = styled.select`
  @media (max-width: 20rem) {
    visibility: hidden;
  }
`

enum SupportedLocales {
    EN = "EN",
    FR = "FR"
}

export default function TopBar() {
    return (
        <TopBarWrapper>
            <Link to="/">
                <Logo />
            </Link>
            <Options>
                <SearchBox type="search"/>
                <LocaleSelection defaultValue={SupportedLocales.EN}>
                    {Object.keys(SupportedLocales).map(locale => {
                           return <option value={locale}>{SupportedLocales[locale]}</option>
                    })}
                </LocaleSelection>
            </Options>
        </TopBarWrapper>
    );
}