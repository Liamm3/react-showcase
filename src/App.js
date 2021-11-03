import { Switch, Route } from 'react-router-dom'

import Person from './containers/Person'
import Navbar from './components/Navbar'
import Home from './containers/Home'

const App = () => (
  <>
    <Navbar />
    <Switch>
      <Route path="/persons" component={Person} />
      <Route path="/" component={Home} />
    </Switch>
  </>
)

export default App
