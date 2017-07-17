import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addPassword } from '../../actions/basicActions.js';

class PasswordInput extends Component {
  constructor(props) {
    super(props);

  }

  render(){

    return(
      <div className="form__wrapper-password">
        <input placeholder="Password:" type="password" ref={(input) => {this.inputSearch = input}} onChange={() => {this.props.addPassword(this.inputSearch.value)}} />
      </div>
    )

  }

}

const mapStateToProps = (state) => {
  return {
    passwordInputState: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addPassword
    // functions ...
  }, dispatch);

}

export default connect(mapStateToProps,mapDispatchToProps)(PasswordInput)
