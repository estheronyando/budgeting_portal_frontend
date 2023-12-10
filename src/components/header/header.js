import * as React from 'react';
import ReactDOM from 'react-dom/client'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Card, Divider} from '@mui/material';
import '../../css/style.css'
import MenuIcon from '@mui/icons-material/Menu';
import Cstatus from '../login/cstatus';
import logo from '../../images/saflogo2.png'



export default function Header() {

  const mcc=React.useContext(Cstatus)
  const{setMcname}=React.useContext(Cstatus)

  const[menustatus,stmenustatus]=React.useState(true)

  const handlemenu=()=>{
    alert('mm')
    const mv={menu:menustatus}
          setMcname(mv)

  }

  return (
    <Box sx={{ flexGrow: 1 , height:100}}>
        <Grid container spacing={1} className="header" sx={{ width: "100%", minHeight:30}}>
        
          
        <Grid item xs={2} style={{margin:5}} >
        
        <img src={logo} width="124" height="31" className='mainlogo'/>
        </Grid>
        <Grid item xs={8} sx={{margin:1}} >
        
        </Grid>
        </Grid>
            
    </Box>
  );
}