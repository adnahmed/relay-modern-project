import React from 'react';
import {useField} from "formik";
import InputFieldProps from "../InputFieldProps";
import './TextInputFormik.scss';

function TextInputFromik(props: InputFieldProps) {
    const [field, meta] = useField(props);
    const {label, type, placeholder} = props;
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input type={type} placeholder={placeholder} className='text-input' {...field} />
            {meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
        </>
    )
}

export default TextInputFromik;
