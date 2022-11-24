import React, {FC} from 'react';
import './Signin.scss';
import {Form, Formik} from "formik";
import * as Yup from 'yup'
import TextInputFromik from "../Input/TextInputFormik/TextInputFormik";

interface SigninProps {
}

const SigninForm: FC<SigninProps> = () => {
    return (
        <>
            <h1>Sign In</h1>
            <Formik
                initialValues={{
                    mobileOrEmail: '',
                    password: ''
                }}
                validationSchema={
                    Yup.object({
                        mobileOrEmail: Yup.string()
                            .required('Required'),
                        password: Yup.string()
                            .required('Required')
                    })}
                onSubmit={
                    (values, {setSubmitting}) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values));
                        }, 300);
                    }}>
                <Form>
                    <TextInputFromik label='Email' name='email' placeholder='jane@gmail.com' />
                    <TextInputFromik label='Password' name='password' hidden />
                    <div className='forgotPassword'>Forgot Password?</div>
                    <button type='submit'>Sign In</button>
                </Form>
            </Formik>
        </>
    );
}

export default SigninForm;
