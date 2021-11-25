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
  loading: false,
  filter: {
    searchTerm: ''
  }
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
    },
    setFilterSearchTerm: (state, action) => {
      state.filter.searchTerm = action.payload
    }
  }
})

const { fetchUsersFail, fetchUsersStart, fetchUsersSuccess } = slice.actions
export const { setFilterSearchTerm } = slice.actions

export const selectUsers = state => state.users.users
export const selectFilteredUsers = state => {
  const { users, filter } = state.users
  const { searchTerm } = filter
  if (users) {
    return users.filter(user =>
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }
}
export const selectFilter = state => state.users.filter
export const selectUser = id => state => {
  const { users } = state.users
  if (users) {
    return users.find(user => user.id === id)
  }
}
export const selectOwnUser = state => {
  const { viewerId } = state.auth
  const { users } = state.users
  if (users) {
    return users.find(user => user.id === viewerId)
  }
}

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
