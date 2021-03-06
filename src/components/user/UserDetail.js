import { connect, useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

import { fetchUsers } from '../../store/users'

function UserDetail(props) {
  const dispatch = useDispatch()
  const { users } = useSelector(state => state.users)
  useEffect(() => {
    if (!users) {
      dispatch(fetchUsers())
    }
  }, [dispatch, users])

  if (!users) {
    return <p>Loading...</p>
  }

  const { id } = props.match.params
  const user = users.find(user => `${user.id}` === id)

  return <p>{user.username}</p>
}

export default connect()(UserDetail)
