import * as actionTypes from '../actions/actionTypes'

const initState = {
  results: []
}

const reducer = (state = initState, action) => {
  switch (action.type) {
  case actionTypes.STORE_RESULT:
    return {
      ...state,
      results:
          state.results.concat({
            id: new Date().getTime(),
            value: action.payload
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