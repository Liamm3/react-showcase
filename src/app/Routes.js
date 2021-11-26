import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import PrivateRoute from './PrivateRoute'
import GuestRoute from './GuestRoute'
import Users from '../features/users/Users'
import Home from '../features/home/Home'
import UserDetail from '../features/users/UserDetail'
import Login from '../features/auth/Login'
import Logout from '../features/auth/Logout'
import Viewer from '../features/viewer/Viewer'
import Register from '../features/auth/Register'
import Posts from '../features/posts/Posts'
import FullPost from '../features/posts/FullPost'

function Routes() {
  return (
    <Switch>
      <PrivateRoute path="/logout" component={Logout} />
      <GuestRoute path="/login" component={Login} />
      <GuestRoute path="/register" component={Register} />
      <PrivateRoute path="/users/:id" component={UserDetail} />
      <PrivateRoute path="/users" component={Users} exact />
      <PrivateRoute path="/posts" component={Posts} exact />
      <PrivateRoute path="/posts/:id" component={FullPost} exact />
      <PrivateRoute path="/self" component={Viewer} exact />
      <Route path="/" component={Home} />
    </Switch>
  )
}

export default connect()(Routes)
