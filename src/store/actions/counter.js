import {ADD, DECREMENT, INCREMENT, SUBTRACT} from "./actionTypes";

export const increment = () => ({
  type: INCREMENT
})

export const decrement = () => ({
  type: DECREMENT
})

export const add = payload => ({
  type: ADD,
  payload: payload
})

export const subtract = payload => ({
  type: SUBTRACT,
  payload: payload
})
