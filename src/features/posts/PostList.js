import { Paper, Grid, Typography, Button } from '@mui/material'

import { Link } from 'react-router-dom'

export default function PostList({ posts }) {
  return (
    <Grid container spacing={2}>
      {posts.map(post => (
        <Grid key={post.id} item xs={12} md={6}>
          <Paper
            variant="elevation"
            elevation={4}
            sx={{
              padding: 2
            }}
          >
            <Typography variant="h4">{post.title}</Typography>
            <Typography variant="subtitle2">{post.user.username}</Typography>
            <Typography variant="p">{post.content}</Typography>
            <br />
            <Button LinkComponent={Link} to={`/posts/${post.id}`}>
              Read more
            </Button>
          </Paper>
        </Grid>
      ))}
    </Grid>
  )
}
