import { createSlice } from '@reduxjs/toolkit'
import { gql } from '@apollo/client'

const GET_ALL_POSTS = gql`
  query getAllPosts {
    posts {
      id
      title
      content
      user {
        username
        id
      }
    }
  }
`

const initialState = {
  postList: null,
  error: null,
  loading: false
}

const slice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    fetchPostsStart: state => {
      state.loading = true
      state.error = null
      state.postList = null
    },
    fetchPostsSuccess: (state, action) => {
      state.loading = false
      state.postList = action.payload
    },
    fetchPostsFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    }
  }
})

const { fetchPostsStart, fetchPostsSuccess, fetchPostsFail } = slice.actions

export const fetchPosts =
  () =>
  async (dispatch, _, { client }) => {
    dispatch(fetchPostsStart())
    try {
      const { data } = await client.query({
        query: GET_ALL_POSTS
      })
      dispatch(fetchPostsSuccess(data.posts))
    } catch (err) {
      dispatch(fetchPostsFail(err))
    }
  }

export const selectPosts = state => state.posts.postList
export const selectPost = id => state => {
  const { postList } = state.posts
  if (postList) {
    return postList.find(post => post.id === id)
  }
}

export default slice.reducer
