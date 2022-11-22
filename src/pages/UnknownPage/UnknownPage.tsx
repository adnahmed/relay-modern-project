import React, { FC } from 'react';
import './UnknownPage.scss';
import {Link} from "react-router-dom";

export interface UnknownPageProps {}

const UnknownPage: FC<UnknownPageProps> = () => (
    <div>
        Uh oh! You've landed in an unfamiliar terriotory
        <Link to="/">
            <button type="button">Go to a Safe Place</button>
        </Link>
    </div>
);

export default UnknownPage;
