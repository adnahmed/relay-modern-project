/* eslint-disable */
import SelectFormik from './SelectFormik'
import * as Yup from 'yup'
import { Form, Formik } from 'formik'

export default {
  title: 'SelectFormik',
}
const options = [
  { label: 'Select an Option', value: '' },
  { label: 'Option', value: 'option' },
]
export const Default = () => (
  <Formik
    initialValues={{ name: '' }}
    validationSchema={Yup.object({
      name: Yup.string(),
    })}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        setSubmitting(false)
      }, 400)
    }}
  >
    <Form>
      <SelectFormik label="label" name="name" options={options} />
    </Form>
  </Formik>
)

Default.story = {
  name: 'default',
}
