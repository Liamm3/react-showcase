import { TextField, Button, Stack } from '@mui/material'

export default function PersonFilter({
  searchInput,
  handleUserInput,
  searchUsers
}) {
  return (
    <form onSubmit={searchUsers}>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Person name"
          variant="outlined"
          onChange={handleUserInput}
          value={searchInput}
        />
        <Button variant="contained" onClick={searchUsers}>
          Search
        </Button>
      </Stack>
    </form>
  )
}
