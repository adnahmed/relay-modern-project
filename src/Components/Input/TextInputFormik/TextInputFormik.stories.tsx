/* eslint-disable */
import TextInputFormik from './TextInputFormik';
import {Form, Formik} from "formik";
import * as Yup from 'yup';

export default {
    title: "TextInputFormik",
};

export const Default = () =>
    <Formik initialValues={{name: ''}}
            validationSchema={Yup.object({
                name: Yup.string()
            })}
            onSubmit={(values, {setSubmitting}) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false)
                }, 400)
            }}>
        <Form>
            <TextInputFormik label='label' name='name' type='text' placeholder='placeholder'/>
        </Form>
    </Formik>

Default.story = {
    name: 'default',
};
