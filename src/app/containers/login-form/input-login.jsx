import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom';

import { done } from '../../actions/login-actions/basicActions';
import LoginErrors from './login-errors';
import Successfully from './successfully-message';

class LoginInput extends Component {
  constructor(props) {
    super(props);

  }

  postLoginData = (e) => {

    e.preventDefault();
    this.props.done(this.inputLogin.value, this.inputPassword.value);

  };

  componentWillReceiveProps(nextProps){

    const identAuthorized = nextProps.loginInputState.authorizationReducer.authorized,
          isAdmin = nextProps.loginInputState.authorizationReducer.admin.authorized;

          if(identAuthorized === true) {

            this.props.push('/user-page');

          }else if(isAdmin === true){

            this.props.push('/admin-panel');

          }
  }

  render(){

      console.log(this)

    const { authorized } = this.props.loginInputState.authorizationReducer;

      console.log(authorized)

    return(
      <form className="form__wrapper-login">
        <input
          placeholder="Email:"
          type="text"
          ref={(input) => {this.inputLogin = input}}
        />

        <input
          placeholder="Password:"
          type="password"
          ref={(input) => {this.inputPassword = input}}
        />

        { !authorized ? <LoginErrors/> : authorized === true ? <Successfully/> : '' }

        <button
          className="form__wrapper-login-adminUser-link"
          onClick={::this.postLoginData}
          >
            Done
        </button>
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
  }, dispatch);

}

export default connect(mapStateToProps,mapDispatchToProps)(LoginInput);
