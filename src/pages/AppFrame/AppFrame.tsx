import React, {FC, useCallback, useState} from 'react';
import './AppFrame.scss';
import {ActionList, Button, Frame, Icon, TopBar} from "@shopify/polaris";
import {ChevronDownMinor} from "@shopify/polaris-icons";
import logo from "../../Components/logo/logo";

interface AppFrameProps {
}

const AppFrame: FC<AppFrameProps> = () => {
    const [isSearchActive, setIsSearchActive] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [isSecondaryMenuOpen, setIsSecondaryMenuOpen] = useState(false)
    const handleSearchResultsDismiss = useCallback(() => {
        setIsSearchActive(false)
        setSearchValue('')
    }, [])
    const handleSearchChange = useCallback((value) => {
        setSearchValue(value)
        setIsSearchActive(value.length > 0)
    }, [])

    const handleNavigationToggle = useCallback(() => {
        console.log('toggle navigation visibility')
    }, [])

    const toggleIsSecondaryMenuOpen = useCallback(() => setIsSecondaryMenuOpen((isSecondaryMenuOpen) => !isSecondaryMenuOpen), [])

    const searchFieldMarkup = <TopBar.SearchField onChange={handleSearchChange} value={searchValue}
                                                  placeholder="Search" showFocusBorder/>

    const searchResultsMarkup = <ActionList items={[{content: 'Shopify help center'}, {content: 'Community forums'}]}/>

    const secondaryMenuMarkup = (
        <TopBar.Menu
            activatorContent={
                <Button icon={<Icon source={ChevronDownMinor}/>} accessibilityLabel="Language Selection Button">
                    EN
                </Button>
            }
            open={isSecondaryMenuOpen}
            onOpen={toggleIsSecondaryMenuOpen}
            onClose={toggleIsSecondaryMenuOpen}
            actions={[
                {
                    items: [{content: 'French (FR)'}],
                },
            ]}
        />
    )
    const topBar = <TopBar
        showNavigationToggle
        secondaryMenu={secondaryMenuMarkup}
        searchResultsVisible={isSearchActive}
        searchField={searchFieldMarkup}
        searchResults={searchResultsMarkup}
        onSearchResultsDismiss={handleSearchResultsDismiss}
        onNavigationToggle={handleNavigationToggle}
    />
    return (
        <Frame topBar={topBar} logo={logo}/>
    );
}

export default AppFrame;
