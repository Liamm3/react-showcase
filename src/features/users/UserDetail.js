import { connect, useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

import { fetchUsers, selectUser } from './userSlice'

function UserDetail(props) {
  const { id } = props.match.params
  const dispatch = useDispatch()
  const user = useSelector(selectUser(id))

  useEffect(() => {
    if (!user) {
      dispatch(fetchUsers())
    }
  }, [dispatch, user])

  if (!user) {
    return <p>Loading...</p>
  }

  return <p>{user.username}</p>
}

export default connect()(UserDetail)
