import PersonIcon from '@mui/icons-material/Person'
import HomeIcon from '@mui/icons-material/Home'
import LoginIcon from '@mui/icons-material/Login'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LogoutIcon from '@mui/icons-material/Logout'
import ArticleIcon from '@mui/icons-material/Article'
import { Drawer, List, Box } from '@mui/material'

import ListItemLink from './ListItemLink'
import PrivateListItemLink from './PrivateListItemLink'
import GuestListItemLink from './GuestListItemLink'

export default function Sidebar({ drawerOpen, toggleDrawer }) {
  const sidebarLinks = [
    { icon: <HomeIcon />, primary: 'Home', to: '/' },
    { icon: <PersonIcon />, primary: 'Users', to: '/users', authOnly: true },
    { icon: <ArticleIcon />, primary: 'Posts', to: '/posts', authOnly: true },
    { icon: <LoginIcon />, primary: 'Login', to: '/login', guestOnly: true },
    {
      icon: <AutoAwesomeIcon />,
      primary: 'Register',
      to: '/register',
      guestOnly: true
    },
    { icon: <LogoutIcon />, primary: 'Logout', to: '/logout', authOnly: true },
    {
      icon: <AccountCircleIcon />,
      primary: 'My Profile',
      to: '/self',
      authOnly: true
    }
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
    if (link.guestOnly) {
      return <GuestListItemLink {...props} />
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
