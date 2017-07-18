import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { done } from '../../actions/login-actions/basicActions';

class DoneButton extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(){

    this.props.done();

  }

  render(){

    const { doneValue, error, successfully } = this.props.buttonState.authorizationReducer;

    return (

      <div className="form__wrapper-button">
        sd
      </div>

    )

  }
}

const mapStateToProps = (state) => {
  return {
    buttonState: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    done
    // functions ...

  }, dispatch);

}

export default connect(mapStateToProps,mapDispatchToProps)(DoneButton);
