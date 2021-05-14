import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from './components/store/reducer';
import App from './App';
import reportWebVitals from './reportWebVitals';
const store = createStore(reducer)
ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
