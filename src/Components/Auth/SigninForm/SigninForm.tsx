import React, { FC, Ref, useRef } from 'react'
import './Signin.scss'
import { Form, Formik, useField, useFormikContext } from 'formik'
import * as yup from 'yup'
import TextInputFromik from '../../Input/TextInputFormik/TextInputFormik'
import { Link, useNavigate } from 'react-router-dom'
import { fetchQuery } from 'relay-hooks'
import isMobilePhone from 'validator/lib/isMobilePhone'
import SignInQuery from '../../../Queries/Auth/SignIn.graphql'
import { SignInQuery$variables } from '../../../Queries/Auth/__generated__/SignInQuery.graphql'
import environment from '../../../RelayEnvironment'
import { useCookies } from 'react-cookie'
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import { handleAuth } from '../helpers'

interface SignInProps {
  initialRef: Ref<any>
}

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

export const SigninForm: FC<SignInProps> = (props) => {
  const initialValues = {
    mobileOrEmail: '',
    password: '',
    mobilePhone: 0,
    email: '',
  }
  const [cookies, setCookies] = useCookies(['jwt', 'uid'])
  const navigate = useNavigate()
  return (
    <div className="Form">
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
            next: (values) => handleAuth(values, setCookies, navigate),
          })
          setSubmitting(false)
        }}
      >
        <Form>
          <TextInputFromik ref={props.initialRef} label="Email Or Phone Number" name="mobileOrEmail" placeholder="jane@gmail.com" />
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
    </div>
  )
}

export const SigninFormModal = (props) => {
  const { isOpen: isOpenSignIn, onOpen: onOpenSignIn, onClose: onCloseSignIn } = useDisclosure()
  const initialRef = useRef(null)
  return (
    <>
      <button className="Title TitleAction" onClick={onOpenSignIn}>
        Sign In
      </button>
      <Modal initialFocusRef={initialRef} isOpen={isOpenSignIn} size="xs" onClose={onCloseSignIn} isCentered>
        <ModalOverlay backdropFilter="blur(10px) hue-rotate(90deg)" bg="blackAlpha.300" />
        <ModalContent>
          <ModalHeader>Sign In</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SigninForm initialRef={initialRef} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
