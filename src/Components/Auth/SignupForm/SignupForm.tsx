import React, { FC, Ref, useRef } from 'react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import TextInputFromik from '../../Input/TextInputFormik/TextInputFormik'
import SelectFormik from '../../Input/SelectFormik/SelectFormik'
import CheckboxFormik from '../../Input/CheckboxFormik/CheckboxFormik'
import './SignupForm.scss'
import { useNavigate } from 'react-router-dom'
import ALL_CITIES from '../../../Models/Constant/AllCities'
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import { Country, SignupFormGraphQLQuery$variables } from './__generated__/SignupFormGraphQLQuery.graphql'
import { AllCountries } from '../../../Models/Constant/Countries.list'
import ALL_REGIONS from '../../../Models/Constant/AllRegions'
import { RelayEnvironmentProvider, useMutation, useRelayEnvironment } from 'relay-hooks'
import SignUpMutation from '../../../Queries/Auth/SignUp.graphql'
import { JwtPayload } from 'jwt-decode'
import { handleAuth } from '../helpers'
import { useCookies } from 'react-cookie'
import modernEnvironment from '../../../RelayEnvironment'

interface SignupFormProps {
  initialRef: Ref<any>
}

const InputValues = {
  firstName: '',
  lastName: '',
  mobileOrEmail: '',
  newPassword: '',
  repeatPassword: '',
  permanentAddress: '',
  region: '',
  city: '',
  country: '',
  acceptedTerms: false,
}

interface SignUpTokenPayload extends JwtPayload {
  id: string
}

export const SignupForm: FC<SignupFormProps> = (FormProps) => {
  const navigate = useNavigate()
  const environment = useRelayEnvironment()
  const [_, setCookies] = useCookies()
  const [commitMutation, isMutationInFlight] = useMutation<typeof SignUpMutation>(SignUpMutation, {}, environment)
  return (
    <>
      <Formik
        initialValues={InputValues}
        validationSchema={Yup.object({
          firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
          lastName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
          mobileOrEmail: Yup.string().email('Invalid email address.').required('Required'),
          newPassword: Yup.string().required('Required'),
          repeatPassword: Yup.string()
            .required('Required')
            .oneOf([Yup.ref('newPassword'), null], 'Passwords must match.'),
          permanentAddress: Yup.string().required('Required'),
          region: Yup.string().required('Required'),
          city: Yup.string().required('Required'),
          country: Yup.string().required('Required'),
          acceptedTerms: Yup.boolean().required('You must accept Terms and Conditions.'),
        })}
        onSubmit={(values, actions) => {
          const SignUpQueryValues: SignupFormGraphQLQuery$variables = {
            user: {
              ...values,
              country: values.country as Country,
              password: values.newPassword,
            },
          }

          commitMutation({
            variables: { SignUpQueryValues },
            disabled: { isMutationInFlight },
            onCompleted: (values) => {
              console.log(values)
              handleAuth(values, setCookies, navigate)
            },
            onError: (err) => {
              console.log(err)
            },
          })
          actions.setSubmitting(false)
        }}
      >
        {(props) => (
          <Form>
            <TextInputFromik ref={FormProps.initialRef} label="First Name" name="firstName" type="text" placeholder="Jane" />
            <TextInputFromik label="Last Name" name="lastName" type="text" placeholder="Doe" />
            <TextInputFromik label="Mobile Number or Email Address" name="mobileOrEmail" type="text" placeholder="jane@gmail.com, +923XXXXXXXX etc." />
            <TextInputFromik label="Password" name="newPassword" type="text" hidden />
            <TextInputFromik label="Repeat Password" name="repeatPassword" type="text" hidden />
            <TextInputFromik label="Address" name="permanentAddress" type="text" />
            <SelectFormik label="Region" name="region" options={ALL_REGIONS} />
            <SelectFormik label="City" name="city" options={ALL_CITIES} />
            <SelectFormik label="Country" name="country" options={AllCountries} />
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
export const SignUpFormModal = (props) => {
  const { isOpen: isOpenSignUp, onOpen: onOpenSignUp, onClose: onCloseSignUp } = useDisclosure()
  const initialRef = useRef(null)
  return (
    <>
      <button className="Title TitleAction" onClick={onOpenSignUp}>
        Sign Up
      </button>
      <Modal initialFocusRef={initialRef} isOpen={isOpenSignUp} size="sm" onClose={onCloseSignUp} isCentered>
        <ModalOverlay backdropFilter="blur(10px) hue-rotate(90deg)" bg="blackAlpha.300" />
        <ModalContent>
          <ModalHeader>Sign Up</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <RelayEnvironmentProvider environment={modernEnvironment}>
              <SignupForm initialRef={initialRef} />
            </RelayEnvironmentProvider>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
