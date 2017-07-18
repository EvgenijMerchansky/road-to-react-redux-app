import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import renderField from './form-errors.jsx';
import validate from './form-validation';

import { getUserValues } from './../../actions/register-actions/registerActions';

class SyncValidationForm extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e){

    e.preventDefault();

    console.log(this);

    const checkErrors = this.props.formState.form.syncValidation.syncErrors;

    const newUserData = this.props.formState.form.syncValidation.values;

      this.props.getUserValues(typeof checkErrors == 'undefined' ? newUserData : null)

  }

  render(){

    console.log(this);


    const { handleSubmit, submitting } = this.props
    return (
      <form onSubmit={::this.handleSubmit} className="form__register-wrapper-form">
        <Field name="username" type="text" component={renderField} label="Username" />
        <Field name="email" type="email" component={renderField} label="Email" />
        <Field name="password" type="password" component={renderField} label="Password" />
        <Field name="rePassword" type="password" component={renderField} label="Password again" />
        <div>
          <button type="submit" disabled={submitting}>
            Submit
          </button>
        </div>
      </form>
    )

  }

}


const mapStateToProps = (state) => {
  return {
    formState: state
  }
}

const mapDispatchToProps = (dispatch)  => {
  return bindActionCreators({
    getUserValues
  },dispatch);
}

SyncValidationForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(SyncValidationForm);

export default reduxForm({
  form: 'syncValidation',
  validate,
})(SyncValidationForm)
