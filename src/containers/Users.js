import { useState, useEffect } from 'react'
import { HashLoader } from 'react-spinners'
import { Typography, Grid } from '@mui/material'

import UserList from '../components/User/UserList'
import FlexContentContainer from '../components/layout/FlexContentContainer'
import UserFilter from '../components/User/UserFilter'

export default function Users() {
  const [users, setUsers] = useState(null)
  const [searchInput, setSearchInput] = useState('')
  const [filteredUsers, setFilteredUsers] = useState(null)

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch('https://randomuser.me/api/?results=50')
      const jsonResponse = await response.json()
      const jsonUsers = jsonResponse.results
      setUsers(jsonUsers)
      setFilteredUsers(jsonUsers)
    }
    setTimeout(fetchUsers, 500)
  }, [])

  const handleUserInput = e => {
    const input = e.target.value.trim()
    setSearchInput(input)
  }

  const searchUsers = e => {
    e.preventDefault()
    const filteredUsers = users.filter(user =>
      user.name.first.toLowerCase().includes(searchInput.toLowerCase())
    )
    setFilteredUsers(filteredUsers)
  }

  let center = true
  let content = <HashLoader css={{ display: 'block' }} />

  if (filteredUsers) {
    center = false
    content = (
      <Grid container rowSpacing={2}>
        <Typography variant="h2" display="h1">
          Users
        </Typography>
        <Grid item xs={12}>
          <UserFilter
            searchInput={searchInput}
            handleUserInput={handleUserInput}
            searchUsers={searchUsers}
          />
        </Grid>
        <Grid item>
          <UserList users={filteredUsers} />
        </Grid>
      </Grid>
    )
  }

  return <FlexContentContainer center={center}>{content}</FlexContentContainer>
}
