import React from 'react'
import s from './FormsControls.module.css'
import { Field } from 'redux-form'

const FormControl = ({ input, meta: {touched, error}, children }) => {
    const hasError = touched && error
    return <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
        <div>
            {children}
        </div>
        {hasError && <span className={s.errorText}>{error}</span>}
    </div>
}

export const Textarea = (props) => {

    const { input, meta, child, ...restProps } = props

    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>

}

export const Input = (props) => {
    const { input, meta, child, ...restProps } = props

    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}

export const fieldCreate = (placeholder, name, component, type, validate, text = '' ) => {
    return <div>
    <Field placeholder={placeholder} name={name} component={component} 
        validate={validate} type={type} />{text}
</div>
}