import CheckboxFormik from './CheckboxFormik';
import * as Yup from "yup";
import {Form, Formik} from 'formik';

export default {
    title: "CheckboxFormik",
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
            <CheckboxFormik name='name'>children</CheckboxFormik>
        </Form>
    </Formik>

Default.story = {
    name: 'default',
};
