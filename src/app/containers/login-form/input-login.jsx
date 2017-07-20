import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { done, currentLogin, currentPassword } from '../../actions/login-actions/basicActions';
import UserAdminSwitch from '../../router/authorization-module/userAdminSwitch';

class LoginInput extends Component {
  constructor(props) {
    super(props);

  }

  handleSubmit = (e) => {

    e.preventDefault()
    this.props.done(this.inputLogin.value, this.inputPassword.value);

  }

  render(){

    const { authorizedLogin, authorizedPassword, error, userWithEmail } = this.props.loginInputState.authorizationReducer;

    return(
      <form className="form__wrapper-login">
        <input
          placeholder="Email:"
          type="text"
          ref={(input) => {this.inputLogin = input}}
          onChange={() => {this.props.currentLogin(this.inputLogin.value)}}
        />
        <input
          placeholder="Password:"
          type="password"
          ref={(input) => {this.inputPassword = input}}
          onChange={() => {this.props.currentPassword(this.inputPassword.value)}}
        />
        <span
          className={authorizedLogin == false || authorizedPassword == false ? 'form__wrapper-login-messageError' : 'form__wrapper-login-messageSuccessfully'}>
          {authorizedLogin == false ? error : authorizedPassword == false ? error : ''}
        </span>
        <UserAdminSwitch className="adminUser__module-link"/>
      </form>
    )

  }

}

const mapStateToProps = (state) => {
  return {
    loginInputState: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    done,
    currentLogin,
    currentPassword
        // functions ...
  }, dispatch);

}

export default connect(mapStateToProps,mapDispatchToProps)(LoginInput);
