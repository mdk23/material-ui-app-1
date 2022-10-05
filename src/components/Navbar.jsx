import { Mail, Notifications, Pets } from '@mui/icons-material';
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import image from '../images/pexels-christina-morillo-1181519.jpg';
import React, { useState } from 'react'


const StyledToolBar=styled(Toolbar)({
    display:'flex',
    justifyContent: 'space-between'
});

const Search=styled('div')(({theme})=>({
  backgroundColor:'white',
  padding:'0 10px',
  borderRadius:theme.shape.borderRadius,
  width:'40%',
  height:'30px' 
}));

const Icons=styled(Box)((theme)=>({
    display:'flex',
    gap:'10px',
    alignItems:'center',
    
    /*[theme.breakpoints.up('sm')]:{
      display:'flex'
    }*/

}));

const UserBox=styled(Box)((theme)=>({
  display:'flex',
  gap:'20px',
  alignItems:'center'
}));


function Navbar() {
  const [open,setOpen]=useState(false);
  return (
    <AppBar position='sticky'>
        <StyledToolBar>
            
            <Typography variant='h5' sx={{display:{ xs:'none',sm:'block'}}}>Nav Bar</Typography>
            <Pets sx={{display:{xs:'block',sm:'none'}}}/>
        
            <Search>
              <InputBase placeholder='Search...'/>
            </Search>
            
            <Icons sx={{display:{ xs:'none',sm:'flex'}}}>
                <Badge badgeContent={4} max={10}color="error"> <Mail/> </Badge>
                <Badge badgeContent={4} max={10}color="error"> <Notifications/> </Badge>
                <Avatar alt="Remy Sharp" src={image} sx={{width:40, height:40}} onClick={e=>setOpen(true)}/>
            </Icons>

            <UserBox sx={{display:{ xs:'flex',sm:'none'}}} >
              <Avatar alt="Remy Sharp" src={image} sx={{width:40, height:40}}  onClick={e=>setOpen(true)}/>
              <Typography>Marla Kane</Typography>
            </UserBox>
        </StyledToolBar>

          <Menu
          id="demo-positioned-menu" aria-labelledby="demo-positioned-button"
          open={open} onClose={e=>setOpen(false)}
          anchorOrigin={{vertical: 'top',horizontal: 'right',}}
          transformOrigin={{ vertical: 'top', horizontal: 'right',}}
          >
            <MenuItem >Profile</MenuItem>
            <MenuItem >My Account</MenuItem>
            <MenuItem >Logout</MenuItem>
        </Menu>
        
    </AppBar>
  )
}

export default Navbar