// You will need to import React even if you no use it
import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app!</h1>
        <Person/>
      </div>
    );
  }
}

export default App;
