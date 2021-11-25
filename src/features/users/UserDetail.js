import { connect, useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

import { fetchUsers, selectUsers, selectUser } from './userSlice'

function UserDetail(props) {
  const { id } = props.match.params
  const dispatch = useDispatch()
  const users = useSelector(selectUsers)
  const user = useSelector(selectUser(id))

  console.log(user)

  useEffect(() => {
    if (!users) {
      dispatch(fetchUsers())
    }
  }, [dispatch, users])

  if (!users) {
    return <p>Loading...</p>
  }

  return <p>{user.username}</p>
}

export default connect()(UserDetail)
