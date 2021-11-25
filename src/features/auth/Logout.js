import { Button, Typography } from '@mui/material'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'

import { logout } from './authSlice'

export default function Logout() {
  const history = useHistory()
  const dispatch = useDispatch()

  return (
    <>
      <Typography variant="h2">Logout</Typography>
      <p>Are you sure you want to logout?</p>
      <Button
        variant="contained"
        color="error"
        onClick={() => {
          dispatch(logout())
          history.push('/')
        }}
      >
        Logout
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => history.goBack()}
      >
        Go back
      </Button>
    </>
  )
}
