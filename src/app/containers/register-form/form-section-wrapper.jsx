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

  submit = (e) => {
    e.preventDefault()

    console.log('dadadada')

  }

  render(){

    // console.log(this);

    return(

      <div className="form__register-wrapper">
        <SyncValidationForm onSubmit={this.submit}/>
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
    // functions...
  },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Register);
