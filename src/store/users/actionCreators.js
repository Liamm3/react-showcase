import { gql } from '@apollo/client/core'

import * as types from './types'

const GET_ALL_USERS = gql`
  query getAllUsers {
    users {
      id
      username
      email
    }
  }
`

export const fetchUsers =
  () =>
  async (dispatch, _, { client }) => {
    dispatch(fetchUsersStart())
    try {
      const { data } = await client.query({
        query: GET_ALL_USERS
      })
      dispatch(fetchUsersSucces(data.users))
    } catch (error) {
      dispatch(fetchUsersFailed(error))
    }
  }

const fetchUsersStart = () => ({ type: types.FETCH_USERS_START })

const fetchUsersFailed = error => ({
  type: types.FETCH_USERS_FAILED,
  payload: error
})

const fetchUsersSucces = users => ({
  type: types.FETCH_USERS_SUCCESS,
  payload: users
})

export const addUser = user => ({ type: types.ADD_USER, payload: user })
