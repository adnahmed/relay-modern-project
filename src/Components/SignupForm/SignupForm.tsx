import { FC } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import TextInputFromik from '../Input/TextInputFormik/TextInputFormik'
import SelectFormik from '../Input/SelectFormik/SelectFormik'
import CheckboxFormik from '../Input/CheckboxFormik/CheckboxFormik'
import './SignupForm.scss'
import { useAuth } from '../../Hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import ALL_CITIES from '../../Models/Constant/AllCountries';

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
          permanentAddress: Yup.string().required('Required'),
          city: Yup.string().required('Required'),
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
            <SelectFormik label="City" name="city" options={ALL_CITIES}/>
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
