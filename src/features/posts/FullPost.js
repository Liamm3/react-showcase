import { Typography } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { fetchPosts, selectPost } from './postsSlice'

export default function FullPost(props) {
  const { id } = props.match.params
  const dispatch = useDispatch()
  const post = useSelector(selectPost(id))

  useEffect(() => {
    if (!post) {
      dispatch(fetchPosts())
    }
  }, [dispatch, post])

  if (!post) {
    return <p>Loading...</p>
  }

  return (
    <>
      <Typography variant="h2">{post.title}</Typography>
      <Typography
        variant="subtitle2"
        component={Link}
        to={`/users/${post.user.id}`}
      >
        {post.user.username}
      </Typography>
      <Typography variant="body1">{post.content}</Typography>
    </>
  )
}
