import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client'
import { FaBars, FaExclamationTriangle, FaPhoneSquare, FaEye, FaTimes,FaAngleLeft,FaAngleDoubleRight,FaRegClipboard,FaWrench,FaDashcube,faar,FaAngleDoubleLeft } from 'react-icons/fa';
import Cstatus from '../login/cstatus';
import { Sidebar,Menu, MenuItem, useProSidebar, SubMenu } from "react-pro-sidebar";
import Redbar1 from "./Redbar1";
import axios from 'axios';
 
 
const SideMenu3 = (props) => {
  const [isOpen, setIsOpen] = useState(false);
 
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
 
  const mcc=React.useContext(Cstatus)
  const{setMcname}=React.useContext(Cstatus)
 
  const closemenu=()=>{
    setIsOpen(false);
  }
 
 
  useEffect(()=>{

    const interval = setInterval(() => {
     }, 150000);
     return () => clearInterval(interval);
  },[])
 
    const handleexit=()=>{
      const mv={ statu: false, user:'', login:true}
        setMcname(mv)
 
  }
 
 
  const handledash=()=>{
    toggleMenu()
    const mv={ statu: mcc.mcname["statu"], menu: mcc.mcname["menu"], company: mcc.mcname["company"], login:mcc.mcname["login"],user:mcc.mcname["user"], manager: mcc.mcname["managerstatus"], admin:mcc.mcname["adminstatus"], myroute:0,type:mcc.mcname["type"], dislist: true, data:mcc.mcname["data"]}
    setMcname(mv)
 
 
  }
 
const handledash1=()=>{
  const mv={ statu: mcc.mcname["statu"], menu: mcc.mcname["menu"], company: mcc.mcname["company"], login:mcc.mcname["login"],user:mcc.mcname["user"], manager: mcc.mcname["managerstatus"], admin:mcc.mcname["adminstatus"], myroute:0, incidentno:'0',type:mcc.mcname["type"], dislist: true, data:mcc.mcname["data"],lview:true}
    setMcname(mv)
 
//     root.render(
//         <React.StrictMode>
//             <Dashheader user={mcc.mcname["user"]}/>
//         </React.StrictMode>,
//     );
// const root1=ReactDOM.createRoot(document.getElementById('dash'));
//     root1.render(
//         <React.StrictMode>
//             <Dashmain1 user={mcc.mcname["user"]} user1={props.user}/>
//         </React.StrictMode>,
//     );
 
 
  }
  const handlebudget=()=>{
    toggleMenu() 
    const mv={ statu: mcc.mcname["statu"], menu: mcc.mcname["menu"], company: mcc.mcname["company"], login:mcc.mcname["login"],user:mcc.mcname["user"], manager: mcc.mcname["managerstatus"], admin:mcc.mcname["adminstatus"], myroute:1, incidentno:'0',type:mcc.mcname["type"], dislist: true, data:mcc.mcname["data"]}
    setMcname(mv)

}
 
const handlebudget1=()=>{
  const mv={ statu: mcc.mcname["statu"], menu: mcc.mcname["menu"], company: mcc.mcname["company"], login:mcc.mcname["login"],user:mcc.mcname["user"], manager: mcc.mcname["managerstatus"], admin:mcc.mcname["adminstatus"], myroute:1,type:mcc.mcname["type"], dislist: true, data:mcc.mcname["data"]}
  setMcname(mv)

}
 
 
 
  return (
<div className='mydiv z-50' onMouseLeave={closemenu}>
<div className="fixed inset-y-0 left-0 flex flex-col items-rigth bg-green-700 text-white h-screen w-16">
<div
          className="text-white cursor-pointer p-4 right-0"

>
<button
        className="fixed   top-5 mt-2 left-0 transform -translate-y-1/2 flex items-center justify-center p-2 bg-red-800 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-gray-600 z-50"
        onClick={toggleMenu}
>
        {isOpen ? (
<FaAngleDoubleLeft className="w-6 h-6 text-white" />
        ) : (
<FaAngleDoubleRight className="w-6 h-6 text-white" />
        )}
</button>
<div>
<div className='text-white hover:text-black mt-10' onClick={handledash1}>
<FaDashcube 
      icon="fa-solid fa-coffee" 
      type="button"
      className="fa-2x text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
      data-te-toggle="tooltip"
      data-te-html="true"
      data-te-ripple-init
      data-te-ripple-color="light"
      title="Dash Board"
      onMouseOver={({ target }) => (target.style.color = "red")}
      onMouseOut={({ target }) => (target.style.color = "white")}
      />
</div>
<div className='text-white hover:text-black mt-10' onClick={handlebudget1}>
<FaWrench 
      icon="fa-solid fa-coffee"
      type="button"
      className="fa-2x text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
      data-te-toggle="tooltip"
      data-te-html="true"
      data-te-ripple-init
      data-te-ripple-color="light"
      title="Budget Management"
      onMouseOver={({ target }) => (target.style.color = "red")}
      onMouseOut={({ target }) => (target.style.color = "white")}
      />
</div>
</div>

</div>

 
        
</div>
<div
        className={`fixed inset-y-0 left-0 bg-green-700   w-64 p-4 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
 
      >
<button
        className="fixed top-5 mt-2 left-0 transform -translate-y-1/2 flex items-center justify-center p-2 bg-red-800 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-gray-600 z-50"
        onClick={toggleMenu}
>
        {isOpen ? (
<FaAngleDoubleLeft className="w-6 h-6 text-white" />
        ) : (
<FaAngleDoubleRight className="w-6 h-6 text-white" />
        )}
</button>
<Menu >
<div className='text-white hover:text-black' onClick={handledash1}>
<MenuItem icon={<FaDashcube icon="fa-solid fa-coffee" onMouseOver={({ target }) => (target.style.color = "red")}
      onMouseOut={({ target }) => (target.style.color = "white")} />} className="bg-yello-900" onClick={handledash}>Dashboard</MenuItem>
</div>
<Redbar1 />
<div className='text-white hover:text-black' onClick={handlebudget1}>
<MenuItem icon={<FaWrench icon="fa-solid fa-coffee" onMouseOver={({ target }) => (target.style.color = "red")}
      onMouseOut={({ target }) => (target.style.color = "white")} />} onClick={handlebudget}>Budget</MenuItem>
</div>
          {/* FaExclamationTriangle */}
</Menu>
</div>
</div>
  );
};
 
export default SideMenu3;
 