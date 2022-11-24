import React, { FC } from 'react';
import './SelectFormik.scss';
import {useField} from "formik";
import InputFieldProps from "../InputFieldProps";

interface SelectFormikProps {}

function SelectFormik(props: InputFieldProps) {
    const [field, meta] = useField<string>(props);
    return (
        <div>
            <label htmlFor={props.id || props.name}>{props.label}</label>
            <select {...field} >
                {props.children}
            </select>
            {meta.touched && meta.error ? (<div className='error'>{meta.error}</div>) : null}
        </div>
    )
}

export default SelectFormik;
