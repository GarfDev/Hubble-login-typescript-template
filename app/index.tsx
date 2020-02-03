import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { History } from 'history';
import { ConnectedRouter } from 'connected-react-router'

import App from "./containers/App/index";
import store from './store';


ReactDOM.render(
  <Provider store={store}>
      <Router>
        <App />
      </Router>
  </Provider>,
  document.getElementById("root")
);
