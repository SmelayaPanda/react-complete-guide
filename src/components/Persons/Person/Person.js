import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styles from './Person.css'
import withClass from './../../../hoc/withClass'
import Aux from './../../../hoc/Aux'
import {AuthContext} from './../../../containers/App'

class Person extends Component {
  constructor(props) {
    super(props);
    this.nameInput = React.createRef()
    console.log('[Person.js] Inside Constructor', props)
  }

  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[Person.js] Inside componentDidMount');
    if (this.props.position === 0) {
      this.nameInput.current.focus()
    }
  }

  render() {
    console.log('[Person.js] Inside render');
    return (
      <Aux>
        <AuthContext.Consumer>
          {auth => auth ? <p>I'm Authenticated!</p> : null}
        </AuthContext.Consumer>
        <p onClick={this.props.click}>
          I'm a {this.props.name}!
          Age: {this.props.age}
        </p>
        <input
          ref={this.nameInput}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}/>
      </Aux>
    )
  }
}

Person.defaultProps = { // if value of props is not defined
  name: 'Anonymous'
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  age: PropTypes.number,
  changed: PropTypes.func.isRequired
}

export default withClass(Person, styles.PersonBold)