import { Switch, Route } from 'react-router-dom'

import Users from './containers/Users'
import Navbar from './components/Navbar'
import Home from './containers/Home'

const App = () => (
  <>
    <Navbar />
    <Switch>
      <Route path="/users" component={Users} />
      <Route path="/" component={Home} />
    </Switch>
  </>
)

export default App
