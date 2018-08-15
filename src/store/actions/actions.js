export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const ADD = 'ADD'
export const SUBTRACT = 'SUBTRACT'
export const STORE_RESULT = 'STORE_RESULT'
export const DELETE_RESULT = 'DELETE_RESULT'

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


export const saveResult = payload => ({
  type: STORE_RESULT,
  payload: payload
})

export const storeResult = payload => dispatch => {
  setTimeout(() => dispatch(saveResult(payload)), 2000)
}

export const deleteResult = payload => ({
  type: DELETE_RESULT,
  payload: payload
})