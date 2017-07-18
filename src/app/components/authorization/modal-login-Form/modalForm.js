import React from 'react';

import LoginInput from '../../../containers/login-form/input-login.jsx';
import PasswordInput from '../../../containers/login-form/input-password.jsx';
import DoneButton from '../../../containers/login-form/done-button.jsx';

import styles from '../../authorization/modal-login-Form/modalForm.scss';

const ModalForm = (props) => {

  return(

    <div className="form__wrapper">
        <h1>Sign In:</h1>
        <LoginInput />
        <PasswordInput />
        <DoneButton />
    </div>

  )

}

export default ModalForm;
