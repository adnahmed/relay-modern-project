import React, {FC, FormEvent, useState} from 'react';
import './AuthenticationForm.scss';
import onChangeInput from "../../util/onChangeInput";
import {Link} from "react-router-dom";
import {useAuth} from "../../Hooks/useAuth";

export interface AuthenticationFormProps {
}

const AuthenticationForm: FC<AuthenticationFormProps> = (props) => {
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const auth = useAuth();
    const handleSubmit = (event: FormEvent) => {
        try {
            auth?.signin(username, password)
        }
        catch (err) {
            // console.log(err.message as Error)
        }
    }

    return (
        <form method="get" onSubmit={handleSubmit}>
            <fieldset>
                <legend><b>Authentication</b></legend>
                <div>
                    <label>
                        <p>Email / Username</p>
                        <input placeholder="Enter your Email or Username" name="UserID"
                               onChange={onChangeInput(setUsername)}
                               required value={username} autoFocus type="text"></input>
                    </label>
                    <label>
                        <p>Password</p>
                        <input placeholder="Enter your password" name="User Password"
                               onChange={onChangeInput(setPassword)}
                               required value={password} type="password"></input>
                    </label>
                </div>
            </fieldset>
            <button type="submit">
                <Link to="/">
                    Submit
                </Link>
            </button>
        </form>
    )
};

export default AuthenticationForm;
