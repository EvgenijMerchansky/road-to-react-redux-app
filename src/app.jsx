import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import store from './store';
import styles from './app.scss';

import Authorization from './app/components/authorization/authorization';

function App(props){

  return(

    <div>

      <Authorization className="form" />

    </div>

  )

}



ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,document.getElementById('content')
);
