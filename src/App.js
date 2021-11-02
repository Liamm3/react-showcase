import { Switch, Route } from 'react-router-dom'

import Person from './containers/Person'
import Navbar from './components/Navbar'

const App = () => (
  <>
    <Navbar />
    <Switch>
      <Route path="/" component={Person} />
    </Switch>
  </>
)

export default App
