import { Route, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { selectToken } from '../features/auth/authSlice'

export default function PrivateRoute(props) {
  const token = useSelector(selectToken)
  const history = useHistory()

  if (token) {
    return <Route {...props} />
  }

  history.push('/login')
  return null
}
