import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addPassword } from '../../actions/login-actions/basicActions';

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
      <div>s</div>
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
