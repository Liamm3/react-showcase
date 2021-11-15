import { Grid, TextField, Typography, Button } from '@mui/material'
import { useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'

import { login } from '../store/auth'

function Login() {
  const { error, token } = useSelector(state => state.auth)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(login(email, password))
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
      {error ? error.message : null}
    </>
  )
}

export default connect()(Login)
