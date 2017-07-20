import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class BasicUser extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return(

        <div className="basicUserLogined__panel">

          <h1>Basic user panel</h1>

        </div>

    )

  }

}

const mapStateToProps = (state) => {

  return {

    userPanel: state

  }

}

const mapDispatchToProps = (dispatch) => {

  return bindActionCreators({

    // functions ...

  },dispatch);

}

export default connect ( mapStateToProps, mapDispatchToProps ) (BasicUser);
