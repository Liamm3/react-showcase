import { Switch, Route } from 'react-router-dom'
import { useState } from 'react'

import Users from './containers/Users'
import Navbar from './components/Navbar'
import Home from './containers/Home'
import Sidebar from './components/Sidebar'

function App() {
  const [drawerOpen, setDrawerOpen] = useState()

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen)
  }

  return (
    <>
      <Navbar toggleDrawer={toggleDrawer} />
      <Sidebar toggleDrawer={toggleDrawer} drawerOpen={drawerOpen} />
      <Switch>
        <Route path="/users" component={Users} />
        <Route path="/" component={Home} />
      </Switch>
    </>
  )
}

export default App
