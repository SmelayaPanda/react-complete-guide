import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styles from './Person.css'
import withClass from './../../../hoc/withClass'
import Aux from './../../../hoc/Aux'

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] Inside Constructor', props)
  }

  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[Person.js] Inside componentDidMount');
  }

  render() {
    console.log('[Person.js] Inside render');
    return (
      <Aux>
        <p onClick={this.props.click}>
          I'm a {this.props.name}!
          Age: {this.props.age}
        </p>
        <input type="text" onChange={this.props.changed} value={this.props.name}/>
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