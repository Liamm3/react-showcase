import { useState, useEffect } from 'react'
import { HashLoader } from 'react-spinners'
import { Typography, Grid } from '@mui/material'

import UserCardList from '../components/User/UserCardList'
import UserDataGrid from '../components/User/UserDataGrid'
import FlexContentContainer from '../components/layout/FlexContentContainer'
import UserFilter from '../components/User/UserFilter'
import UserDisplayView from '../components/User/UserDisplayView'

export default function Users() {
  const [users, setUsers] = useState(null)
  const [searchInput, setSearchInput] = useState('')
  const [filteredUsers, setFilteredUsers] = useState(null)
  const [useDataGrid, setUseDataGrid] = useState(false)

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch('https://randomuser.me/api/?results=50')
      const jsonResponse = await response.json()
      const jsonUsers = jsonResponse.results.map((user, index) => ({
        ...user,
        id: index
      }))
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

  const resetUsers = () => {
    setFilteredUsers(users)
    setSearchInput('')
  }
  let center = true
  let content = <HashLoader css={{ display: 'block' }} />
  let usersListView = <UserCardList users={filteredUsers} />

  if (useDataGrid) {
    usersListView = <UserDataGrid users={filteredUsers} />
  }

  if (filteredUsers) {
    center = false
    content = (
      <Grid container rowSpacing={2}>
        <Grid item>
          <Typography variant="h2" display="h1">
            Users
          </Typography>
        </Grid>
        <Grid item container xs={12} justifyContent="space-between">
          <UserFilter
            searchInput={searchInput}
            handleUserInput={handleUserInput}
            searchUsers={searchUsers}
            resetUsers={resetUsers}
          />
          <UserDisplayView
            changeDisplayView={() => setUseDataGrid(!useDataGrid)}
          />
        </Grid>
        <Grid item xs={12}>
          {usersListView}
        </Grid>
      </Grid>
    )
  }

  return <FlexContentContainer center={center}>{content}</FlexContentContainer>
}
