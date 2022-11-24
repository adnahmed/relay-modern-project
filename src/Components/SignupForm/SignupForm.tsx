import React, {ComponentProps, FC, PropsWithChildren, ReactNode, ReactPropTypes} from 'react';
import {
    Formik,
    FormikHelpers,
    FormikProps,
    Form,
    Field,
    FieldProps,
    useFormik, FormikErrors, FormikContextType, FormikConfig, ErrorMessage, useField, FieldHookConfig, FieldInputProps
} from "formik";
import * as Yup from 'yup'

import './SignupForm.scss';

interface SignupFormValues {
    firstName: string
    lastName: string
    email: string
}

interface SignupFormProps {
}

type InputFieldProps = FieldHookConfig<string> & { label?: string }

function MyTextInput(props: InputFieldProps) {
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

function MyCheckbox(props: InputFieldProps) {
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

function MySelect(props: InputFieldProps) {
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

const SignupForm: FC<SignupFormProps> = () => {
    return (
        <>
            <h1>Sign Up</h1>
            <Formik
                initialValues={{firstName: '', lastName: '', email: '', acceptedTerms: false, jobType: ''}}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    lastName: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Required'),
                    email: Yup.string().email('Invalid email address.').required('Required'),
                    acceptedTerms: Yup.boolean()
                        .required('Required')
                        .oneOf([true], 'You must accept terms and conditions.'),
                    jobType: Yup.string()
                        .oneOf(
                            ['designer', 'development', 'product', 'other'],
                            'Invalid Job Type'
                        )
                        .required('Required'),
                })}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {

                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false)
                    }, 400)
                }}>
                <Form>
                    <MyTextInput label='First Name' name='firstName' type='text' placeholder='Jane'/>
                    <MyTextInput label='Last Name' name='lastName' type='text' placeholder='Doe'/>
                    <MyTextInput label='Email Address' name='email' type='text' placeholder='jane@formik.com'/>
                    <MySelect label='Job Type' name='jobType'>
                        <option value=''>Select a Job Type</option>
                        <option value='designer'>Designer</option>
                        <option value='development'>Development</option>
                        <option value='product'>Product</option>
                        <option value='other'>Other</option>
                    </MySelect>
                    <MyCheckbox name='acceptedTerms'>
                        I accept the terms and conditions
                    </MyCheckbox>
                    <button type='submit'>Submit</button>
                </Form>
            </Formik>
        </>
    )
}


export default SignupForm;
