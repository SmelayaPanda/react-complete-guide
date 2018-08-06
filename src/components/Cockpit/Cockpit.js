import React from 'react'
import styles from "../Cockpit/Cockpit.css";
// import Aux from './../../hoc/Aux'

const cockpit = props => {
  const pStyle = []
  let btnClass = styles.Button
  if (props.showPersons) {
    btnClass = [styles.Red, styles.Button].join(' ')
  }
  if (props.persons.length <= 2) {
    pStyle.push(styles.red)
  }
  if (props.persons.length <= 1) {
    pStyle.push(styles.bold)
  }
  // How to return multiple root elements?
  // 1. return [ <h1>...</h1>, <p>...</p>]
  // 2. wrap into <React.fragment></React.fragment>
  // 3. wrap into custom <Aux></Aux>
  const Aux = props => props.children
  return (
    <Aux>
      <h1>Hi, I'm a react app!</h1>
      <p className={pStyle.join(' ')}>This is really works</p>
      <button className={btnClass} onClick={props.clicked}>Toggle persons</button>
    </Aux>
  )
}

export default cockpit