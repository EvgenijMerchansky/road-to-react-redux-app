import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from './form-errors.jsx';
import validate from './form-validation';

const SyncValidationForm = props => {

  const { handleSubmit, submitting } = props;

  return (
    <form onSubmit={handleSubmit} className="form__register-wrapper-form">
      <Field name="login" type="text" component={renderField} label="Login" />
      <Field name="email" type="email" component={renderField} label="Email" />
      <Field name="password" type="password" component={renderField} label="Password" />
      <Field name="rePassword" type="password" component={renderField} label="Password again" />
      <div className="form__register-wrapper-form-btn">
        <button type="submit" disabled={submitting}>
          Submit
        </button>
      </div>
    </form>
  )

}

export default reduxForm({
  form: 'syncValidation',
  validate,
})(SyncValidationForm)
