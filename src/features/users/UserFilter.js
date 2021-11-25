import { TextField, Button, Stack } from '@mui/material'

export default function UserFilter({
  searchInput,
  handleUserInput,
  searchUsers,
  resetUsers
}) {
  return (
    <form onSubmit={searchUsers}>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Username"
          variant="outlined"
          onChange={handleUserInput}
          value={searchInput}
        />
        <Button variant="outlined" color="secondary" onClick={resetUsers}>
          Reset
        </Button>
      </Stack>
    </form>
  )
}
