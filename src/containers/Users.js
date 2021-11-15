import { useState, useEffect } from 'react'
import { HashLoader } from 'react-spinners'
import { Typography, Grid } from '@mui/material'
import { connect, useDispatch, useSelector } from 'react-redux'

import { fetchUsers } from '../store/users'
import UserCardList from '../components/user/UserCardList'
import UserDataGrid from '../components/user/UserDataGrid'
import UserActions from '../components/user/UserActions'

function Users() {
  const dispatch = useDispatch()
  const { users } = useSelector(state => state.users)
  const [searchInput, setSearchInput] = useState('')
  const [filteredUsers, setFilteredUsers] = useState(null)
  const [useDataGrid, setUseDataGrid] = useState(false)

  useEffect(() => {
    if (!users) {
      dispatch(fetchUsers())
    } else if (!filteredUsers) {
      setFilteredUsers(users)
    }
  }, [dispatch, users, filteredUsers])

  const handleUserInput = e => {
    const input = e.target.value.trim()
    setSearchInput(input)
  }

  const searchUsers = e => {
    e.preventDefault()
    const filteredUsers = users.filter(user =>
      user.username.toLowerCase().includes(searchInput.toLowerCase())
    )
    setFilteredUsers(filteredUsers)
  }

  const resetUsers = () => {
    setFilteredUsers(users)
    setSearchInput('')
  }

  // TODO: use only loading
  if (!users || !filteredUsers) {
    return (
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ height: '100%' }}
      >
        <HashLoader css={{ display: 'block' }} />
      </Grid>
    )
  }

  let userList = <UserCardList users={filteredUsers} />
  if (useDataGrid) {
    userList = <UserDataGrid users={filteredUsers} />
  }

  return (
    <Grid container spacing={2}>
      <Grid item>
        <Typography variant="h2" display="h1">
          Users
        </Typography>
      </Grid>
      <Grid item container xs={12} justifyContent="space-between">
        <UserActions
          searchInput={searchInput}
          handleUserInput={handleUserInput}
          searchUsers={searchUsers}
          resetUsers={resetUsers}
          toggleDataGrid={() => setUseDataGrid(!useDataGrid)}
        />
      </Grid>
      <Grid item xs={12}>
        {userList}
      </Grid>
    </Grid>
  )
}

export default connect()(Users)
