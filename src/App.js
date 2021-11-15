import { Switch, Route } from 'react-router-dom'
import { Container } from '@mui/material'
import { useState } from 'react'

import Users from './containers/Users'
import Navbar from './components/Navbar'
import Home from './containers/Home'
import Sidebar from './components/Sidebar'
import UserDetail from './components/user/UserDetail'
import Login from './containers/Login'

function App() {
  const [drawerOpen, setDrawerOpen] = useState()

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen)
  }

  return (
    <>
      <Navbar toggleDrawer={toggleDrawer} />
      <Sidebar toggleDrawer={toggleDrawer} drawerOpen={drawerOpen} />
      <Container style={{ paddingTop: '6rem', height: '100%' }}>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/users/:id" component={UserDetail} />
          <Route path="/users" component={Users} exact />
          <Route path="/" component={Home} />
        </Switch>
      </Container>
    </>
  )
}

export default App
