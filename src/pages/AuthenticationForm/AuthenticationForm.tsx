import React, {FC, useState} from 'react';
import './AuthenticationForm.scss';
import onChangeInput from "../../util/onChangeInput";
import {Link} from "react-router-dom";

export interface AuthenticationFormProps {
    setIsAuthenticated: (b: boolean) => void
}

const AuthenticationForm: FC<AuthenticationFormProps> = (props) => {
    const [password, setPassword] = useState('')
    const [userID, setUserID] = useState('')

    return (
        <form method="get">
            <fieldset>
                <legend style={{marginBottom: '2em', marginTop: '3em'}}><b>Authentication</b></legend>
                <div style={{ display: 'flex', flexDirection: 'column'}}>
                    <label>
                        <p>Email / Username</p>
                        <input placeholder="Enter your Email or Username" name="UserID"
                               onChange={onChangeInput(setUserID)}
                               required value={userID} autoFocus type="text"></input>
                    </label>
                    <label>
                    <p>Password</p>
                        <input placeholder="Enter your password" name="User Password"
                               onChange={onChangeInput(setPassword)}
                               required value={password} type="password"></input>
                    </label>
                </div>
            </fieldset>
            <button type="submit" style={{color: 'blue', borderWidth: '2px', borderRadius: '1em', padding: '15px', marginTop: '1em'}}
                    onClick={() => props.setIsAuthenticated(true)}>
                <Link to="/">
                    Submit
                </Link>
            </button>
        </form>
    )
};

export default AuthenticationForm;
