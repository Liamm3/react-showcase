import axios from 'axios'

import * as types from './types'

const fetchUsersStart = () => ({ type: types.FETCH_USERS_START })

const fetchUsersFailed = error => ({
  type: types.FETCH_USERS_FAILED,
  payload: error
})

const fetchUsersSucces = users => ({
  type: types.FETCH_USERS_SUCCESS,
  payload: users
})

export const fetchUsers = () => async dispatch => {
  dispatch(fetchUsersStart())
  try {
    const { data } = await axios.get('https://randomuser.me/api?results=50')
    const users = data.results.map((user, index) => ({
      ...user,
      id: index + 1
    }))
    dispatch(fetchUsersSucces(users))
  } catch (error) {
    dispatch(fetchUsersFailed(error))
  }
}

export const addUser = user => ({ type: types.ADD_USER, payload: user })
