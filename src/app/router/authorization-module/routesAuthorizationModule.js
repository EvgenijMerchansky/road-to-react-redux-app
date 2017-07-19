import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import styles from './authorization.scss';

import Links from './links';
import Routes from './routes';

const RoutesModule = (props) => {

  return(

    <Router>
      <div className="authorization__module">
        <Links/>
        <Routes/>
      </div>
    </Router>

  )

}

export default RoutesModule;
