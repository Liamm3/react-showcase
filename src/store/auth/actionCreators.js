import { gql } from '@apollo/client/core'

import * as types from './types'

const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`

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
    } catch (error) {
      dispatch(loginFailed(error))
    }
  }

const loginStart = () => ({ type: types.LOGIN_START })

const loginSuccess = token => ({ type: types.LOGIN_SUCCESS, payload: token })

const loginFailed = error => ({ type: types.LOGIN_FAILED, payload: error })
