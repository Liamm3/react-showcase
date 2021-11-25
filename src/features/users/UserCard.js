import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Button
} from '@mui/material'
import { Link } from 'react-router-dom'

export default function UserCard({ user }) {
  return (
    <Card>
      <CardMedia component="img" image="https://via.placeholder.com/150" />
      <CardContent>
        <Typography>Username: {user.username}</Typography>
        <Typography>
          Email: <a href={`mailto:${user.email}`}>{user.email}</a>
        </Typography>
      </CardContent>
      <CardActions>
        <Button component={Link} to={`/users/${user.id}`} variant="contained">
          Show
        </Button>
      </CardActions>
    </Card>
  )
}
