import { updateObject } from '../../util'
import initialState from './initialState'
import * as types from './types'

const loginStart = state => updateObject(state, { loading: true })

const loginSuccess = (state, { payload: token }) =>
  updateObject(state, { token, loading: false })

const loginFailed = (state, { payload: error }) =>
  updateObject(state, { error, loading: false })

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_START:
      return loginStart(state)
    case types.LOGIN_SUCCESS:
      return loginSuccess(state, action)
    case types.LOGIN_FAILED:
      return loginFailed(state, action)
    default:
      return state
  }
}
