/* eslint-disable */
import SelectFormik from './SelectFormik';
import * as Yup from "yup";
import {Form, Formik} from 'formik';

export default {
    title: "SelectFormik",
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
            <SelectFormik label='label' name='name'>
                <option value=''>Select</option>
                <option value='option'>Option</option>
            </SelectFormik>
        </Form>
    </Formik>

Default.story = {
    name: 'default',
};
