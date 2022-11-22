import React, {FC} from 'react';
import './AuthenticationMethods.scss';
import {Link} from "react-router-dom";

export interface AuthenticationMethodsProps {
}

const AuthenticationMethods: FC<AuthenticationMethodsProps> = () => (
    <div className="AuthenticationMethods">
        <div style={{marginBottom: '8em'}}>
        </div>
            <Link to="signin"
                  style={{color: 'blue', borderWidth: '2px', borderRadius: '1em', padding: '15px'}}>Login</Link>
        <div style={{ marginTop: '4em'}}>
            <p>Don't yet have an account?</p>
            <Link to="signup">
                <button style={{color: 'blue', borderWidth: '2px', borderRadius: '1em', padding: '15px'}}
                        type="button">Sign Up
                </button>
            </Link>
        </div>
    </div>
);

export default AuthenticationMethods;
