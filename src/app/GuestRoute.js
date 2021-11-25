import { Route, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { selectToken } from '../features/auth/authSlice'

export default function GuestRoute(props) {
  const token = useSelector(selectToken)
  const history = useHistory()

  if (!token) {
    return <Route {...props} />
  }

  history.push('/')
  return null
}
