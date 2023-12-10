import * as React from 'react';
import ReactDOM from 'react-dom/client'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Avatar, Button, Card, Divider} from '@mui/material';
import '../../css/style.css'
import MenuIcon from '@mui/icons-material/Menu';
import Cstatus from '../login/cstatus';
import logo from '../../images/saflogo2.png'
import { deepOrange, deepPurple,green } from '@mui/material/colors';
import AvatarMenu from '../menu/avatarmenu';
import Dashheader from '../dashboard/dashheader';
import Dashincident from '../budget/dashincident';
// import Dashrca from '../rca/dashrca';
// import Dashproblem from '../problem/dashproblem';
// import Dashservicerequest from '../servicerequest/Dashservicerequest';
import QuickLink from '../menu/quicklink';
// import Dashoncall from '../oncall/oncalldash';





export default function Header1(props) {

  const mcc=React.useContext(Cstatus)
  const{setMcname}=React.useContext(Cstatus)

  const[menustatus,stmenustatus]=React.useState(true)

  const handlemenu=()=>{
    const mv={menu:menustatus}
          setMcname(mv)

  }

  return (
    <Box sx={{ flexGrow: 1 , minHeight:80, background:"#FFF"}}>
        <Grid container spacing={1} className="header" sx={{ width: "100%", minHeight:30}}>
        
          
        <Grid item xs={5} sm={1} style={{margin:2}} >
        
        <img src={logo} width="124" height="31" className='mainlogo' alt='logo'/>
        </Grid>
        <Grid item xs={10} sm={8} sx={{margin:1}} id="mheader">
        
            {mcc.mcname["myroute"]==0 &&
            <Dashheader user={mcc.mcname["user"]}/>
            }
            {/*
            {mcc.mcname["myroute"]==1 &&
            <Dashincident user={mcc.mcname["user"]} user1={mcc.mcname["user"]}/>
            }
            {mcc.mcname["myroute"]==2 &&
             <Dashservicerequest user={mcc.mcname["user"]} user1={mcc.mcname["user"]}/>
            }
            {mcc.mcname["myroute"]==3 &&
             <Dashrca user={mcc.mcname["user"]} user1={mcc.mcname["user"]}/>
            }
            {mcc.mcname["myroute"]==4 &&
             <Dashproblem user={mcc.mcname["user"]} user1={mcc.mcname["user"]}/>
            }
            
            {mcc.mcname["myroute"]==6 &&
             <Dashincident user={mcc.mcname["user"]} user1={mcc.mcname["user"]}/>
            }

            {mcc.mcname["myroute"]==7 &&
             <Dashproblem user={mcc.mcname["user"]} user1={mcc.mcname["user"]}/>
            }
            {mcc.mcname["myroute"]==10 &&
             <Dashoncall user={mcc.mcname["user"]} user1={mcc.mcname["user"]}/>
            }
            {mcc.mcname["myroute"]==11 &&
             <Dashrca user={mcc.mcname["user"]} user1={mcc.mcname["user"]}/>
            } */}
           
            </Grid>
            <Grid item xs={5} sm={1} sx={{margin:1}} style={{alignItems:"right"}} >
        <QuickLink  user={mcc.mcname["user"]}/>
        
        </Grid>
        <Grid item xs={5} sm={1} sx={{margin:1}} style={{alignItems:"right"}}>
        <AvatarMenu  user={mcc.mcname["user"]}/>
        
        </Grid>
        
        </Grid>
    </Box>
  );
}