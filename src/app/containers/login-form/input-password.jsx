import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addPassword } from '../../actions/basicActions.js';

class PasswordInput extends Component {
  constructor(props) {
    super(props);

  }

  // test(){
  //
  //   console.log('work work work!');
  //
  // }

  render(){

    // const name = 'Jenya'

    // const some = this.props.userReducer;
    // const processed = some.map((elem, index) => {
    //
    //   const { name, surname, age } = elem;
    //
    // })

    return(
      <div className="form__wrapper-password">
        <input placeholder="Password:" type="password" ref={(input) => {this.inputSearch = input}} onChange={() => {this.props.addPassword(this.inputSearch.value)}} />
      </div>
    )

  }

}

// PasswordInput.PropTypes = {
//
//   name: PropTypes.string.isRequired
//
// }

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
