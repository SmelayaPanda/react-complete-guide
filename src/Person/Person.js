import React from 'react'
import classes from './Person.css'

const person = (props) => {
  return (
    <div className={classes.PersonBold}>
      <p onClick={props.click}>
        I'm a {props.name}!
        Age: {props.age}
      </p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  )
}

export default person