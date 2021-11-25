import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Grid, TextField, Typography, Button } from '@mui/material'

import { register } from './authSlice'

export default function Register() {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(register(email, username, password))
  }

  return (
    <>
      <Typography
        variant="h2"
        sx={{
          marginBottom: 3
        }}
      >
        Register
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
              label="Username"
              type="text"
              variant="outlined"
              required
              fullWidth
              value={username}
              onChange={e => setUsername(e.target.value.trim())}
            />
          </Grid>
          <Grid item xs={12}>
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
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  )
}
