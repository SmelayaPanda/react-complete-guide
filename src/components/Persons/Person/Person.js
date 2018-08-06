import React, {Component} from 'react'
import styles from './Person.css'

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
      <div className={styles.PersonBold}>
        <p onClick={this.props.click}>
          I'm a {this.props.name}!
          Age: {this.props.age}
        </p>
        <input type="text" onChange={this.props.changed} value={this.props.name}/>
      </div>
    )
  }
}

// const person = props => (
//   // for test ErrorBoundary
//   // const random = Math.random()
//   // if (random > 0.7) {
//   //   throw new Error('Something went wrong')
//   // }
//   <div className={styles.PersonBold}>
//     <p onClick={props.click}>
//       I'm a {props.name}!
//       Age: {props.age}
//     </p>
//     <input type="text" onChange={props.changed} value={props.name}/>
//   </div>
// )

export default Person