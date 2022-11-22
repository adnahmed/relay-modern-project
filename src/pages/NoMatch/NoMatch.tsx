import {Link} from "react-router-dom";
import React from "react";

export default function NoMatch() {
    return (
        <>
            <p> Nothing to see here!</p>
            <Link to="/">Go to Homepage.</Link>
        </>
    )
}