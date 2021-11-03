import { Card, CardContent, CardMedia, Typography } from '@mui/material'

export default function PersonCard({ user }) {
  return (
    <Card>
      <CardMedia component="img" image={user.picture.large} />
      <CardContent>
        <Typography>
          {user.name.first} {user.name.last}
        </Typography>
      </CardContent>
    </Card>
  )
}
