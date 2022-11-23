import React, {FC, useState} from 'react';
import './RegisterationForm.scss';
import onChangeInput from "../../util/onChangeInput";
import {Link} from "react-router-dom";

export interface RegisterationFormProps {
}

const RegisterationForm: FC<RegisterationFormProps> = (props) => {
    const [firstName, setFirstName] = useState('')
    return (
        <>
            <form action="post">
                <fieldset>
                    <legend>Registeration Form</legend>
                    <label>
                        Farm Name
                        <input type="text" value={firstName} onChange={onChangeInput(setFirstName)} required
                               placeholder="Enter your First Name"/>
                    </label>
                    <label>
                        Farm ID
                        <input type="text" value={firstName} onChange={onChangeInput(setFirstName)} required
                               placeholder="Enter your First Name"/>
                    </label>
                    <label>
                        <input type="text" value={firstName} onChange={onChangeInput(setFirstName)} required
                               placeholder="Enter your First Name"/>
                    </label>
                    <label>
                        First Name
                        <input type="text" value={firstName} onChange={onChangeInput(setFirstName)} required
                               placeholder="Enter your First Name"/>
                    </label>
                    <label>
                        First Name
                        <input type="text" value={firstName} onChange={onChangeInput(setFirstName)} required
                               placeholder="Enter your First Name"/>
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
