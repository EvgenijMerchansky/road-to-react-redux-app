import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addLogin , done } from '../../actions/login-actions/basicActions';

class LoginInput extends Component {
  constructor(props) {
    super(props);

  }

  handleSubmit(e){

    e.preventDefault()

    this.props.done(this.inputLogin.value, this.inputPassword.value);

  }

  render(){

    const { authorized, currentAuthorized, error, successfully } = this.props.loginInputState.authorizationReducer;

    return(
      <form className="form__wrapper-login">
        <input placeholder="Login:" type="text" ref={(input) => {this.inputLogin = input}} />
        <input placeholder="Password:" type="password" ref={(input) => {this.inputPassword = input}} />
        <span className={authorized == false ? 'form__wrapper-login-messageError' : 'form__wrapper-login-messageSuccessfully'}>{authorized == false ? error : successfully}</span>
        <button onClick={::this.handleSubmit}>Done</button>
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
    addLogin,
    done
        // functions ...
  }, dispatch);

}

export default connect(mapStateToProps,mapDispatchToProps)(LoginInput);
