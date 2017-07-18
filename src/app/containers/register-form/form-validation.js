const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Required!*'
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less!'
  }
  if (!values.email) {
    errors.email = 'Required!*'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address!'
  }
  if (!values.password) {
    errors.password = 'Required!*'
  } else if (values.password.length > 15) {
    errors.password = 'Must be 15 characters or less!'
  }
  if (!values.rePassword) {
    errors.rePassword = 'Required!*'
  } else if (values.rePassword.length > 15) {
    errors.rePassword = 'Must be 15 characters or less!'
  } else if (values.rePassword != values.password) {
    errors.rePassword = 'Passwords do not match!'
  }
  return errors
}

export default validate;
