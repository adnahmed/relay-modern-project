import React, {useEffect} from "react";
import {action} from "@storybook/addon-actions";
import {MemoryRouter, useLocation} from "react-router-dom";
import {Args, ReactFramework} from '@storybook/react'
import {context} from "msw";

const LocationChangeAction = ({children}) => {
    const location = useLocation()
    useEffect(() => {
        if (location.key !== "default")
            action(`React router Location Change`)(location)
    }, [location])
    return (<>{children}</>);
}

const ReactRouterDecorator= (Story, context) => {
    return (
        <MemoryRouter>
            <LocationChangeAction>
                <Story {...context} />
            </LocationChangeAction>
        </MemoryRouter>
    )
}

export default  ReactRouterDecorator;