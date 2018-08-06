import React from 'react'
import styles from './Person.css'

const person = (props) => {
  // for test ErrorBoundary
  // const random = Math.random()
  // if (random > 0.7) {
  //   throw new Error('Something went wrong')
  // }
  return (
    <div className={styles.PersonBold}>
      <p onClick={props.click}>
        I'm a {props.name}!
        Age: {props.age}
      </p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  )
}

export default person