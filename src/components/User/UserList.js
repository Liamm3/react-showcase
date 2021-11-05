import UserCard from './UserCard'
import Grid from '@mui/material/Grid'

export default function UserList({ users }) {
  const userList = users.map((user, index) => (
    <Grid key={index} item xs={12} sm={6} md={6} lg={2}>
      <UserCard user={user} />
    </Grid>
  ))

  return (
    <Grid container spacing={2}>
      {userList}
    </Grid>
  )
}
