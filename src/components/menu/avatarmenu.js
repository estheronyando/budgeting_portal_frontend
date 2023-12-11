import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { HiChevronDown } from 'react-icons/hi';
import { Avatar, Button, Card, Divider} from '@mui/material';
import { deepOrange, deepPurple,green } from '@mui/material/colors';
import Cstatus from '../login/cstatus';
import axios from 'axios';
 
const AvatarMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const mcc=React.useContext(Cstatus)
  const{setMcname}=React.useContext(Cstatus)
 
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
 
  const handleexit=()=>{
    const mv={ statu: false, user:'', login:true}
      setMcname(mv)
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      localStorage.removeItem('logtime')
      localStorage.removeItem('logtime')
      localStorage.removeItem('user')
      localStorage.removeItem('manager')
      localStorage.removeItem('admin')
      localStorage.removeItem('bearer')

 
 
}
let data = JSON.stringify({
  "adUsername": "MctdRVE9pyClSJ3eSgBoiQ=="
});
 
 
const enctypt=()=>{

 
  
 
}
 
const handlenewbudget=()=>{
  const mv={ statu: mcc.mcname["statu"], menu: mcc.mcname["menu"], company: mcc.mcname["company"], login:mcc.mcname["login"],user:mcc.mcname["user"], manager: mcc.mcname["managerstatus"], admin:mcc.mcname["adminstatus"], myroute:6, incidentno: ''}
  setMcname(mv)
 
}
 
 
  return (
<div className="relative" >

<Avatar  onClick={toggleDropdown} sx={{ bgcolor: deepPurple[500] }}  className='mainavatar p-5 mt-3'>{props.user.substr(0,2).toUpperCase()}</Avatar>
 
      {isOpen && (
<div className="absolute right-0 mt-2 w-48 bg-green-500 text-white-800 rounded-md shadow-lg py-2 z-10 " onMouseLeave={toggleDropdown}>
<a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
>
            Profile
</a>
<a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            onClick={enctypt}
>
            Settings
</a>
<Divider />
<a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            onClick={handleexit}
>
            Logout
</a>
</div>
      )}
</div>
  );
};
 
export default AvatarMenu;