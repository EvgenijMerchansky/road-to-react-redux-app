import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class AdminPanel extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return(

        <div className="adminLogined__panel">

          <h1>Admin panel</h1>

        </div>

    )

  }

}

const mapStateToProps = (state) => {

  return {

    adminPanel: state

  }

}

const mapDispatchToProps = (dispatch) => {

  return bindActionCreators({

    // functions ...

  },dispatch);

}

export default connect ( mapStateToProps, mapDispatchToProps ) (AdminPanel);
