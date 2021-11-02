import PersonIcon from '@mui/icons-material/Person'
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box
} from '@mui/material'

export default function Sidebar({ drawerOpen, toggleDrawer }) {
  return (
    <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer}
        onKeyDown={toggleDrawer}
      >
        <List>
          <ListItem button>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Persons" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  )
}
