import React, { FC } from 'react'
import './Signin.scss'
import { Form, Formik, useField, useFormikContext } from 'formik'
import * as yup from 'yup'
import TextInputFromik from '../Input/TextInputFormik/TextInputFormik'
import { Link } from 'react-router-dom'
import { fetchQuery } from 'relay-hooks'
import isMobilePhone from 'validator/lib/isMobilePhone'
import SignInQuery from '../../Queries/Auth/SignIn.graphql'
import { SignInQuery$variables } from '../../Queries/Auth/__generated__/SignInQuery.graphql'
import environment from '../../RelayEnvironment'
import { Cookies } from 'react-cookie'
import jwt_decode, { InvalidTokenError, JwtPayload } from 'jwt-decode'
import env from '../../../env'
import ms from 'ms'

interface SignInProps {}

let isEmail = (value: string) => yup.string().email().isValidSync(value)
let isMobile = (value: string) => isMobilePhone(value)
let isMobileOrEmailSchema = yup.string().test({
  message: 'You must provide an email or mobile number.',
  test: (value) => {
    return isEmail(value || '') || isMobile(value || '')
  },
})

interface EmailOrMobilePhoneInputProp {
  name: string
  hidden: boolean
}

// TODO: Refactor this into one
const MobilePhone: FC<EmailOrMobilePhoneInputProp> = (props) => {
  const {
    values: { mobileOrEmail },
    touched,
    setFieldValue,
  } = useFormikContext<{ mobileOrEmail?: string }>()
  const [field, meta] = useField(props)

  React.useEffect(() => {
    setFieldValue(props.name, mobileOrEmail?.trim() !== '' && touched.mobileOrEmail && isMobilePhone(mobileOrEmail) ? mobileOrEmail : '')
  }, [mobileOrEmail, touched.mobileOrEmail, setFieldValue, props.name])

  return (
    <>
      <input {...props} {...field} />
      {!!meta.touched && !!meta.error && <div>{meta.error}</div>}
    </>
  )
}
const Email: FC<EmailOrMobilePhoneInputProp> = (props) => {
  const {
    values: { mobileOrEmail },
    touched,
    setFieldValue,
  } = useFormikContext<{ mobileOrEmail: string }>()
  const [field, meta] = useField(props)

  React.useEffect(() => {
    setFieldValue(props.name, mobileOrEmail.trim() !== '' && touched.mobileOrEmail && isEmail(mobileOrEmail) ? mobileOrEmail : '')
  }, [mobileOrEmail, touched.mobileOrEmail, setFieldValue, props.name])

  return (
    <>
      <input {...props} {...field} />
      {!!meta.touched && !!meta.error && <div>{meta.error}</div>}
    </>
  )
}

// REFACTOR END
interface SignInTokenPayload extends JwtPayload {
  id: string
}

const SigninForm: FC<SignInProps> = (props) => {
  const cookies = new Cookies()
  const initialValues = {
    mobileOrEmail: '',
    password: '',
    mobilePhone: 0,
    email: '',
  }
  return (
    <>
      <h1>Welcome to Kesan Diary</h1>
      <h1>Sign In</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={yup.object({
          // TODO: Implement Field Validation
          mobileOrEmail: isMobileOrEmailSchema.required('Required'),
          //TODO : Implement Password Strength, Min-Max
          password: yup.string().required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          const SignInQueryValues: SignInQuery$variables = {
            mobilePhone: values.mobilePhone || undefined,
            email: values.email || undefined,
            password: values.password,
          }
          const observable = fetchQuery(environment, SignInQuery, SignInQueryValues)
          observable.subscribe({
            complete: () => {},
            next: (value) => {
              try {
                const token: string = value.login
                const decoded = jwt_decode<SignInTokenPayload>(token)
                const expires: number = decoded?.sub ? ms(decoded?.sub) : env.JWT_EXPIRE
                cookies.set('jwt', token, {
                  httpOnly: true,
                  sameSite: true,
                  maxAge: expires,
                })
                cookies.set('uid', decoded.id, {
                  httpOnly: true,
                  sameSite: true,
                  maxAge: expires,
                })
              } catch (err) {
                if (err instanceof InvalidTokenError) console.log('Invalid Token Recieved')
              }
            },
          })
          setSubmitting(false)
        }}
      >
        <Form>
          <TextInputFromik label="Email Or Phone Number" name="mobileOrEmail" placeholder="jane@gmail.com" />
          <TextInputFromik type="password" label="Password" name="password" hidden />
          <Email hidden name="email" />
          <MobilePhone name="mobilePhone" hidden />
          <div>
            <Link className="forgotPassword" to="/forgotPassword">
              Forgot Password?
            </Link>
          </div>
          <button type="submit">Sign In</button>
        </Form>
      </Formik>
    </>
  )
}

export default SigninForm
