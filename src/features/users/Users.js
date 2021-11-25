import { useState, useEffect } from 'react'
import { HashLoader } from 'react-spinners'
import { Typography, Grid } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'

import {
  fetchUsers,
  selectFilteredUsers,
  setFilterSearchTerm,
  selectFilter
} from './userSlice'
import UserCardList from './UserCardList'
import UserDataGrid from './UserDataGrid'
import UserActions from './UserActions'

export default function Users() {
  const dispatch = useDispatch()
  const users = useSelector(selectFilteredUsers)
  const { searchTerm } = useSelector(selectFilter)
  const [useDataGrid, setUseDataGrid] = useState(false)

  useEffect(() => {
    if (!users) {
      dispatch(fetchUsers())
    }
  }, [dispatch, users])

  // TODO: use only loading
  if (!users) {
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

  let userList = <UserCardList users={users} />
  if (useDataGrid) {
    userList = <UserDataGrid users={users} />
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
          searchInput={searchTerm}
          handleUserInput={e =>
            dispatch(setFilterSearchTerm(e.target.value.trim()))
          }
          resetUsers={e => dispatch(setFilterSearchTerm(''))}
          toggleDataGrid={() => setUseDataGrid(!useDataGrid)}
        />
      </Grid>
      <Grid item xs={12}>
        {userList}
      </Grid>
    </Grid>
  )
}
