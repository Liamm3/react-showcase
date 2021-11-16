import { Container } from '@mui/material'
import { useState } from 'react'

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Routes from './containers/Routes'

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
        <Routes />
      </Container>
    </>
  )
}

export default App
