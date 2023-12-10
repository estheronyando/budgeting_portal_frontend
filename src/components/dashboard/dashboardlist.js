import React, {useState, useEffect, useRef} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios'
import Cstatus from '../login/cstatus';
import './style.css'

const columns= [
  { field: 'id', headerName: 'Project ID.', width: 150,  headerClassName:'bg-gray-500 text-white' },
  { field: 'dept', headerName: 'Department', width: 100, headerClassName:'bg-gray-500 text-white'  },
  { field: 'project_program', headerName: 'Project/Program', width: 300, headerClassName:'bg-gray-500 text-white'  },
  { field: 'status', headerName: 'Status', width: 100, headerClassName:'bg-gray-500 text-white'  }, 
  { field: 'fiscal_year', headerName: 'Year', width: 200, headerClassName:'bg-gray-500 text-white'  },  
  { field: 'submitDate', headerName: 'Submit Date', width: 200, headerClassName:'bg-gray-500 text-white'  },
];

export default function DashboardList(props) {
  const[budgetlist,setbudgetlist]=useState([])
  const [selectedRows, setSelectedRows] =useState([]);
  const[ctickets,setctickets]=useState("")
  const[mygroup,setmygroup]=useState("")

  const mcc=React.useContext(Cstatus)
    const{setMcname}=React.useContext(Cstatus)

    const cancelslmlist = useRef(null)


    const fetchmyprojects=()=>{
      let user=mcc.mcname['user']
      if(user.length<1){
        if(props.user.length>2){
          user=props.user
        }
        else{
          user=props.user1
        }
      }
      let data = JSON.stringify({
        "assigneeLoginId": user
      });
      
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://localhost:5000/api/projectlist',
        headers: { 
          
            'Content-Type': 'application/json', 
            
        },
        //data : data
      };
      
      axios.request(config )
      .then((response) => {
      
        setbudgetlist(response.data["body"]);
        
      })
      .catch((error) => {
        //console;
      });
      
    }

  

  useEffect(() => {
    
     fetchmyprojects()

  
  }, [])

  useEffect(() => {
    setbudgetlist([])
    console.log(mcc.mcname["type"])

  },[mcc.mcname["type"]])
   
  

  const handleresolve=(prjno)=>{
    const mv={ statu: mcc.mcname["statu"], menu: mcc.mcname["menu"], company: mcc.mcname["company"], login:mcc.mcname["login"],user:mcc.mcname["user"], manager: mcc.mcname["managerstatus"], admin:mcc.mcname["adminstatus"], myroute:5, incidentno: prjno}
    setMcname(mv)
  }

  const handlenewbudgetrequests=()=>{
    const mv={ statu: mcc.mcname["statu"], menu: mcc.mcname["menu"], company: mcc.mcname["company"], login:mcc.mcname["login"],user:mcc.mcname["user"], manager: mcc.mcname["managerstatus"], admin:mcc.mcname["adminstatus"], myroute:6, incidentno: ''}
    setMcname(mv)

}


  

  return (
    <div className="grid grid-cols-1 grid-rows-1 mt-5 ">
    <div className='bg-white shadow-xl'>
    <div className="grid gap-4 grid-cols-6 grid-rows-1 m-2">
    <div className="flex justify-left ml-2 font-bold text-green-700">
      <h3>{ctickets}</h3>
      </div>
      <div></div>
      <div></div>
      <div></div>
       <div></div>
      <div className="flex  items-end">
      <div className="dropdown inline-block ml-20">
    <button className="bg-green-300 text-white-700 font-semibold py-2 px-4 rounded inline-flex items-center" >
      <span className="mr-1" >New</span>
      {/* <svg  className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg> */}
      <i className="fa fa-chevron-down" aria-hidden="true"></i>
    </button>
    <ul className="dropdown-menu absolute hidden text-white-700 pt-1 z-30" style={{direction:"block"}}>
    {/* <li className="" ><a className="rounded-t bg-green-400 hover:bg-green-600 py-2 px-4 block whitespace-no-wrap" href="#">Administrator</a></li> */}
      <li className="" onClick={handlenewbudgetrequests}><a className="rounded-t bg-green-400 hover:bg-green-600 py-2 px-4 block whitespace-no-wrap" href="#">Budget Request</a></li>
      {/* <li className=""><a className="bg-green-400 hover:bg-green-600 py-2 px-4 block whitespace-no-wrap" href="#">Change</a></li> */}
    </ul>
  </div>
      </div>
      </div>
    <DataGrid
        rows={budgetlist}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        className='m-2'
        getRowId={row => row.id}
        selectedRowsData
        onSelectionModelChange={(ids) => {
          setSelectedRows(ids);
         
          if(ids.length>0){
            handleresolve(ids)
          }
          
        }}
        
        
        sx={{
          '& .MuiDataGrid-cell:hover': {
            color: 'primary.main',
          },
          // disable cell selection style
    '.MuiDataGrid-cell:focus': {
      outline: 'none'
    },
    // pointer cursor on ALL rows
    '& .MuiDataGrid-row:hover': {
      cursor: 'pointer'
    }
        }}
        autoHeight={true}
        
      />
      
      </div>
      </div>

  );
}