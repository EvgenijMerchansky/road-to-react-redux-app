import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addLogin } from '../../actions/basicActions.js';

class LoginInput extends Component {
  constructor(props) {
    super(props);

  }

  render(){

    return(
      <div className="form__wrapper-login">
        <input placeholder="Login:" type="text" ref={(input) => {this.inputSearch = input}} onChange={() => {this.props.addLogin(this.inputSearch.value)}} />
      </div>
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
    addLogin
    // functions ...
  }, dispatch);

}

export default connect(mapStateToProps,mapDispatchToProps)(LoginInput);
