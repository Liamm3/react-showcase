import * as actions from './types'
import { updateObject } from '../../util'
import initialState from './initialState'

const fetchUsersStart = state => updateObject(state, { loading: true })

const fetchUsersSuccess = (state, { payload: users }) =>
  updateObject(state, { users, loading: false })

const fetchUsersFailed = (state, { payload: error }) =>
  updateObject(state, { error, loading: false })

const addUser = (state, { payload: user }) =>
  updateObject(state, {
    users: [...state.users, user]
  })

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_USERS_START:
      return fetchUsersStart(state)
    case actions.FETCH_USERS_SUCCESS:
      return fetchUsersSuccess(state, action)
    case actions.FETCH_USERS_FAILED:
      return fetchUsersFailed(state, action)
    case actions.ADD_USER:
      return addUser(state, action)
    default:
      return state
  }
}
