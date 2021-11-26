import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import userSlice from '../features/users/userSlice'
import authSlice from '../features/auth/authSlice'
import postsSlice from '../features/posts/postsSlice'
import client from './client'

const store = configureStore({
  reducer: {
    users: userSlice,
    auth: authSlice,
    posts: postsSlice
  },
  middleware: [thunk.withExtraArgument({ client })]
})

export default store
