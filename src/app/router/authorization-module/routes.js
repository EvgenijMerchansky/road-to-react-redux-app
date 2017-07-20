import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import ModalForm from './../../components/authorization/modal-login-Form/modalForm';
import RegisterForm from './../../components/authorization/modal-register-Form/modal-register-Form';
import BasicUserLogined from '../../components/basic-user-logined/basic-user-logined';
import AdminLogined from '../../components/admin-logined/admin-logined';

const Routes = (props) => {
  return (

    <div className="authorization__module-paths">
      <Route path="/signin" component={ModalForm}/>
      <Route path="/signup" component={RegisterForm}/>
      <Route path="/user-page" component={BasicUserLogined}/>
      <Route path="/admin-panel" component={AdminLogined}/>
    </div>

  )
}

export default Routes;
