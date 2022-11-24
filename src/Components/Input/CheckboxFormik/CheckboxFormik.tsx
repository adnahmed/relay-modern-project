import React, { FC } from 'react';
import './CheckboxFormik.scss';
import {useField} from "formik";
import InputFieldProps from "../InputFieldProps";

interface CheckboxFormikProps {}

function CheckboxFormik(props: InputFieldProps) {
    const [field, meta] = useField({...props, type: 'checkbox'});
    return (
        <div>
            <label className='checkbox-input'>
                <input type='checkbox' {...field} name={props.name}/>
                {props.children}
            </label>
            {meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
        </div>
    )
}

export default CheckboxFormik;
