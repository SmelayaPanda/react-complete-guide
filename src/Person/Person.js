import React from 'react'
import Radium from 'radium'
import './Person.css'

const person = (props) => {
  let style = {
    '@media (min-width: 500px)': {
      width: '450px'
    }
  }
  return (
    <div className="Person" style={style}>
      <p onClick={props.click}>
        I'm a {props.name}!
        Age: {props.age}
      </p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  )
}

export default Radium(person)