// You will need to import React even if you no use it
import React, {Component} from 'react';
import styles from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

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
    let persons = null
    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        changed={this.nameChangedHandler}
        clicked={this.deletePersonHandler}/>
    }

    return (
      <div className={styles.App}>
        <Cockpit
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler}/>
        {persons}
      </div>
    );
  }
}

export default App;
