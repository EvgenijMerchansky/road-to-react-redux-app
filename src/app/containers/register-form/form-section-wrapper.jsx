import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import SyncValidationForm from './from-component.jsx';

import { getUserValues } from '../../actions/register-actions/registerActions';

class Register extends Component {
  constructor(props) {
    super(props);
  }

  submit = (props) => {

    const checkErrors = this.props.formState.form.syncValidation.syncErrors,
          newUserData = this.props.formState.form.syncValidation.values;

    this.props.getUserValues(typeof checkErrors == 'undefined' ? newUserData : null);

  }

  render(){

    return(

      <div className="form__register-wrapper">
        <SyncValidationForm onSubmit={this.submit} />
        <span className={this.props.formState.authorizationReducer.userWithEmail == 'Successfully!' ? 'form__register-wrapper-spanAccept' : 'form__register-wrapper-spanError'}>{this.props.formState.authorizationReducer.userWithEmail}</span>
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    formState: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getUserValues
    // functions...
  },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Register);
