import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import '../../css/style.css'
import Cstatus from '../login/cstatus';
import { Search } from '../search/search2';



export default function Dashheader(props) {
  const mcc=React.useContext(Cstatus)
  const{setMcname}=React.useContext(Cstatus)


  return (
    <Box style={{ background:"#FFF"}}  >
        <Grid container spacing={1}  sx={{ width: "100%", minHeight:30}}>
        
          
        <Grid item xs={0} sm={2} style={{margin:2}} >
        
        </Grid>
        <Grid item xs={5} sm={7} sx={{margin:1}} >
        <h1 className='mt-2 p-2'>Dashboard</h1>
        </Grid>
        <Grid item xs={5} sm={2} sx={{margin:1}} >
       
           <Search user={mcc.mcname["user"]} type={"ALL"}/>
        </Grid>
        </Grid>
            
    </Box>
  );
}