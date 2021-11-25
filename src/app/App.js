import { Container } from '@mui/material'
import { useState } from 'react'

import Navbar from '../features/navbar/Navbar'
import Sidebar from '../features/sidebar/Sidebar'
import Routes from './Routes'

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
