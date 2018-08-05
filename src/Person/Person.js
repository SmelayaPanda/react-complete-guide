import React from 'react'
import styles from './Person.css'

const person = (props) => {
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