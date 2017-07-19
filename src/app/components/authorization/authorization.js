import React from 'react';
import ModalForm from './modal-login-Form/modalForm';
import RegisterForm from './modal-register-Form/modal-register-Form';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import RoutesModule from './../../router/authorization-module/routesAuthorizationModule';

const Authorization = (props) => {

  return(

    <div>
      <RoutesModule />
    </div>

  )

}

export default Authorization;
