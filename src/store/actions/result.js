import {DELETE_RESULT, STORE_RESULT} from "./actionTypes";

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