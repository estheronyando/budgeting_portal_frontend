import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import Cstatus from '../login/cstatus';
import DashboardList from './dashboardlist';
import { Dashsummary2 } from './dashsummary2';
import { Divider } from '@mui/material';

function Dashmain1(props) {

  const mcc=React.useContext(Cstatus)
  const{setMcname}=React.useContext(Cstatus)

  const listdiv=useRef(null)

  const scrollList = () => {
    if (listdiv.current) {
      listdiv.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  const handleClickScroll = () => {
    const element = document.getElementById('tlist');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div>
    
       <div >
       <Dashsummary2 user={mcc.mcname["user"]} user1={props.user} />  
      <br/>
       <Divider/>
       <h2 className='ml-5 mt-3'>Budget Request Console</h2>

       <DashboardList user={mcc.mcname["user"]} user1={props.user} type={"DB"} />

        <div  id="tlist">
        </div>

      </div>
    </div>
  )
}

export default Dashmain1
