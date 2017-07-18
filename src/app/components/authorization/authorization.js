import React from 'react';
import ModalForm from './modal-login-Form/modalForm';
import RegisterForm from './modal-register-Form/modal-register-Form';

const Authorization = (props) => {

  return(

    <div>
      {/* routes */}
      <ModalForm />
      <RegisterForm />
    </div>

  )

}

export default Authorization;
