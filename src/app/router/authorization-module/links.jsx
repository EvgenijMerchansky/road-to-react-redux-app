import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './../authorization-module/authorization.scss';
import { logOut } from '../../actions/login-actions/basicActions';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Links extends Component {

  render(){

      console.log(this)

    const { authorized } = this.props.stateLinks.authorizationReducer,
            admin = this.props.stateLinks.authorizationReducer.admin.authorized;

    return (

      <div className="authorization__module-links">
        <Link
          className={authorized === true ? 'authorization__module-links-default' : admin === true ? 'authorization__module-links-default' : 'authorization__module-links-active'}
          to="/signin">
            Sign In
        </Link>

        <Link
          className={authorized === true ? 'authorization__module-links-default' : admin === true ? 'authorization__module-links-default' : 'authorization__module-links-active'}
          to="/signup">
            Sign Up
        </Link>

        <Link
          className={authorized === true ? 'authorization__module-links-active' : admin === true ? 'authorization__module-links-active' : 'authorization__module-links-default'}
          onClick={() => {this.props.logOut()}}
          to="/signin">
            Sign Out
        </Link>
      </div>

    )

  }

}

const mapStateToProps = (state) => {

  return {

    stateLinks: state

  }

}

const mapDispatchToProps = (dispatch) => {

  return bindActionCreators({

    logOut

    // functions ...

  },dispatch);

}

export default connect (mapStateToProps, mapDispatchToProps) (Links);
