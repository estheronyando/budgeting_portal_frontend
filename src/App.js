import React, {useState} from "react"
import logo from './logo.svg';
import './App.css';
import BudgetRequestForm from './components/budgetingportal/BudgetRequestForm'
import Dash from './components/dashboard/dash'
import Cstatus from "./components/login/cstatus";

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function App() {

  const company=useState([])
  const mv={ statu: false, user:'', login:true, menu:false, company:company,  myroute:0, type:"MY", dislist:true, data:[]}

  

  const[mcname,setMcname]=useState(mv)

  
  React.useEffect(() => {
    // fetchdata()
    let myroute="dashboard"
    localStorage.setItem('myroute', myroute)
    console.log(localStorage.getItem('token'))
    if(localStorage.getItem('token')){
     calculatetime()
     //check time difference
    }else{
     resetlocal()
     
    }

  }, [])

  const resetlocal=()=>{
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      localStorage.removeItem('logtime')
      localStorage.removeItem('logtime')
      localStorage.removeItem('user')
      localStorage.removeItem('manager')
      localStorage.removeItem('admin')
      localStorage.removeItem('statu')
      localStorage.removeItem('menu')
      localStorage.removeItem('company')

  }

  const calculatetime=()=>{
    const d = new Date();
    const d1 = new Date(localStorage.getItem('logtime'));
    let time = d.getTime();
    let time1 = d1.getTime();
    let td=(time-time1)/(1000)
    var tdiff=parseInt(td)/(60)
    if(tdiff<31){
      const mv1={ statu:localStorage.getItem('statu'), menu: localStorage.getItem('menu'), company:localStorage.getItem('company'), login:false,user:localStorage.getItem('user'), manager: localStorage.getItem('manager'), admin:localStorage.getItem('admin'), myroute:0,  incidentno:0, type:"MY", dislist: true, data:[],lview:true, data1:[]}
 
    // const mv1={ login:false,user:localStorage.getItem('user'), manager: localStorage.getItem('manager'), admin:localStorage.getItem('admin')}
        setMcname(mv1)
    }
    else{
      resetlocal()
    }
}
  return (
    <Cstatus.Provider value={{mcname, setMcname}}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
 
  <div className="App-header">
   <Dash />
   {/* <Testproxy /> */}
   {/* <Workdetails /> */}
   {/* <Worklog /> */}
   
  </div>
  </LocalizationProvider>
  </Cstatus.Provider>
  );
}

export default App;
