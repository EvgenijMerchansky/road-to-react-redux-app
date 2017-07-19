import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Links = (props) => {
  return (

    <div className="authorization__module-links">
      <Link to="/signin">Sign In</Link>
      <Link to="/signup">Sign Up</Link>
    </div>

  )
}

export default Links;
