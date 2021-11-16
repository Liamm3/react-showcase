import PersonIcon from '@mui/icons-material/Person'
import HomeIcon from '@mui/icons-material/Home'
import LoginIcon from '@mui/icons-material/Login'
import { Drawer, List, Box } from '@mui/material'

import ListItemLink from './ListItemLink'
import PrivateListItemLink from './PrivateListItemLink'

export default function Sidebar({ drawerOpen, toggleDrawer }) {
  const sidebarLinks = [
    { icon: <HomeIcon />, primary: 'Home', to: '/' },
    { icon: <PersonIcon />, primary: 'Users', to: '/users', authOnly: true },
    { icon: <LoginIcon />, primary: 'Login', to: '/login' }
  ]

  const sidebarItems = sidebarLinks.map((link, index) => {
    const props = {
      key: link.primary + index,
      icon: link.icon,
      primary: link.primary,
      to: link.to
    }
    if (link.authOnly) {
      return <PrivateListItemLink {...props} />
    }
    return <ListItemLink {...props} />
  })

  return (
    <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer}
        onKeyDown={toggleDrawer}
      >
        <List>{sidebarItems}</List>
      </Box>
    </Drawer>
  )
}
