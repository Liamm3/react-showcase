import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Users from '../features/users/Users'
import Home from '../features/home/Home'
import UserDetail from '../features/users/UserDetail'
import Login from '../features/auth/Login'
import PrivateRoute from './PrivateRoute'
import Viewer from '../features/viewer/Viewer'

function Routes() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <PrivateRoute path="/users/:id" component={UserDetail} />
      <PrivateRoute path="/users" component={Users} exact />
      <PrivateRoute path="/self" component={Viewer} exact />
      <Route path="/" component={Home} />
    </Switch>
  )
}

export default connect()(Routes)
