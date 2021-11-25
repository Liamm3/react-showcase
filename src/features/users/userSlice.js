import { createSlice } from '@reduxjs/toolkit'
import { gql } from '@apollo/client'

const GET_ALL_USERS = gql`
  query getAllUsers {
    users {
      id
      username
      email
    }
  }
`

const initialState = {
  users: null,
  error: null,
  loading: false
}

const slice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    fetchUsersStart: state => {
      state.loading = true
      state.users = null
      state.error = null
    },
    fetchUsersSuccess: (state, action) => {
      state.loading = false
      state.users = action.payload
    },
    fetchUsersFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    }
  }
})

const { fetchUsersFail, fetchUsersStart, fetchUsersSuccess } = slice.actions

export const selectUsers = state => state.users.users

export const fetchUsers =
  () =>
  async (dispatch, _, { client }) => {
    dispatch(fetchUsersStart())
    try {
      const { data } = await client.query({
        query: GET_ALL_USERS
      })
      dispatch(fetchUsersSuccess(data.users))
    } catch (err) {
      dispatch(fetchUsersFail(err))
    }
  }

export default slice.reducer
