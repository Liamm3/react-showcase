import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchPosts, selectPosts } from './postsSlice'
import PostList from './PostList'
import { Typography } from '@material-ui/core'

export default function Posts() {
  const dispatch = useDispatch()
  const posts = useSelector(selectPosts)

  useEffect(() => {
    if (!posts) {
      dispatch(fetchPosts())
    }
  }, [dispatch, posts])

  if (!posts) {
    return <p>Loading...</p>
  }

  return (
    <>
      <Typography variant="h2">Posts</Typography>
      <PostList posts={posts} />
    </>
  )
}
