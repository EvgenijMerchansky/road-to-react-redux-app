import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import store from './store';

import ModalForm from './app/components/modal-Form/modalForm';

function App(props){

  return(

    <div>

      <ModalForm className="form" />

    </div>

  )

}



ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,document.getElementById('content')
);
