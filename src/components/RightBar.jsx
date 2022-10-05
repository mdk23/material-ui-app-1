import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'
import person1 from '../images/person-1.jpg'
import person2 from '../images/person-2.jpg'
import person3 from '../images/person-3.jpg'
import person4 from '../images/person-4.jpg'
import person5 from '../images/person-5.jpg'

import image1 from '../images/image 1.jpg'
import image2 from '../images/image 2.jpg'
import image3 from '../images/image 3.jpg'
import image4 from '../images/image 4.jpg'
import image5 from '../images/image 5.jpg'
import image6 from '../images/image 6.jpg'

function RightBar() {
  return (
    <Box  flex='2' p={2} sx={{display:{xs:'none',sm:'block'}}}>
        <Box position='fixed'>
            <Typography variant='h6' mt={1} mb={2}>Online Friends</Typography>

            <AvatarGroup max={5} sx={{marginRight: 10}}>
                <Avatar alt="Remy Sharp" src={person1} sx={{ width: 56, height: 56 }}/>
                <Avatar alt="Travis Howard" src={person2}sx={{ width: 56, height: 56 }}/>
                <Avatar alt="Cindy Baker" src={person3}sx={{ width: 56, height: 56 }}/>
                <Avatar alt="Agnes Walker" src={person4}sx={{ width: 56, height: 56 }}/>
                <Avatar alt="Trevor Henderson" src={person5}sx={{ width: 56, height: 56 }}/>
                <Avatar alt="Travis Howard" src={person2}sx={{ width: 56, height: 56 }}/>

            </AvatarGroup>

            <Typography variant='h6' mt={2} mb={2}>Latest Photos</Typography>

            <ImageList cols={3} sx={{ width: '100%', height:'10%', maxHeight:250, paddingRight: 1 }} >
              <ImageListItem> <img src={image1}/> </ImageListItem>
              <ImageListItem> <img src={image2}/> </ImageListItem>
              <ImageListItem> <img src={image3}/> </ImageListItem>
            
              
            </ImageList>

            <Typography variant='h6' mt={2} mb={2}>Latest Conversions</Typography>

            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar> <Avatar alt="Remy Sharp" src={person5} /> </ListItemAvatar>
                  <ListItemText
                    primary="Brunch this weekend?"
                    secondary={
                      <React.Fragment>
                        <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                          Ali Connors
                        </Typography>
                        {" — I'll be in your neighborhood doing errands this…"}
                      </React.Fragment>
                    }
                  />
                </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar> <Avatar alt="Travis Howard" src={person4}/> </ListItemAvatar>
                <ListItemText
                  primary="Summer BBQ"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                        to Scott, Alex, Jennifer
                      </Typography> {" — Wish I could come, but I'm out of town this…"} </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src={person2}/>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Oui Oui"
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                          Sandra Adams
                        </Typography>
                        {' — Do you have Paris recommendations? Have you ever…'}
                      </React.Fragment>
                    }
                  />
                </ListItem>
            </List> 


        </Box>
    </Box>
  )
}

export default RightBar
