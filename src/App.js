// You will need to import React even if you no use it
import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stefanie', age: 27}
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 28},
        {name: 'Manu', age: 29},
        {name: 'Stefanie', age: 26}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Max', age: 28},
        {name: event.target.value, age: 29},
        {name: 'Stefanie', age: 26}
      ]
    })
  }

  render() {
    const btnStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      borderRadius: '5px',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, I'm a react app!</h1>
        <button style={btnStyle} onClick={this.switchNameHandler.bind(this, 'Panda')}>Switch name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Zebra')}
          changed={this.nameChangedHandler}>
          Some info
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}>
          Some info
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}>
          Some info
        </Person>
      </div>
    );
  }
}

export default App;
