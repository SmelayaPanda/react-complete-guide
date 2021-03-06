// You will need to import React even if you no use it
import React, {Component} from 'react';
import Radium, {StyleRoot} from 'radium'
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {id: 'djshd', name: 'Max', age: 28},
      {id: 'hgdk1', name: 'Manu', age: 29},
      {id: '138dhj', name: 'Stefanie', age: 27}
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const pIdx = this.state.persons.findIndex(p => {
      return p.id === id
    })
    const person = {...this.state.persons[pIdx]} // equal to Object.assign({}, this.state.persons[pIdx])
    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[pIdx] = person
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({
      showPersons: !doesShow
    })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice()
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }

  render() {
    const btnStyle = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      borderRadius: '5px',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let persons = null
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              key={person.id}
              age={person.age}
              name={person.name}
              changed={(event) => this.nameChangedHandler(event, person.id)}
              click={() => this.deletePersonHandler(index)}
            />
          })}
        </div>
      )
      btnStyle.backgroundColor = 'red'
      btnStyle[':hover'] = {
        backgroundColor: 'yellow',
        color: 'black'
      }
    }

    const classes = []
    if (this.state.persons.length <= 2) {
      classes.push('red')
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold')
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm a react app!</h1>
          <p className={classes.join(' ')}>This is really works</p>
          <button style={btnStyle} onClick={this.togglePersonsHandler}>Toggle persons</button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
