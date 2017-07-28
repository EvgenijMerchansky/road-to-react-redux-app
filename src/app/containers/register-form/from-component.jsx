import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from './form-errors.jsx';
import validate from './form-validation';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const SyncValidationForm = props => {

  const { handleSubmit, submitting } = props;

  console.log(props.submitSucceeded);

  const loginButtonStyleDefault = {
    display: 'none'
  };

  const loginButtonStyleActive = {
    display: 'block'
  };

  const submitSucceeded = props.submitSucceeded;

  return (
    <form onSubmit={handleSubmit} className="form__register-wrapper-form">
      <Field name="name" type="text" component={renderField} label="Name" />
      <Field name="email" type="email" component={renderField} label="Email" />
      <Field name="password" type="password" component={renderField} label="Password" />
      <Field name="rePassword" type="password" component={renderField} label="Password again" />
      <div className="form__register-wrapper-form-btn">
        <button style={submitSucceeded ? loginButtonStyleDefault : loginButtonStyleActive} type="submit" disabled={submitting}>
          Submit
        </button>
        <Link className="" style={submitSucceeded ? loginButtonStyleActive : loginButtonStyleDefault} to="/user-page">
          Login
        </Link>
      </div>
    </form>
  )

}

export default reduxForm({
  form: 'syncValidation',
  validate,
})(SyncValidationForm)
