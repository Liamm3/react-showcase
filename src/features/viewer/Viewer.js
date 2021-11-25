import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { selectOwnUser, fetchUsers } from '../users/userSlice'

export default function Viewer() {
  const dispatch = useDispatch()
  const user = useSelector(selectOwnUser)

  useEffect(() => {
    if (!user) {
      dispatch(fetchUsers())
    }
  })

  if (!user) {
    return <p>Loading...</p>
  }

  return <h1>{user.username}</h1>
}
