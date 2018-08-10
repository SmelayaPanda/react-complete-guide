import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios'

axios.interceptors.request.use(request => {
  console.log(request)
  // Edit config
  return request // you always need return request in interceptors
  // otherwise you block any requests
}, error => { // request sending error (as not internet connection, but not failed request result)
  console.log(error);
  return Promise.reject(error)
})


axios.interceptors.response.use(response => {
  console.log(response)
  // Edit config
  return response // you always need return
  // otherwise you block any response
}, error => {
  console.log(error);
  return Promise.reject(error)
})


ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
