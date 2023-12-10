import * as React from 'react';
import Grid from '@mui/material/Grid';
import '../../css/style.css'
import Header from '../header/header';
import Cstatus from '../login/cstatus';
import Login from '../login/login';
import Header1 from '../header/header1';
import Dashmain1 from './dashmain1';
import SideMenu3 from '../menu/sidemenu3';
import Newincident from '../budget/newincident';



export default function Dash(props) {
    const mcc=React.useContext(Cstatus)
    const{setMcname}=React.useContext(Cstatus)

    const[myroute,setmyroute]=React.useState(localStorage.getItem('myroute'))    

    const handlestatus=()=>{
        const d = new Date();
        const d1 = new Date(localStorage.getItem('logtime'));
        let time = d.getTime();
        let time1 = d1.getTime();
        let td=(time-time1)/(1000)
        var tdiff=parseInt(td)/(60)
        if(tdiff>30){
          handleexit()
        }
        else{
          let tt=new Date();
          localStorage.setItem('logtime', tt)
        }
    }

    const handleexit=()=>{
      const mv={ statu: false, user:'', login:true}
        setMcname(mv)
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        localStorage.removeItem('logtime')
        localStorage.removeItem('user')
        localStorage.removeItem('manager')
        localStorage.removeItem('admin')
        
  }

  return (
        <div>
             {mcc.mcname["login"] ?
    <div id="mdash1">
        <Header />
        <Login />
       
      </div>: 
            <div onClick={handlestatus}>
                <div id='headd'>
                <Header1 />
                </div>
                <Grid container spacing={1} sx={{ marginTop:2 }}>
                     <Grid item xs={1}>
                    <div id="smenu"></div>
                    <SideMenu3/>
                    </Grid>
                    
                    <Grid item xs={10} >
                    <div id="dash1">
                    {mcc.mcname["myroute"]==0 &&
                    <Dashmain1/>}
                    {mcc.mcname["myroute"]==6 &&
                    <Newincident user={mcc.mcname["user"]} user1={mcc.mcname["user"]}/>}

                    </div>
                    
                    </Grid> 
                    
                </Grid>
           </div>}
      </div>
  );
}