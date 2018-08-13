import * as actionTypes from './actions'
const initState = {
  counter: 0,
  results: []
}

const reducer = (state = initState, action) => {
  switch (action.type) {
  case actionTypes.INCREMENT:
    return {...state, counter: state.counter + 1}
  case actionTypes.DECREMENT:
    return {...state, counter: state.counter - 1}
  case actionTypes.ADD:
    return {...state, counter: state.counter + action.value}
  case actionTypes.SUBTRACT:
    return {...state, counter: state.counter - action.value}
  case actionTypes.STORE_RESULT:
    return {
      ...state,
      results:
          state.results.concat({
            id: new Date().getTime(),
            value: state.counter
          })
    }
  case actionTypes.DELETE_RESULT:
    return {
      ...state,
      results: state.results.filter(el => el.id !== action.payload)
    }
  default:
    return state
  }
}

export default reducer