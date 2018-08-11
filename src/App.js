import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom'

import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      // You can have on the server only specific part of routes handled by react
      // another request can be handled by server or another file in root directory
      // <BrowserRouter basename={'/my-app'}>
      <BrowserRouter basename={'/'}>
        <div className="App">
          <Blog/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
