// You will need to import React even if you no use it
import React, {PureComponent} from 'react';
import styles from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import withClass from "../hoc/withClass";

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props)
    this.state = {
      persons: [
        {id: 'djshd', name: 'Max', age: 28},
        {id: 'hgdk1', name: 'Manu', age: 29},
        {id: '138dhj', name: 'Stefanie', age: 27}
      ],
      showPersons: false
    }
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount');
  }


  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE App.js] Inside componentWillReceiveProps', nextProps);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
  //   // Shallow check
  //   return nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] Inside componentDidUpdate');
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
    console.log('[App.js] Inside render');
    let persons = null
    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        changed={this.nameChangedHandler}
        clicked={this.deletePersonHandler}/>
    }

    return (
      <React.Fragment>
        <button onClick={() => this.setState({showPersons: true})}>Show Persons
        </button>
        <Cockpit
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler}/>
        {persons}
      </React.Fragment>
    );
  }
}

export default withClass(App, styles.App);
