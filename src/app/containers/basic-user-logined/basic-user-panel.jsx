import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Map from '../map/map.jsx';

class BasicUser extends Component {
  constructor(props) {
    super(props);
    // this.onPress = this.onPress.bind(this); связать мой компонент с методом в теле класса который имеется -> onPress() { console.log('111')}
  }

  render() {

    console.log(this)

    const { name } = this.props.userPanel.authorizationReducer.currentAuthorized;

    return(

        <div className="authorization__module-paths-user-item">
          <h1>Hi, {name} !</h1>

          <Map/>

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
