import React from 'react';

import LoginInput from '../../containers/login-form/input-login.jsx';
import PasswordInput from '../../containers/login-form/input-password.jsx';
import DoneButton from '../../containers/login-form/done-button.jsx';

import styles from '../modal-Form/modalForm.scss';

const ModalForm = (props) => {

  return(

    <div className="form__wrapper" >
      <LoginInput />
      <PasswordInput />
      <DoneButton />
    </div>

  )
}

export default ModalForm;
