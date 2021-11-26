import { createSlice } from '@reduxjs/toolkit'
import { gql } from '@apollo/client'

import client from '../../app/client'

const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`

const REGISTER = gql`
  mutation register($user: RegisterUserInput!) {
    register(user: $user) {
      email
      password
    }
  }
`

const GET_VIEWER_ID = gql`
  query viewer {
    viewer {
      id
    }
  }
`

const token = localStorage.getItem('token')
const viewerId = localStorage.getItem('viewerId')

const initialState = {
  token,
  viewerId,
  loading: false,
  error: null
}

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: state => {
      state.loading = true
      state.token = null
      state.error = null
    },
    loginSuccess: (state, action) => {
      state.loading = false
      state.token = action.payload
    },
    loginFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    setViewerSuccess: (state, action) => {
      state.viewerId = action.payload
    },
    setViewerFail: (state, action) => {
      state.error = action.payload
    },
    logout: state => {
      localStorage.removeItem('token')
      localStorage.removeItem('viewerId')
      state.token = null
      state.viewerId = null
    },
    registerStart: state => {
      state.loading = true
      state.viewerId = null
      state.token = null
    },
    registerSuccess: (state, action) => {
      state.loading = false
    },
    registerFail: (state, action) => {
      state.error = action.payload
      state.loading = false
    }
  }
})

const {
  loginStart,
  loginFail,
  loginSuccess,
  setViewerSuccess,
  setViewerFail,
  registerStart,
  registerFail,
  registerSuccess
} = slice.actions
export const { logout } = slice.actions

const setViewer = () => async dispatch => {
  try {
    const { data } = await client.query({
      query: GET_VIEWER_ID
    })
    dispatch(setViewerSuccess(data.viewer.id))
    localStorage.setItem('viewerId', data.viewer.id)
  } catch (err) {
    dispatch(setViewerFail(err))
  }
}

export const register =
  (email, username, password) =>
  async (dispatch, _, { client }) => {
    dispatch(registerStart())
    try {
      const user = { email, username, password }
      await client.mutate({
        mutation: REGISTER,
        variables: { user }
      })
      dispatch(registerSuccess())
      dispatch(login(email, password))
    } catch (err) {
      console.log(err)
      dispatch(registerFail(err))
    }
  }

export const login =
  (email, password) =>
  async (dispatch, _, { client }) => {
    dispatch(loginStart())
    try {
      const { data } = await client.mutate({
        mutation: LOGIN,
        variables: {
          email,
          password
        }
      })
      dispatch(loginSuccess(data.login))
      localStorage.setItem('token', data.login)
      dispatch(setViewer())
    } catch (err) {
      dispatch(loginFail(err))
    }
  }

export const selectToken = state => state.auth.token
export const selectError = state => state.auth.error
export const selectViewerId = state => state.auth.viewerId

export default slice.reducer
