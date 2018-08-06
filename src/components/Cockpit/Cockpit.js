import React from 'react'
import styles from "../Cockpit/Cockpit.css";

const cockpit = props => {
  const pStyle = []
  let btnClass = ''
  if (props.showPersons) {
    btnClass = styles.Red
  }
  if (props.persons.length <= 2) {
    pStyle.push(styles.red)
  }
  if (props.persons.length <= 1) {
    pStyle.push(styles.bold)
  }

  return (
    <div className={styles.Cockpit}>
      <h1>Hi, I'm a react app!</h1>
      <p className={pStyle.join(' ')}>This is really works</p>
      <button className={btnClass} onClick={props.clicked}>Toggle persons</button>
    </div>
  )
}

export default cockpit