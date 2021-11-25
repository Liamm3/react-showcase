import { createSlice } from '@reduxjs/toolkit'
import { gql } from '@apollo/client'

const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`

const initialState = {
  token: null,
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
    }
  }
})

const { loginStart, loginFail, loginSuccess } = slice.actions

export const login =
  (email, password) =>
  async (dispatch, _, { client }) => {
    dispatch(loginStart())
    console.log(password)
    try {
      const { data } = await client.mutate({
        mutation: LOGIN,
        variables: {
          email,
          password
        }
      })
      dispatch(loginSuccess(data.login))
    } catch (err) {
      dispatch(loginFail(err))
    }
  }

export const selectToken = state => state.auth.token
export const selectError = state => state.auth.error

export default slice.reducer
