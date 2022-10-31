import React, {FC, useState} from 'react';
import './AuthenticationForm.scss';
import onChangeInput from "../../util/onChangeInput";
import {Link} from "react-router-dom";

interface AuthenticationFormProps {
    setIsAuthenticated: (b: boolean) => void
}

const AuthenticationForm: FC<AuthenticationFormProps> = (props) => {
    const [password, setPassword] = useState('')
    const [userID, setUserID] = useState('')
    return (
        <form method="get" onSubmit={() => props.setIsAuthenticated(true)}>
            <fieldset>
                <legend>Authentication</legend>
                <label>
                    Email / Username
                    <input placeholder="Enter your Email or Username" name="UserID" onChange={onChangeInput(setUserID)}
                           required value={userID} autoFocus type="text"></input>
                </label>
                <label>
                    Password
                    <input placeholder="Enter your password" name="User Password" onChange={onChangeInput(setPassword)}
                           required value={password} type="password"></input>
                </label>
            </fieldset>
            <button type="submit">
                Login
            </button>
            <div>
                <p>Don't yet have an account?</p>
                <Link to="/signup">
                    <button type="button">Sign Up</button>
                </Link>
            </div>
        </form>
    )
};

export default AuthenticationForm;
