import { FC } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import TextInputFromik from '../Input/TextInputFormik/TextInputFormik'
import SelectFormik from '../Input/SelectFormik/SelectFormik'
import CheckboxFormik from '../Input/CheckboxFormik/CheckboxFormik'
import './SignupForm.scss'
import { useAuth } from '../../Hooks/useAuth'
import { useNavigate } from 'react-router-dom'

interface SignupFormProps {}
const InputValues: Record<string, string | boolean> = {
  firstName: '',
  lastName: '',
  mobileOrEmail: '',
  newPassword: '',
  repeatPassword: '',
  job: '',
  otherJob: '',
  permanentAddress: '',
  city: '',
  country: '',
  acceptedTerms: false,
}

const SignupForm: FC<SignupFormProps> = () => {
  const auth = useAuth()
  const navigate = useNavigate()
  return (
    <>
      <h1>Sign Up</h1>
      <Formik
        initialValues={InputValues}
        validationSchema={Yup.object({
          firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
          lastName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
          mobileOrEmail: Yup.string().email('Invalid email address.').required('Required'),
          newPassword: Yup.string().required('Required'),
          repeatPassword: Yup.string().required('Required'),
          job: Yup.string().oneOf(['Farm Manager', 'Farmer', 'Expert', 'Other']).required('Required'),
          otherJob: Yup.string().when('job', { is: true, then: Yup.string().required('A Job Title is Required.') }),
          permanentAddress: Yup.string().required('Required'),
          city: Yup.string().required('Required'),
          country: Yup.string().required('Required'),
          acceptedTerms: Yup.boolean().required('Required').oneOf([true, false], 'You must accept Terms and Conditions.'),
        })}
        onSubmit={(values, actions) => {
          auth?.signin('addna', 'add')
          navigate('/')
          actions.setSubmitting(false)
        }}
      >
        {(props) => (
          <Form>
            <TextInputFromik label="First Name" name="firstName" type="text" placeholder="Jane" />
            <TextInputFromik label="Last Name" name="lastName" type="text" placeholder="Doe" />
            <TextInputFromik label="Mobile Number or Email Address" name="mobileOrEmail" type="text" placeholder="jane@gmail.com, +923XXXXXXXX etc." />
            <TextInputFromik label="Password" name="newPassword" type="text" hidden />
            <TextInputFromik label="Repeat Password" name="repeatPassword" type="text" hidden />
            <TextInputFromik label="Address" name="permanentAddress" type="text" />
            <SelectFormik label="Job" name="job">
              <option value="">Select Job</option>
              <option value="Farm Manager">Farm Manager</option>
              <option value="Expert">Expert</option>
              <option value="Farmer">Farmer</option>
              <option value="Other">Other</option>
            </SelectFormik>
            {props.values.job === 'Other' && <TextInputFromik label="Other Job" name="otherJob" type="text" />}
            <SelectFormik label="Country" name="country">
              <option value="">Select Country</option>
              <option value="rwp">Pakistan</option>
              <option value="isl">India</option>
            </SelectFormik>
            <SelectFormik label="City" name="city">
              <option value="">Select City</option>
              <option value="rwp">Rawalpindi</option>
              <option value="isl">Islamabad</option>
            </SelectFormik>
            <CheckboxFormik name="acceptedTerms">
              I accept the <a className="TermsAndConditions">Terms and Conditions</a>
            </CheckboxFormik>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default SignupForm
