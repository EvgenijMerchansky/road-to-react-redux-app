import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class BasicUser extends Component {
  constructor(props) {
    super(props);
    // this.onPress = this.onPress.bind(this); связать мой компонент с методом в теле класса который имеется -> onPress() { console.log('111')}
  }

  render() {

    const { name } = this.props.userPanel.authorizationReducer.currentAuthorized;

    const border = {
      border:0,
      width: '100%',
      padding: '0 0 80px 0',
      pointerEvents: 'none'
    }

    return(

        <div className="authorization__module-paths-user-item">
          <h1>Hi, {name} !</h1>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.18249950145!2d-118.69259878671039!3d34.02017966635947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos+Angeles%2C+CA%2C+USA!5e0!3m2!1sen!2sua!4v1500645348775"
            width="600"
            height="450"
            frameBorder="0"
            style={border}
            allowFullScreen>
          </iframe>

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
