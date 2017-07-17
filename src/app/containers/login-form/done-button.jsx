import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { done } from '../../actions/basicActions';

class DoneButton extends Component {
  constructor(props) {
    super(props);
  }

  render(){

    return (

      <div className="form__wrapper-button">
        <button onClick={() => {this.props.done()}}>Done</button>
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
