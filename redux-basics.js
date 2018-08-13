const redux = require('redux')
const createStore = redux.createStore // createStore - function but not executed yet

const initState = {
  counter: 0
}
// Reducer
const rootReducer = (state = initState, actions) => {
  return state
}
// Store
const store = createStore(rootReducer)
console.log(store.getState());

// Dispatching Action


// Subscription