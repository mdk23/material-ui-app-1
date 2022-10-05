
import { Box} from '@mui/material'
import Post from './Post';
import React from 'react';

function Feed() {
  return (
    <Box flex='4'p={1}>
      <Post/>
      <Post/>
    </Box>
  )
}

export default Feed