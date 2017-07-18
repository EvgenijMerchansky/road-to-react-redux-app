import React from 'react';

const renderField = ({ input, label, type, meta: { touched, error, warning }}) =>
  <div className="form__register-wrapper-form-item">
    <label>
      {label}
    </label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && ((error && <span> {error} </span>) || (warning && <span> {warning} </span>))}
    </div>
  </div>

  export default renderField;
