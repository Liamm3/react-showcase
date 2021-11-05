import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Button
} from '@mui/material'

export default function UserCard({ user }) {
  return (
    <Card>
      <CardMedia component="img" image={user.picture.large} />
      <CardContent>
        <Typography>
          Name: {user.name.first} {user.name.last}
        </Typography>
        <Typography>
          Email: <a href={`mailto:${user.email}`}>{user.email}</a>
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained">Show</Button>
      </CardActions>
    </Card>
  )
}
