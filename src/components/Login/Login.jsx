import React from 'react'
import { reduxForm } from 'redux-form'
import { Input, fieldCreate } from '../common/FormsControls/FormsControls'
import { required } from '../../utils/validators/validators'
import { connect } from 'react-redux'
import { login } from '../../redux/auth-reducer'
import { Redirect } from 'react-router-dom'
import s from './../common/FormsControls/FormsControls.module.css'

const LoginForm = ({ handleSubmit, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            {fieldCreate('Enter email', 'email', Input, 'input', [required])}
            {fieldCreate('Enter password', 'password', Input, 'password', [required])}
            {fieldCreate(null, 'rememberMe', Input, 'checkbox', [], 'Remember me')}
            {error && <div className={s.formSummaryError}>{error}</div>}
            <div>
                <button >Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) return <Redirect to='/profile' />

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login) 