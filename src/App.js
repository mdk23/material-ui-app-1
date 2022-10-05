import { Box, Button, createTheme, Fab, Stack, ThemeProvider } from "@mui/material";
import { Settings} from "@mui/icons-material";
import { theme } from "./theme";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";
import Add from "./components/Add";
import { useState } from "react";



function App() {
  const [mode,setMode]=useState('light');

  const darkTheme= createTheme({
  palette:{
    mode:mode
  } 
})
  return (
      <ThemeProvider theme={darkTheme}>
          <Box bgcolor='background.default' color='text.primary'>
            <Navbar/>
                <Stack direction='row' spacing={1} justifyContent='space-between'>
                    <SideBar  mode={mode} setMode={setMode}/>
                    <Feed/>
                    <RightBar/>
                </Stack>
              <Add/>   
          </Box>
      </ThemeProvider>
  );
}

export default App;
{/*
      <ThemeProvider theme={theme}>
        <Button color='otherColor' variant="contained" startIcon={<Settings/>}>butao</Button>
        <Button variant='contained' disabled>Custom button</Button>    
      </ThemeProvider>
      <Fab color='primary' aria-label="add">
        <Add/>
      </Fab>*/
    }