import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material'
import {Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack} from '@mui/icons-material';
import React from 'react'
import { useState } from 'react';
import person3 from '../images/person-3.jpg'

function Add() {

    const StyledModal=styled(Modal)({
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    });

    const UserBox=styled(Box)({
        display:'flex',
        alignItems:'center',
        marginBottom:'20px',
        gap:'10px'

        
    })

    const [open,setOpen]=useState(false);
  return (
    <>
      <Tooltip title="Add" sx={{position:'fixed', bottom:20,left:{xs:'calc(50% - 25px)',md:30}}} onClick={e=>setOpen(true)}> 
            <Fab color="primary" aria-label="add"> 
                <AddIcon /> 
            </Fab> 
        </Tooltip>
            
        <StyledModal open={open} onClose={e=>setOpen(false)} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
          
          <Box width={400} height={280} bgcolor='background.default' color='text.primary' p={3} borderRadius={5}>
                 <Typography variant='h6' color='gray' textAlign='center'>Create Post </Typography>
            
            <UserBox>
                 <Avatar src={person3} sx={{width:56, height:56 }}/>
                  <Typography>Simão Saborosa </Typography>
            </UserBox>
            <TextField
                sx={{width:'100%'}} 
                id='standard-multiline-static'
                multiline
                rows={3}
                placeholder="What's on your mind?"
                variant='standard'
            />
            <Stack direction='row' gap={1} mt={2} mb={3}>
                <EmojiEmotions color='primary'/>
                <Image color='secondary'/>
                <VideoCameraBack color='sucess'/>
                <PersonAdd color='error'/>
            </Stack>
            
            <ButtonGroup variant='contained' aria-label='outlined primary button group' fullWidth gap={1}>
                 <Button gap={1}>Post</Button>
                 <Button><DateRange/> </Button>
                    
            </ButtonGroup>

          </Box>
        </StyledModal>
    </>
    
  )
}

export default Add