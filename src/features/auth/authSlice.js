import { createSlice } from '@reduxjs/toolkit'
import { gql } from '@apollo/client'
import client from '../../app/client'

const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password)
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
      state.loading = true
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
    }
  }
})

const { loginStart, loginFail, loginSuccess, setViewerSuccess, setViewerFail } =
  slice.actions
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
