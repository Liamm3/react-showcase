import { Grid, TextField, Typography, Button, Alert } from '@mui/material'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { login, selectToken, selectError } from './authSlice'

export default function Login() {
  const dispatch = useDispatch()
  const token = useSelector(selectToken)
  const error = useSelector(selectError)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  const renderAlert = () => {
    if (error) {
      return <Alert severity="error">{error.message}</Alert>
    }
  }

  const renderSuccess = () => {
    if (token) {
      return <Alert severity="success">Successfully logged in!</Alert>
    }
  }

  return (
    <>
      <Typography
        variant="h2"
        sx={{
          marginBottom: 3
        }}
      >
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid spacing={2} container>
          <Grid item xs={12} md={6}>
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              required
              fullWidth
              value={email}
              onChange={e => setEmail(e.target.value.trim())}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              required
              fullWidth
              value={password}
              onChange={e => setPassword(e.target.value.trim())}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" fullWidth variant="contained" color="success">
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
      {renderAlert()}
      {renderSuccess()}
    </>
  )
}
