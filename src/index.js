import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios'

// global axios parameters
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN'
axios.defaults.headers.post['Content-Type'] = 'application/json'

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


// // If you may need to remove an interceptor later you can.
//
// const myInterceptor = axios.interceptors.request.use(function () {/*...*/
// });
// axios.interceptors.request.eject(myInterceptor);
// // You can add interceptors to a custom instance of axios.
//
// const instance = axios.create();
// instance.interceptors.request.use(function () {/*...*/
// });

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
