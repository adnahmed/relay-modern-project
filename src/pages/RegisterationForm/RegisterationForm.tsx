import React, {FC, useState} from 'react';
import './RegisterationForm.scss';
import onChangeInput from "../../util/onChangeInput";
import {Link} from "react-router-dom";

interface RegisterationFormProps {
    setIsAuthenticated: (b: boolean) => void
}

const RegisterationForm: FC<RegisterationFormProps> = (props) => {
    const [name, setName] = useState('')
    return (
        <>
            <form action="post">
                <fieldset>
                    <legend>Registeration Form</legend>
                    <label>
                        Name
                        <input type="text" value={name} onChange={onChangeInput(setName)} required
                               placeholder="Enter your Name"/>
                    </label>
                </fieldset>
            </form>
            <Link to="/">
                <button type="button">Go Back</button>
            </Link>
        </>
    )
};

export default RegisterationForm;
