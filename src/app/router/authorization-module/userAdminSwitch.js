import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { done } from '../../actions/login-actions/basicActions';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class UserAdminSwitch extends Component {

  constructor(props){

    super(props);

  }

  render(){

    const { authorizedLogin, authorizedPassword, admin, currentLogin, currentPassword } = this.props.LinksState.authorizationReducer;

    return (

      <div className="form__wrapper-login-adminUser">
        <Link
          className="form__wrapper-login-adminUser-link"
          to={currentLogin == 'myAdmin' && currentPassword == '1111111' ? "/admin-panel" : authorizedLogin == true && authorizedPassword == true ? "/user-page" : "/signin"}
          onClick={() => {this.props.done(currentLogin, currentPassword)}}>
            Done
        </Link>
      </div>

    )

  }

}

const mapStateToProps = (state) => {
  return {
    LinksState: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    done
        // functions ...
  }, dispatch);

}

export default connect(mapStateToProps,mapDispatchToProps)(UserAdminSwitch);
