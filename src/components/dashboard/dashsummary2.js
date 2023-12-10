import React, { useEffect } from 'react';
import { useState } from 'react';
import ReactDOM  from 'react-dom/client';
import {Container,TextField,Button,Grid,Box,CardActionArea,Typography,Link,Paper,Avatar} from '@mui/material';
import Cstatus from '../login/cstatus';
import axios from 'axios';


export function Dashsummary2(props) {
 const[openproject,setopenproject]=useState(0)
 const[user1,setuser1]=useState("")
 const[slmlist,setslmlist]=useState([])


 
// get context settings
  const mcc=React.useContext(Cstatus)
    const{setMcname}=React.useContext(Cstatus)

          


   

    const fetchslmlist=()=>{
        let user=""
        if(props.user.length>2){
          user=props.user
        }
        else{
          user=props.user1
        }
        setuser1(user)

        let data = []

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://localhost:5000/api/projectlist',
            headers: { 
              'Content-Type': 'application/json', 
              
            },
            //data : data
          };
          
          axios.request(config)
          .then((response) => {
            setslmlist(response.data["body"])
            setopenproject(response.data["body"].length)
          })
          .catch((error) => {
            //console.log(error);
          });

    }

   
  
     useEffect(() => {
      fetchslmlist()
      
      console.log("test sum")
      
      }, [])


      const handlemyprojects=(prj)=>{
        const mv={ statu: mcc.mcname["statu"], menu: mcc.mcname["menu"], company: mcc.mcname["company"], login:mcc.mcname["login"],user:mcc.mcname["user"], manager: mcc.mcname["managerstatus"], admin:mcc.mcname["adminstatus"], myroute:mcc.mcname["myroute"], incidentno:mcc.mcname["incidentno"], type:prj, dislist: true, data:[],lview:true, data1:mcc.mcname["data1"]}
        setMcname(mv)
        let mdata=[]
        switch(prj){
      

        }

        const timer = setTimeout(() => {
            handleClickScroll()
          }, 1000);
          return () => clearTimeout(timer);

        

      }

      const handleClickScroll = () => {
        const element = document.getElementById('tlist');
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
    
  
 

  return (




<div>
<h2 className='ml-5'>Budget Portal Dashboard</h2>

<div className="grid gap-4 grid-cols-5 grid-rows-1 mt-3 mb-3">
   
<div className="bg-red-500 hover:bg-red-200 shadow-xl rounded-md" onClick={()=>handlemyprojects("BR")}>
    
<Box
    sx={{
      marginTop:5,
      alignItems: "center",
      display:"flex",
      flexDirection:"column",

    }}>
       
      
      <Typography gutterBottom variant="" component="div" className="font-medium text-base text-white dark:text-white py-2">
            My Budget Requests
          </Typography>
          
          <Typography gutterBottom variant="" component="div" className="text-2xl font-bold text-red-900 dark:text-white py-4">
           {openproject}
         </Typography>
        
           
            </Box>
</div>
<div className="bg-amber-500 hover:bg-amber-200 shadow-xl rounded-md" onClick={()=>handlemyprojects("DU")}>

<Box
   sx={{
     marginTop:5,
     alignItems: "center",
     display:"flex",
     flexDirection:"column",

   }}>
      
     
     <Typography gutterBottom variant="" component="div" className="font-medium text-base text-white dark:text-white py-2">
           Approved Budgets
         </Typography>
         
         <Typography gutterBottom variant="" component="div" className="text-2xl font-bold text-red-900 dark:text-white py-4">
          {openproject}
        </Typography>
        
        
         
          
           </Box>
</div>
<div className="bg-blue-400 hover:bg-green-200 shadow-xl rounded-md" onClick={()=>handlemyprojects("OP")}>

<Box
   sx={{
     marginTop:5,
     alignItems: "center",
     display:"flex",
     flexDirection:"column",

   }}>
      
     
     <Typography gutterBottom variant="" component="div" className="font-medium text-base text-white dark:text-white py-2">
           New Budget Request
         </Typography>
         
         <Typography gutterBottom variant="" component="div" className="text-2xl font-bold text-red-900 dark:text-white py-4">
          {openproject}
        </Typography>
        
         
          
           
           
          
         
          
           </Box>
</div>
<div className="bg-green-400 hover:bg-green-200 shadow-xl rounded-md" onClick={()=>handlemyprojects("UN")}>

<Box
   sx={{
     marginTop:5,
     alignItems: "center",
     display:"flex",
     flexDirection:"column",

   }}>
      
     
     <Typography gutterBottom variant="" component="div" className="font-medium text-base text-white dark:text-white py-2">
        My Team Budget Requests
         </Typography>
      
           
         <Typography gutterBottom variant="" component="div" className="text-2xl font-bold text-red-900 dark:text-white py-4">
        {openproject}
         </Typography>
          
           
           
          
         
          
           </Box>
</div>
<div className="bg-green-600 hover:bg-green-200 shadow-xl rounded-md" onClick={()=>handlemyprojects("MY")}>

<Box
   sx={{
     marginTop:5,
     alignItems: "center",
     display:"flex",
     flexDirection:"column",
     

   }}
   
   >
      
     
     <Typography gutterBottom variant="" component="div" className="text-base font-medium text-white dark:text-white py-2" >
           Pending Approval Requests
         </Typography>
      
           
         
          
         <Typography gutterBottom variant="" component="div" className="text-2xl font-bold text-red-900 dark:text-white py-4" >
           {openproject}
         </Typography>
           
          
         
          
           </Box>
</div>
</div>
</div>
  )
}