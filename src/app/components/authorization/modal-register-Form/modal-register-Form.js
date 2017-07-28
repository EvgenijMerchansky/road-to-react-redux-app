import React from 'react';
import Register from '../../../containers/register-form/form-section-wrapper.jsx';
import styles from './modal-register-Form.scss';

const RegisterForm = (props) => {

  return(

    <div className="form__register">
      <h1>Sign Up:</h1>
      <Register />
    </div>

  )

}

export default RegisterForm;
