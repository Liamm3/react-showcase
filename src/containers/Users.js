import { useState, useEffect } from 'react'
import { HashLoader } from 'react-spinners'
import { Typography, Grid } from '@mui/material'
import { connect, useDispatch, useSelector } from 'react-redux'

import { fetchUsers } from '../store/actions/users'
import UserCardList from '../components/User/UserCardList'
import UserDataGrid from '../components/User/UserDataGrid'
import FlexContentContainer from '../components/layout/FlexContentContainer'
import UserActions from '../components/User/UserActions'

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
          <UserActions
            searchInput={searchInput}
            handleUserInput={handleUserInput}
            searchUsers={searchUsers}
            resetUsers={resetUsers}
            toggleDataGrid={() => setUseDataGrid(!useDataGrid)}
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

export default connect()(Users)
