import './SelectFormik.scss'
import { FieldHookConfig, useField } from 'formik'
import { FC } from 'react'

const SelectFormik: FC<FieldHookConfig<string> & { label?: string }> = (props) => {
  const [field, meta] = useField<string>(props)
  return (
    <div>
      <label htmlFor={props.id || props.name}>{props.label}</label>
      <select {...field}>{props.children}</select>
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </div>
  )
}

export default SelectFormik
