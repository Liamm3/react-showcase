import { Button, Stack } from '@mui/material'

import UserFilter from './UserFilter'
import UserDisplayView from './UserDisplayView'

export default function UserActions({
  searchInput,
  handleUserInput,
  resetUsers,
  toggleDataGrid
}) {
  return (
    <>
      <Stack direction="row" spacing={2}>
        <UserFilter
          searchInput={searchInput}
          handleUserInput={handleUserInput}
          resetUsers={resetUsers}
        />
        <Button variant="contained" color="success">
          Add User
        </Button>
      </Stack>
      <UserDisplayView changeDisplayView={toggleDataGrid} />
    </>
  )
}
