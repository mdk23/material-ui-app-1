import { AccountBox, Article, DarkMode, Group, Home, Person, Settings, Storefront } from '@mui/icons-material';
import { Box, List, ListItem,ListItemButton, ListItemText,ListItemIcon, Switch } from '@mui/material';
import { spacing } from '@mui/system';
import React from 'react'

function SideBar({mode,setMode}) {
  return (
    <Box  flex='1' p={2} sx={{display:{xs:'none',sm:'block'}}}>
     <Box position='fixed'> 
     <List>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#home'>
              <ListItemIcon> <Home /> </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
    
          <ListItem disablePadding>
            <ListItemButton component='a' href='#pages'>
              <ListItemIcon> <Article /> </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component='a' href='#group'>
              <ListItemIcon> <Group/> </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component='a' href='#market'>
              <ListItemIcon> <Storefront/> </ListItemIcon>
              <ListItemText primary="Market Place" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component='a' href='#friends'>
              <ListItemIcon> <Person/> </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component='a' href='#settings'>
              <ListItemIcon> <Settings/> </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component='a' href='#profile'>
              <ListItemIcon> <AccountBox/> </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component='a' href='#profile'>
              <ListItemIcon> <DarkMode/> </ListItemIcon>
              <Switch onChange={()=>setMode(mode==='light'? 'dark': 'light')}/>
            </ListItemButton>
          </ListItem>

      </List>
     
     </Box>  
    </Box>
  )
}

export default SideBar