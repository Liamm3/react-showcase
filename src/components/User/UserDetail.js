import { connect, useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

import { fetchUsers } from '../../store/users'
import FlexContentContainer from '../layout/FlexContentContainer'

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

  return <FlexContentContainer center>{user.username}</FlexContentContainer>
}

export default connect()(UserDetail)
