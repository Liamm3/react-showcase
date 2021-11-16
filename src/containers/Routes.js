import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Users from './Users'
import Home from './Home'
import UserDetail from '../components/user/UserDetail'
import Login from './Login'
import PrivateRoute from './PrivateRoute'

function Routes() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <PrivateRoute path="/users/:id" component={UserDetail} />
      <PrivateRoute path="/users" component={Users} exact />
      <Route path="/" component={Home} />
    </Switch>
  )
}

export default connect()(Routes)
