import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import image from '../images/pexels-engin-akyurt-1487511.jpg';

import React from 'react'

function Post() {
  return (
    <Card sx={{margin:4}}>
        <CardHeader
          avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">R</Avatar>}
          action={<IconButton aria-label="settings"> <MoreVert /> </IconButton>}
          title="Marla Kane"
          subheader="September 14, 2016"
        />
      <CardMedia component="img" height="20%" image={image} alt="Paella dish"/>
      
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      
      <CardActions disableSpacing>
        <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:'red'}} />}  />
        <IconButton aria-label="share"> <Share /> </IconButton>
      </CardActions>
      
    </Card>

  )
}

export default Post
