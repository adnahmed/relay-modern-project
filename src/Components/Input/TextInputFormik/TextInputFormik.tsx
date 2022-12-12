import { FieldHookConfig, useField } from 'formik'
import { FC } from 'react'
import './TextInputFormik.scss'

const TextInputFromik: FC<FieldHookConfig<string> & { label?: string }> = (props) => {
  const [field, meta] = useField(props)
  const { label, type, placeholder } = props
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input type={type} placeholder={placeholder} className="text-input" {...field} />
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </>
  )
}

const PasswordInputFormik: FC<FieldHookConfig<string> & { label?: string }> = (props) => {
  const [field, meta] = useField(props)
  const { label, type, placeholder } = props
  return <>label[htmlFor</>

  // (label[htmlFor={props.id || props.name}]{label}+input[type={type} placeholder={placeholder} className=text-input])
}

export default TextInputFromik
