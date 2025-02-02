import React from 'react';
import SimpleReactLightbox from 'simple-react-lightbox'
import "./components/FontawesomeIcons"
import ReactDOM from 'react-dom';
import process from "process";
import App from './App';

window.process = process;


ReactDOM.render(
  <React.Fragment>
    <SimpleReactLightbox>
      <App />
    </SimpleReactLightbox>
  </React.Fragment>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

