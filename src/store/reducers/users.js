import * as actions from '../actions/types'
import { updateObject } from '../../util'

const intialState = {
  users: null,
  error: null,
  loading: false
}

const fetchUsersStart = state => updateObject(state, { loading: true })

const fetchUsersSucces = (state, { payload: users }) =>
  updateObject(state, { users })

const fetchUsersFailed = (state, { payload: error }) =>
  updateObject(state, { error })

const addUser = (state, { payload: user }) =>
  updateObject(state, {
    users: [...state.users, user]
  })

export default function reducer(state = intialState, action) {
  switch (action.type) {
    case actions.FETCH_USERS_START:
      return fetchUsersStart(state)
    case actions.FETCH_USERS_SUCCESS:
      return fetchUsersSucces(state, action)
    case actions.FETCH_USERS_FAILED:
      return fetchUsersFailed(state, action)
    case actions.ADD_USER:
      return addUser(state, action)
    default:
      return state
  }
}
