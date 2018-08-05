import React from 'react'
import PersonCSS from './Person.css'

const person = (props) => {
  return (
    <div className={PersonCSS.Person}>
      <p onClick={props.click}>
        I'm a {props.name}!
        Age: {props.age}
      </p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  )
}

export default person