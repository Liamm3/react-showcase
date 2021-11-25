import { Route, useHistory } from 'react-router-dom'
import { connect, useSelector } from 'react-redux'

function PrivateRoute(props) {
  const { token } = useSelector(state => state.auth)
  const history = useHistory()
  if (token) {
    return <Route {...props} />
  }

  history.push('/login')
  return null
}

export default connect()(PrivateRoute)
