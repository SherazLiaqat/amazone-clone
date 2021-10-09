import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reducer, { initialState } from "../src/Components/Contextapi/Reducer";
import { StateProvider } from "../src/Components/Contextapi/StateProvider";
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


