import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Map from '../map/map.jsx';

class BasicUser extends Component {
  constructor(props) {
    super(props);
  }

  render() {

      console.log(this, 'basic user panel')

    const { name } = this.props.userPanel.authorizationReducer.currentAuthorized;

    const registerGreeting = this.props.userPanel.authorizationReducer.currentRegister;

    return(

        <div className="authorization__module-paths-user-item">
          <h1>Hi, {registerGreeting === '' ? name : registerGreeting.name} !</h1>

          <Map/>

        </div>

    )

  }

}

const mapStateToProps = (state) => {

  return {

    userPanel: state

  }

};

export default connect ( mapStateToProps ) (BasicUser);
