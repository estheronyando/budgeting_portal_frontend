import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios'
import { Alert, Box, Button, Card, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Modal, Paper, Select, TextField, TextareaAutosize, CircularProgress,Autocomplete } from '@mui/material';
import Cstatus from '../login/cstatus';
import "./styles.css"
import Redbar1 from '../menu/Redbar1';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

const Input = (props) => {
    const { id, placeholder = '', label = '', type = 'text', ...rest } = props;
    return (
      <div className={`border transition duration-150 ease-in-out focus-within:border-primary border-gray-gray4`} >
       
        <label htmlFor={id} className={`text-xs text-primary font-light placeholder-gray-gray4 px-2 pt-1.5`} >
          {label}
        </label>
        <input type={type} className={`w-full px-2 pb-1.5 text-primary outline-none text-base font-light rounded-md`} id={id} placeholder={placeholder} {...rest} />
      </div>
    );
  };



export default function Newincident(props) {
    const[project,setproject]=useState("")
    const[mproject,setmproject]=useState("Project/Program (required)")
    const[vproject,setvproject]=useState(false)
    const[cproject,setcproject]=useState('red')
    const [justification,setjustification]=useState("")
    const [mjustification,setmjustification]=useState("")
    const [vjustification,setvjustification]=useState("")
    const [projecttype,setprojecttype]=useState("")
    const [vprojecttype,setvprojecttype]=useState(false)
    const [projecttypelist,setprojecttypelist]=useState([])
    const[Risk_Impact_Benefits ,setRisk_Impact_Benefits ]=useState("")
    const[mRisk_Impact_Benefits,setmRisk_Impact_Benefits]=useState("Risk/Impact/Benefits  (required)")
    const[vRisk_Impact_Benefits,setvRisk_Impact_Benefits]=useState(false)
    const[cRisk_Impact_Benefits,setcRisk_Impact_Benefits]=useState('red')
    const[businessdriver ,setbusinessdriver ]=useState("")
    const[mbusinessdriver,setmbusinessdriver]=useState("Business Drivers/KPIS  (required)")
    const[vbusinessdriver,setvbusinessdriver]=useState(false)
    const[cbusinessdriver,setcbusinessdriver]=useState('red')
    const [impactedservices,setimpactedservices]=useState("")
    const [vimpactedservices,setvimpactedservices]=useState(false)
    const [impactedserviceslist,setimpactedserviceslist]=useState([])
    const [category,setcategory]=useState("")
    const [vcategory,setvcategory]=useState(false)
    const [categorylist,setcategorylist]=useState([])
    const[missionAlignmentStatement ,setmissionAlignmentStatement ]=useState("")
    const[mmissionAlignmentStatement,setmmissionAlignmentStatement]=useState("Mission Alignment Stetement  (required)")
    const[vmissionAlignmentStatement,setvmissionAlignmentStatement]=useState(false)
    const[cmissionAlignmentStatement,setcmissionAlignmentStatement]=useState('red')
    const[vendor ,setvendor ]=useState("")
    const[mvendor,setmvendor]=useState("Vendor  (required)")
    const[vvendor,setvvendor]=useState(false)
    const[cvendor,setcvendor]=useState('red')
    const[baselineQuantities ,setbaselineQuantities ]=useState("")
    const[mbaselineQuantities,setmbaselineQuantities]=useState("Baseline Quantities (required)")
    const[vbaselineQuantities,setvbaselineQuantities]=useState(false)
    const[cbaselineQuantities,setcbaselineQuantities]=useState('red')
    const[currency,setcurrency]=useState("KES")
    const[savestatus,setsavestatus]=useState(true)
    const[year1,setyear1]=useState([])
    const[myear1,setmyear1]=useState("")
    const[vyear1,setvyear1]=useState(false)
    const years = Array.from({ length: 20 }, (_, index) => 2022 + index); // Replace this with your array of years
    const [selectedYear1, setSelectedYear1] = React.useState('');
    const[unitprice,setunitprice]=useState(null)
    const[munitprice,setmunitprice]=useState("")
    const[vunitprice,setvunitprice]=useState(false)
    const[yr1quantity,setyr1quantity]=useState(null)
    const[myr1quantity,setmyr1quantity]=useState("")
    const[vyr1quantity,setvyr1quantity]=useState(false)
    const[yr1budget,setyr1budget]=useState(null)
    const[myr1budget,setmyr1budget]=useState("")
    const[vyr1budget,setvyr1budget]=useState(false)
    const[earlyloadpercent,setearlyloadpercent]=useState(null)
    const[mearlyloadpercent,setmearlyloadpercent]=useState("")
    const[vearlyloadpercent,setvearlyloadpercent]=useState(false)
    const[mindthegap,setmindthegap]=useState("Yes")
    const [projectpriority,setprojectpriority]=useState(1)
    const[unitprice2,setunitprice2]=useState(null)
    const[munitprice2,setmunitprice2]=useState("")
    const[vunitprice2,setvunitprice2]=useState(false)
    const[yr2quantity,setyr2quantity]=useState(null)
    const[myr2quantity,setmyr2quantity]=useState("")
    const[vyr2quantity,setvyr2quantity]=useState(false)
    const[yr2budget,setyr2budget]=useState(null)
    const[myr2budget,setmyr2budget]=useState("")
    const[vyr2budget,setvyr2budget]=useState(false)
    const[myear2,setmyear2]=useState("")
    const[vyear2,setvyear2]=useState(false)
    const [selectedYear2, setSelectedYear2] = React.useState('');
    const[unitprice3,setunitprice3]=useState(null)
    const[munitprice3,setmunitprice3]=useState("")
    const[vunitprice3,setvunitprice3]=useState(false)
    const[yr3quantity,setyr3quantity]=useState(null)
    const[myr3quantity,setmyr3quantity]=useState("")
    const[vyr3quantity,setvyr3quantity]=useState(false)
    const[yr3budget,setyr3budget]=useState(null)
    const[myr3budget,setmyr3budget]=useState("")
    const[vyr3budget,setvyr3budget]=useState(false)
    const[myear3,setmyear3]=useState("")
    const[vyear3,setvyear3]=useState(false)
    const [selectedYear3, setSelectedYear3] = React.useState('');
    const [domain,setdomain]=useState("")
    const [vdomain,setvdomain]=useState(false)
    const [domainlist,setdomainlist]=useState([])
    const [department,setdepartment]=useState("")
    const [vdepartment,setvdepartment]=useState(false)
    const [departmentlist,setdepartmentlist]=useState([])
    const [projectid,setprojectid]=useState(null)
    const [company,setcompany]=useState([])
    const[assignee,setassignee]=useState("")
    const[status,setstatus]=useState("New")
   
  
    
    const[statusmessage,setstatusmessage]=useState("Create New Budget Request")
   
    const [alerttype,setalerttype]=useState("success")
   
    const[errormessage,seterrormessage]=useState("")
    const[viewerror,setviewerror]=useState(false)

    const[isloading,setisloading]=useState(true)
    
    const mcc=React.useContext(Cstatus)
    const{setMcname}=React.useContext(Cstatus)

 

    //modal
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };


    const [open1, setOpen1] = React.useState(false);
    const handleOpen1 = () => {
      setOpen1(true);
    };
    const handleClose1 = () => {
      setOpen1(false);
    };


    const [open2, setOpen2] = React.useState(false);
    const handleOpen2 = () => {
      setOpen2(true);
    };
    const handleClose2 = () => {
      setOpen2(false);
    };

    const [open5, setOpen5] = React.useState(false);
    const handleOpen5 = () => {
      setOpen5(true);
    };
    const handleClose5 = () => {
      setOpen5(false);
    };

    const [open6, setOpen6] = React.useState(false);
    const handleOpen6 = () => {
      setOpen6(true);
    };
    const handleClose6 = () => {
      setOpen6(false);
    };
    const [open7, setOpen7] = React.useState(false);
    const handleOpen7 = () => {
      setOpen7(true);
    };
    const handleClose7 = () => {
      setOpen7(false);
    };

    

 
    
    


    const handleyear1=(e)=>{
      console.log(e.target.value)
      let p=e.target.value
      setSelectedYear1(p)
      
      if(p!=null && p!=undefined){
          setvyear1(true)
         setmyear1("")
      }
      else{
          setvyear1(false)
         setmyear1("Select Year")
      }
  }

    const handlejustification=(e)=>{
        let p=e.target.value
        setjustification(p)
        if(p.length>0){
            setvjustification(true)
            setmjustification("")
        }
        else{
            setvjustification(false)
            setmjustification("Enter justification")
        }
    }

    const handleunitprice=(e,newvalue)=>{
      let p=e.target.value
      setunitprice(p)
      if(p.length>0){
          setvunitprice(true)
          setmunitprice("")
      }
      else{
          setvunitprice(false)
          setmunitprice("Enter Unit Price")
      }
  }

  const handleearlyload = (e) => {
    let inputValue = e.target.value;
  
    // Ensure the input is a number and limit it to the range [0, 100]
    if (!isNaN(inputValue)) {
      inputValue = Math.max(0, Math.min(100, inputValue));
      setearlyloadpercent(inputValue);
      setvearlyloadpercent(true);
      setmearlyloadpercent("");
    } else {
      setearlyloadpercent('');
      setvearlyloadpercent(false);
      setmearlyloadpercent("Enter Early Load Percent");
    }
  };


  const handleyr1quantity=(e,newvalue)=>{
    let p=e.target.value
    setyr1quantity(p)
    if(p.length>0){
        setvyr1quantity(true)
        setmyr1quantity("")
    }
    else{
        setvyr1quantity(false)
        setmyr1quantity("Enter Quantity")
    }
}

const handleyr1budget=(e,newvalue)=>{
  let p=e.target.value
  setyr1budget(p)
  if(p.length>0){
      setvyr1budget(true)
      setmyr1budget("")
  }
  else{
      setvyr1budget(false)
      setmyr1budget("Enter Budget")
  }
}


//Handling year 2 unitprice//projectedquantity//projectedbudget

const handleyear2=(e)=>{
  console.log(e.target.value)
  let p=e.target.value
  setSelectedYear2(p)
  
  if(p!=null && p!=undefined){
      setvyear2(true)
     setmyear2("")
  }
  else{
      setvyear2(false)
     setmyear2("Select Year")
  }
}


const handleyr2unitprice=(e,newvalue)=>{
  let p=e.target.value
  setunitprice2(p)
  if(p.length>0){
      setvunitprice2(true)
      setmunitprice2("")
  }
  else{
      setvunitprice2(false)
      setmunitprice2("Enter Unit Price")
  }
}

const handleyr2quantity=(e,newvalue)=>{
  let p=e.target.value
  setyr2quantity(p)
  if(p.length>0){
      setvyr2quantity(true)
      setmyr2quantity("")
  }
  else{
      setvyr2quantity(false)
      setmyr2quantity("Enter Quantity")
  }
}

const handleyr2budget=(e,newvalue)=>{
let p=e.target.value
setyr2budget(p)
if(p.length>0){
    setvyr2budget(true)
    setmyr2budget("")
}
else{
    setvyr2budget(false)
    setmyr1budget("Enter Budget")
}
}

//End of year 2

//Handling year 3 unitprice//projectedquantity//projectedbudget

const handleyear3=(e)=>{
  console.log(e.target.value)
  let p=e.target.value
  setSelectedYear3(p)
  
  if(p!=null && p!=undefined){
      setvyear3(true)
     setmyear3("")
  }
  else{
      setvyear3(false)
     setmyear3("Select Year")
  }
}


const handleyr3unitprice=(e,newvalue)=>{
  let p=e.target.value
  setunitprice3(p)
  if(p.length>0){
      setvunitprice3(true)
      setmunitprice3("")
  }
  else{
      setvunitprice3(false)
      setmunitprice3("Enter Unit Price")
  }
}

const handleyr3quantity=(e,newvalue)=>{
  let p=e.target.value
  setyr3quantity(p)
  if(p.length>0){
      setvyr3quantity(true)
      setmyr3quantity("")
  }
  else{
      setvyr3quantity(false)
      setmyr3quantity("Enter Quantity")
  }
}

const handleyr3budget=(e,newvalue)=>{
let p=e.target.value
setyr3budget(p)
if(p.length>0){
    setvyr3budget(true)
    setmyr3budget("")
}
else{
    setvyr3budget(false)
    setmyr3budget("Enter Budget")
}
}

//End of year 3
  
    const handleRisk_Impact_Benefits=(e)=>{
        let p=e.target.value
        setRisk_Impact_Benefits(p)
        //setjustification(p)
        if(p.length>9){
            setvRisk_Impact_Benefits(true)
            setmRisk_Impact_Benefits("Risk/Impact/Benefits")
        }
        else{
            setvRisk_Impact_Benefits(false)
            setmRisk_Impact_Benefits("Risk/Impact/Benefits (required)")
        }

        handlevalidation(p,project,projecttype)
    }

    const handlemissionalignmentstatement=(e)=>{
      let p=e.target.value
      setmissionAlignmentStatement(p)
      // setjustification(p)
      if(p.length>9){
          setvmissionAlignmentStatement(true)
          setmmissionAlignmentStatement("Mission Alignment Statement")
      }
      else{
          setvmissionAlignmentStatement(false)
          setmmissionAlignmentStatement("Mission Alignment Statement (required)")
      }

      handlevalidation(p,project,projecttype)
  }

  const handlevendor=(e)=>{
    let p=e.target.value
    setvendor(p)
    // setjustification(p)
    if(p.length>9){
        setvvendor(true)
        setmvendor("Vendor")
    }
    else{
        setvvendor(false)
        setmvendor("Vendor (required)")
    }

    handlevalidation(p,project,projecttype)
}

const handlebaselineQuantities=(e)=>{
  let p=e.target.value
  setbaselineQuantities(p)
  // setjustification(p)
  if(p.length>9){
      setvbaselineQuantities(true)
      setmbaselineQuantities("Baseline Quantities")
  }
  else{
      setvbaselineQuantities(false)
      setmbaselineQuantities("Baseline Quantities (required)")
  }

  handlevalidation(p,project,projecttype)
}
  
    const handlebusinessdriver=(e)=>{
      let p=e.target.value
      setbusinessdriver(p)
      //setjustification(p)
      if(p.length>9){
          setvbusinessdriver(true)
          setmbusinessdriver("Business Drivers/KPIS")
      }
      else{
          setvbusinessdriver(false)
          setmbusinessdriver("Business Drivers/KPIS (required)")
      }

      handlevalidation(p,project,projecttype)
  }

    const handleproject=(e)=>{
      let p=e.target.value
      setproject(p)
      //setjustification(p)
      if(p.length>9){
          setvproject(true)
          setmproject("Project/Program")
      }
      else{
          setvproject(false)
          setmproject("Project/Program (required)")
      }

      handlevalidation(p,project,projecttype)
  }

    const handlestatus=(e)=>{
        setstatus((e.target.value))

    }

    const handlecurrency=(e)=>{
      setcurrency((e.target.value))

  }

  const handleprojectpriority=(e)=>{
    setprojectpriority((e.target.value))

    console.log(vyear1)
    console.log(selectedYear1)
    console.log(vunitprice)
    console.log(vyr1quantity)
    console.log(vyr1budget)
    console.log(vearlyloadpercent)
    

}

  const handlemindthegap=(e)=>{
    setmindthegap((e.target.value))

}


   
    

    useEffect(() => {
      
        handlevalidation(project,justification,Risk_Impact_Benefits)
        fetchprojecttype()
        fetchimpactedservices()
        fetchcategory()
        fetchdomains()
        fetchdepartments()
  
    }, [])

    




   

  const handlevalidation=(csum,cass,cserv)=>{
    let ms="";
    if( csum.length>9 && cass.length>3){
      
      setalerttype('success')
      }
      else
      {
          setalerttype('warning')
          ms=""
          
          if(csum.length<=9){
              ms+="Add Project/Program "
          }
          if(cass.length<=3){
            if(ms.length>0){
              if(cserv.length<1)
              ms+=", ProjectType "
              else
              ms+="and All field "
            }
            else{
              ms+="Add All Fields "
            }
          }
          if(cserv.length<1){
            if(ms.length>0){
              ms+="and Impacted Service "
            }
            else{
              ms+="Add All Fields "
            }
          }
          
      }
     
      setstatusmessage(ms)
  }

 


  const budgetrequestsave=()=>{
    setisloading(false)
    handlesavebudgetrequest()
    
  }

  

    const handlesavebudgetrequest=()=>{
      let cuser=''  
    if(props.user.length>3){
        cuser=props.user
      }
      else{
        cuser=props.user1
      }
    let data = JSON.stringify({
      "projectData": {
        "domain": domain,
        "dept": department,
        "project_program": project,
        "justification": justification,
        "project_type": projecttype,
        "risk_impact_benefits": Risk_Impact_Benefits,
        "business_drivers_kpis": businessdriver,
        "services_impacted": impactedservices,
        "category": category,
        "mission_alignment_statement": missionAlignmentStatement,
        "vendor": vendor,
        "baseline_quantities": baselineQuantities,
        "currency": currency
      },
      "budgetData": [
        {
          "fiscal_year":selectedYear1,
          "unit_price": unitprice,
          "qty": yr1quantity,
          "budget": yr1budget,
          "early_load_percent": earlyloadpercent,
          "mind_the_gap": mindthegap,
          "project_priority": projectpriority
        },
        {
          "fiscal_year": selectedYear2,
          "unit_price": unitprice2,
          "qty": yr2quantity,
          "budget": yr2budget
          
        },
        {
          "fiscal_year": selectedYear3,
          "unit_price": unitprice3,
          "qty": yr3quantity,
          "budget": yr3budget
          
        }
      ]
        
      });

      

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:5000/api/projects',
        headers: { 
           
          'Content-Type': 'application/json', 
          
        },
        data : data
      };
   
    axios
    .request(config)
    .then((response) => {
    setprojectid(response.data["body"][0].id)
    setstatusmessage("ProjectId:"+response.data["body"][0].id)
    // setcustomer(response.data["body"]["firstName"] + " " + response.data["body"]["lastName"])
    // setpriority(response.data["body"]["priority"])
    setsavestatus(false)
    setalerttype('success')
    console.log(response.data["body"][0].id)

        seterrormessage("")
        setviewerror(false)

   
    setisloading(true)
    })
    .catch((error) => {
      console.log(error)
      seterrormessage("Error encounterred could not save Budget Request")
      setviewerror(true)
      setisloading(true)
    //console;
    });


}


    const handleclose=()=>{
      if(props.type=="DB"){

        const mv={ statu: mcc.mcname["statu"], menu: mcc.mcname["menu"], company: mcc.mcname["company"], login:mcc.mcname["login"],user:mcc.mcname["user"], manager: mcc.mcname["managerstatus"], admin:mcc.mcname["adminstatus"], myroute:0, incidentno: ''}
    setMcname(mv)
   
       
    
        }
        else{
          const mv={ statu: mcc.mcname["statu"], menu: mcc.mcname["menu"], company: mcc.mcname["company"], login:mcc.mcname["login"],user:mcc.mcname["user"], manager: mcc.mcname["managerstatus"], admin:mcc.mcname["adminstatus"], myroute:1, incidentno: ''}
    setMcname(mv)
    
         
    
        }
    

    }
   

    //Fetch domain dropdownvalues

    const handledomain=(e)=>{
      let p=e.target.value
      setdomain(e.target.value)
      if(p.length>0){
        setvdomain(true)
      }
      else{
        setvdomain(false)
      }
      handlevalidation(project,projecttype,p)
    }
    const fetchdomains=()=>{
      let data = '';

      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://localhost:5000/api/domains',
        headers: { 
          
          'Content-Type': 'application/json', 
         
        },
        data : data
      };
      
      axios.request(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        const options =response.data.body
        setdomainlist(response.data.body)
      })
      .catch((error) => {
        //console.log(error);
      });
        

  }

  //Fetch departments dropdown

  const handledepartment=(e)=>{
    let p=e.target.value
    setdepartment(e.target.value)
    if(p.length>0){
      setvdepartment(true)
    }
    else{
      setvdepartment(false)
    }
    handlevalidation(project,domain,p)
  }
  const fetchdepartments=()=>{
    let data = '';

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://localhost:5000/api/departments',
      headers: { 
        
        'Content-Type': 'application/json', 
        
      },
      data : data
    };
    
    axios.request(config)
    .then((response) => {
      // console.log(JSON.stringify(response.data));
      const options =response.data.body
      setdepartmentlist(response.data.body)
    })
    .catch((error) => {
      //console.log(error);
    });
      

}


    //Fetch Project Types

    const handleprojecttype=(e)=>{
      let p=e.target.value
      setprojecttype(e.target.value)
      if(p.length>0){
        setvprojecttype(true)
      }
      else{
        setvprojecttype(false)
      }
      handlevalidation(project,projecttype,p)
    }
    const fetchprojecttype=()=>{
      let data = '';

      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://localhost:5000/api/projecttypes',
        headers: { 
          
          'Content-Type': 'application/json', 
          
        },
        data : data
      };
      
      axios.request(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        const options =response.data.body
        setprojecttypelist(response.data.body)
      })
      .catch((error) => {
        //console.log(error);
      });
        

  }

  const handleimpactedservices=(e)=>{
    let p=e.target.value
    setimpactedservices(e.target.value)
    if(p.length>0){
      setvimpactedservices(true)
    }
    else{
      setvimpactedservices(false)
    }
    handlevalidation(project,projecttype,p)
  }
  
  const fetchimpactedservices=()=>{
    let data = '';

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://localhost:5000/api/impactedservices',
      headers: { 
        
        'Content-Type': 'application/json', 
        
      },
      data : data
    };
    
    axios.request(config)
    .then((response) => {
      // console.log(JSON.stringify(response.data));
      const options =response.data.body
      setimpactedserviceslist(response.data.body)
    })
    .catch((error) => {
      //console.log(error);
    });
      

}

const handlecategory=(e)=>{
  let p=e.target.value
  setcategory(e.target.value)
  if(p.length>0){
    setvcategory(true)
  }
  else{
    setvcategory(false)
  }
  handlevalidation(project,projecttype,p)
}

const fetchcategory=()=>{
  let data = '';

  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'http://localhost:5000/api/categories',
    headers: { 
      
      'Content-Type': 'application/json', 
      
    },
    data : data
  };
  
  axios.request(config)
  .then((response) => {
    // console.log(JSON.stringify(response.data));
    const options =response.data.body
    setcategorylist(response.data.body)
  })
  .catch((error) => {
    //console.log(error);
  });
    

}


  const handleresolve=()=>{

    const mv={ statu: mcc.mcname["statu"], menu: mcc.mcname["menu"], company: mcc.mcname["company"], login:mcc.mcname["login"],user:mcc.mcname["user"], manager: mcc.mcname["managerstatus"], admin:mcc.mcname["adminstatus"], myroute:5, projectid: projectid}
    setMcname(mv)
 
 
  }

  

  return (
    <Paper
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1 },
    }}
    noValidate
    autoComplete="off"
    elevation={3}
  >
    <Grid item container spacing={2} sx={{margin:2}}>
      <Grid item xs={6} sm={7}  sx={{ margin: 1 }}>
      <div className='flex-none w-58 decoration-4 text-green-700 text-2xl ml-8 font-bold'><h3> Create Budget Request</h3></div>
    </Grid>
      <Grid item xs={6} sm={3}  sx={{ margin: 1 }}><Alert onClick={handleresolve} sx={{fontWeight: 'bold', color:"red", marginLeft:3}} severity={alerttype}>{statusmessage}</Alert>
    </Grid>
    </Grid>
    <Redbar1 />
    <Grid item container spacing={2} sx={{margin:2}}>
      <Grid item  xs={6} sm={3} >
      <Card variant="outlined">
      <FormControl id="margin-normal"  className='MuiTextField-root w-[90%]'
sx={
  vdomain ? {
    fieldset: { borderColor: "grey",color:"black", }
  
} : {
  
  fieldset: { borderColor: "red",color:"red", }
}
}
>

  
      <InputLabel id="demo-simple-select-label">Domain</InputLabel>
      <Select
                label="Domain"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={domain}
                onChange={handledomain}
            >
                {domainlist.map(domainlist=>(
                    <MenuItem key={domainlist} value={domainlist}>{domainlist}</MenuItem>

                ))}
        </Select>
        </FormControl>

        <FormControl id="margin-normal"  className='MuiTextField-root w-[90%]'
sx={
  vdepartment ? {
    fieldset: { borderColor: "grey",color:"black", }
  
} : {
  
  fieldset: { borderColor: "red",color:"red", }
}
}
>

  
      <InputLabel id="demo-simple-select-label">Department</InputLabel>
      <Select
                label="Department"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={department}
                onChange={handledepartment}
            >
                {departmentlist.map(departmentlist=>(
                    <MenuItem key={departmentlist} value={departmentlist}>{departmentlist}</MenuItem>

                ))}
        </Select>
        </FormControl>
     
        <TextField
    sx={
      vproject ? {
        fieldset: { borderColor: "grey",color:"black", }
      
    } : {
      
      fieldset: { borderColor: "red",color:"red", }
    }
   }
    id="standard-basic"
    label={mproject}
    variant="outlined"
    value={project}
    onChange={handleproject}
    className='w-[90%]'
/>
<TextField
    sx={
      vRisk_Impact_Benefits ? {
        fieldset: { borderColor: "grey",color:"black", }
      
    } : {
      
      fieldset: { borderColor: "red",color:"red", }
    }
   }
    id="standard-basic"
    label={mRisk_Impact_Benefits}
    variant="outlined"
    value={Risk_Impact_Benefits}
    onChange={handleRisk_Impact_Benefits}
    className='w-[90%]'
/>

<FormControl id="margin-normal"  className='MuiTextField-root w-[90%]'
sx={
  vprojecttype ? {
    fieldset: { borderColor: "grey",color:"black", }
  
} : {
  
  fieldset: { borderColor: "red",color:"red", }
}
}
>

  
      <InputLabel id="demo-simple-select-label">Project Type</InputLabel>
      <Select
                label="Project Type"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={projecttype}
                onChange={handleprojecttype}
            >
                {projecttypelist.map(projecttypelist=>(
                    <MenuItem key={projecttypelist} value={projecttypelist}>{projecttypelist}</MenuItem>

                ))}
        </Select>
        </FormControl>
         

        </Card>
       
      </Grid>
      <Grid item xs={12} sm={3}  >
     
      
        <Card variant="outlined"> 
        <label className='m-1'>Justification for Budget</label>
        <TextareaAutosize
            minRows={2}
            label="Description of justification" 
            onChange={handlejustification}
            // placeholder="Description of incident" 
            className="w-full mt-2 border-solid border-2 border-gray-400  rounded-md w-[90%] m-1"
            value={justification}
        />

        <TextField
    sx={
      vbusinessdriver ? {
        fieldset: { borderColor: "grey",color:"black", }
      
    } : {
      
      fieldset: { borderColor: "red",color:"red", }
    }
   }
    id="standard-basic"
    label={mbusinessdriver}
    variant="outlined"
    value={businessdriver}
    onChange={handlebusinessdriver}
    className='w-[90%]'
/>
<FormControl id="margin-normal"  className='MuiTextField-root w-[90%]'
sx={
  vimpactedservices ? {
    fieldset: { borderColor: "grey",color:"black", }
  
} : {
  
  fieldset: { borderColor: "red",color:"red", }
}
}
>

  
      <InputLabel id="demo-simple-select-label">Services Impacted</InputLabel>
      <Select
                label="Services Impacted"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={impactedservices}
                onChange={handleimpactedservices}
            >
                {impactedserviceslist.map(impactedserviceslist=>(
                    <MenuItem key={impactedserviceslist} value={impactedserviceslist}>{impactedserviceslist}</MenuItem>

                ))}
        </Select>
        </FormControl>

        <FormControl id="margin-normal"  className='MuiTextField-root w-[90%]'
sx={
  vcategory? {
    fieldset: { borderColor: "grey",color:"black", }
  
} : {
  
  fieldset: { borderColor: "red",color:"red", }
}
}
>

  
      <InputLabel id="demo-simple-select-label">Category</InputLabel>
      <Select
                label="Category"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                onChange={handlecategory}
            >
                {categorylist.map(categorylist=>(
                    <MenuItem key={categorylist} value={categorylist}>{categorylist}</MenuItem>

                ))}
        </Select>
        </FormControl>
        
        
        </Card>
        
       

      </Grid>

      <Grid item xs={12} sm={3}  >

        <Card variant="outlined">
        <TextField
    sx={
      vmissionAlignmentStatement ? {
        fieldset: { borderColor: "grey",color:"black", }
      
    } : {
      
      fieldset: { borderColor: "red",color:"red", }
    }
   }
    id="standard-basic"
    label={mmissionAlignmentStatement}
    variant="outlined"
    value={missionAlignmentStatement}
    onChange={handlemissionalignmentstatement}
    className='w-[90%]'
/>
        <TextField
    sx={
      vvendor? {
        fieldset: { borderColor: "grey",color:"black", }
      
    } : {
      
      fieldset: { borderColor: "red",color:"red", }
    }
   }
    id="standard-basic"
    label={mvendor}
    variant="outlined"
    value={vendor}
    onChange={handlevendor}
    className='w-[90%]'
/>
        

<TextField
    sx={
      vbaselineQuantities? {
        fieldset: { borderColor: "grey",color:"black", }
      
    } : {
      
      fieldset: { borderColor: "red",color:"red", }
    }
   }
    id="standard-basic"
    label={mbaselineQuantities}
    variant="outlined"
    value={baselineQuantities}
    onChange={handlebaselineQuantities}
    className='w-[90%]'
/>
<FormControl id="margin-normal" className='MuiTextField-root w-[90%]'>
      <InputLabel id="demo-simple-select-label">Currency</InputLabel>
      <Select
                label="Currency"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={currency}
                onChange={handlecurrency}
                className='font-normal text-black-300'
            >
                <MenuItem value="KES">KES</MenuItem>
                <MenuItem value="USD">USD</MenuItem>
                <MenuItem value="EUR">EUR</MenuItem>
                
        </Select>
        </FormControl>
    

        </Card>
      </Grid>
      </Grid>
      <Redbar1/>

      <Grid item container spacing={2}  sx={{height:90}}>
      <Grid item xs={6} sm={3}  className=''  align="center" justifyContent="center">
      <div className="w-80 mx-auto a-left">
{vyear1 && vunitprice && vyr1quantity && vyr1budget && vearlyloadpercent?
<div>
<button onClick={handleOpen} type='button' className="bg-white-500 px-8 py-2 text-black-500  hover:bg-gray-200 font-bold decoration-4 text-sm" id="open-btn">
Year 1 Budget  <span ><i className="fa fa-pencil" aria-hidden="true"></i></span>
</button>


</div>
:
<div>
<button onClick={handleOpen} type='button' className="bg-white-500   px-8 py-2 text-black-500  hover:bg-gray-200 font-bold decoration-4 text-sm" id="open-btn">
Year 1 Budget  <span><i className="fa fa-pencil" aria-hidden="true"></i></span><span className='text-red-500 font-normal'>(Required)</span>
</button>

</div>

}
</div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
         
        <FormControl id="margin-normal" sx={{ width: 250, margin: 1 }} className='MuiTextField-root' error={!vyear1}>
      <InputLabel id="demo-simple-select-label">Select Year</InputLabel>
      <Select
        label="Year"
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedYear1}
        onChange={handleyear1}
      >
        {years.map((year, index) => (
          <MenuItem key={index} value={year}>
            {year}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>Select a year</FormHelperText>
    </FormControl>

    <FormControl id="margin-normal" sx={{ width: 250, margin: 1 }} className='MuiTextField-root' error={!vunitprice}>
    
      <TextField
        label="Unit Price"
        labelId="demo-simple-select-label"
        type="number"
        inputProps={{ min: 1 }}
        value={unitprice}
        onChange={handleunitprice}
      />
      <FormHelperText>Enter a unit price (minimum 1)</FormHelperText>
    </FormControl>

    <FormControl id="margin-normal" sx={{ width: 250, margin: 1 }} className='MuiTextField-root' error={!vyr1quantity}>
    
      <TextField
        label="Year1 Quantity"
        labelId="demo-simple-select-label"
        type="number"
        inputProps={{ min: 1 }}
        value={yr1quantity}
        onChange={handleyr1quantity}
      />
      <FormHelperText>Enter a quantity (minimum 1)</FormHelperText>
    </FormControl>
 

    <FormControl id="margin-normal" sx={{ width: 250, margin: 1 }} className='MuiTextField-root' error={!vyr1budget}>
    
    <TextField
      label="Year1 Budget"
      labelId="demo-simple-select-label"
      type="number"
      inputProps={{ min: 1 }}
      value={yr1budget}
      onChange={handleyr1budget}
    />
    <FormHelperText>Enter budget </FormHelperText>
  </FormControl>

  <FormControl id="margin-normal" sx={{ width: 250, margin: 1 }} className='MuiTextField-root' error={!vearlyloadpercent}>
    
    <TextField
      label="Early Load Percentage"
      labelId="demo-simple-select-label"
      type="number"
      inputProps={{ min: 1 }}
      value={earlyloadpercent}
      onChange={handleearlyload}
    />
    <FormHelperText>Enter Early Load Percentage (0-100) </FormHelperText>
  </FormControl>

        
  <FormControl id="margin-normal" className='MuiTextField-root w-[90%]'>
      <InputLabel id="demo-simple-select-label">Mind the Gap</InputLabel>
      <Select
                label="Mind the Gap"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={mindthegap}
                onChange={handlemindthegap}
                className='font-normal text-black-300'
            >
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
                
                
        </Select>
        <br />
        <hr />
        </FormControl>

        <FormControl id="margin-normal" className='MuiTextField-root w-[90%]'>
      <InputLabel id="demo-simple-select-label">Project Priority</InputLabel>
      <Select
                label="Project Priority"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={projectpriority}
                onChange={handleprojectpriority}
                className='font-normal text-black-300'
            >
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
                <MenuItem value="4">4</MenuItem>
                
                
        </Select>
        </FormControl>

        {/* <button type='button' onClick={budgetsave} className="mr-3 bg-orange-200 w-[100px] h-[46px] hover:bg-orange-500 hover:text-white mt--[2px] rounded" style={{ width:100, height:46, marginTop:2, borderRadius:14}}>Save</button> */}
        <button type='button' onClick={handleClose} className="mr-3 bg-gray-200 w-[100px] h-[46px] hover:bg-gray-500 hover:text-white mt--[2px] rounded" style={{ width:100, height:46, marginTop:2, borderRadius:14}}>Close</button>
         
    
        </Box>
      </Modal>


        </Grid>
        
<Grid item xs={6} sm={3}    align="center" justifyContent="center">

        <div className="w-80 mx-auto  a-left">
{vyear1 && vunitprice && vyr1quantity && vyr1budget && vearlyloadpercent?
<div>
<button onClick={handleOpen6} type='button' className="bg-white-500  px-8 py-2 text-black-500 hover:bg-gray-200 font-bold decoration-4 text-sm" id="open-btn">
Year 2 Budget <span><i className="fa fa-pencil" aria-hidden="true"></i></span>
</button>


</div>
:
<div>
<button onClick={handleOpen6} type='button' className="bg-white-500   px-8 py-2 text-black-500 hover:bg-gray-200  font-bold decoration-4 text-sm" id="open-btn1">
Year 2 Budget <span><i className="fa fa-pencil" aria-hidden="true"></i></span> <span className='text-red-500 font-normal'>(Required)</span>
</button>

</div>}
</div>

<Modal
        open={open6}
        onClose={handleClose6}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
         
        <FormControl id="margin-normal" sx={{ width: 250, margin: 1 }} className='MuiTextField-root' error={!vyear2}>
      <InputLabel id="demo-simple-select-label">Select Year</InputLabel>
      <Select
        label="Year"
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedYear2}
        onChange={handleyear2}
      >
        {years.map((year, index) => (
          <MenuItem key={index} value={year}>
            {year}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>Select a year</FormHelperText>
    </FormControl>

    <FormControl id="margin-normal" sx={{ width: 250, margin: 1 }} className='MuiTextField-root' error={!vunitprice2}>
    
      <TextField
        label="Unit Price"
        labelId="demo-simple-select-label"
        type="number"
        inputProps={{ min: 1 }}
        value={unitprice2}
        onChange={handleyr2unitprice}
      />
      <FormHelperText>Enter a unit price (minimum 1)</FormHelperText>
    </FormControl>

    <FormControl id="margin-normal" sx={{ width: 250, margin: 1 }} className='MuiTextField-root' error={!vyr2quantity}>
    
      <TextField
        label="Year2 Quantity"
        labelId="demo-simple-select-label"
        type="number"
        inputProps={{ min: 1 }}
        value={yr2quantity}
        onChange={handleyr2quantity}
      />
      <FormHelperText>Enter a quantity (minimum 1)</FormHelperText>
    </FormControl>
 

    <FormControl id="margin-normal" sx={{ width: 250, margin: 1 }} className='MuiTextField-root' error={!vyr2budget}>
    
    <TextField
      label="Year2 Budget"
      labelId="demo-simple-select-label"
      type="number"
      inputProps={{ min: 1 }}
      value={yr2budget}
      onChange={handleyr2budget}
    />
    <FormHelperText>Enter budget </FormHelperText>
  </FormControl>


      

        {/* <button type='button' onClick={ticketsave} className="mr-3 bg-orange-200 w-[100px] h-[46px] hover:bg-orange-500 hover:text-white mt--[2px] rounded" style={{ width:100, height:46, marginTop:2, borderRadius:14}}>Save</button> */}
        <button type='button' onClick={handleClose6} className="mr-3 bg-gray-200 w-[100px] h-[46px] hover:bg-gray-500 hover:text-white mt--[2px] rounded" style={{ width:100, height:46, marginTop:2, borderRadius:14}}>Close</button>
         
    
        </Box>
      </Modal>

</Grid>
<Grid item xs={6} sm={5}    align="center" justifyContent="center">

        <div className="w-80 mx-auto  a-left">
{vyear1 && vunitprice && vyr1quantity && vyr1budget && vearlyloadpercent?
<div>
<button onClick={handleOpen7} type='button' className="bg-white-500  px-8 py-2 text-black-500 hover:bg-gray-200 font-bold decoration-4 text-sm" id="open-btn">
Year 3 Budget <span><i className="fa fa-pencil" aria-hidden="true"></i></span>
</button>


</div>
:
<div>
<button onClick={handleOpen7} type='button' className="bg-white-500   px-8 py-2 text-black-500 hover:bg-gray-200  font-bold decoration-4 text-sm" id="open-btn1">
Year 3 Budget <span><i className="fa fa-pencil" aria-hidden="true"></i></span> <span className='text-red-500 font-normal'>(Required)</span>
</button>
</div>}
</div>

<Modal
        open={open7}
        onClose={handleClose7}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
         
        <FormControl id="margin-normal" sx={{ width: 250, margin: 1 }} className='MuiTextField-root' error={!vyear3}>
      <InputLabel id="demo-simple-select-label">Select Year</InputLabel>
      <Select
        label="Year"
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedYear3}
        onChange={handleyear3}
      >
        {years.map((year, index) => (
          <MenuItem key={index} value={year}>
            {year}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>Select a year</FormHelperText>
    </FormControl>

    <FormControl id="margin-normal" sx={{ width: 250, margin: 1 }} className='MuiTextField-root' error={!vunitprice3}>
    
      <TextField
        label="Unit Price"
        labelId="demo-simple-select-label"
        type="number"
        inputProps={{ min: 1 }}
        value={unitprice3}
        onChange={handleyr3unitprice}
      />
      <FormHelperText>Enter a unit price (minimum 1)</FormHelperText>
    </FormControl>

    <FormControl id="margin-normal" sx={{ width: 250, margin: 1 }} className='MuiTextField-root' error={!vyr3quantity}>
    
      <TextField
        label="Year3 Quantity"
        labelId="demo-simple-select-label"
        type="number"
        inputProps={{ min: 1 }}
        value={yr3quantity}
        onChange={handleyr3quantity}
      />
      <FormHelperText>Enter a quantity (minimum 1)</FormHelperText>
    </FormControl>
 

    <FormControl id="margin-normal" sx={{ width: 250, margin: 1 }} className='MuiTextField-root' error={!vyr3budget}>
    
    <TextField
      label="Year3 Budget"
      labelId="demo-simple-select-label"
      type="number"
      inputProps={{ min: 1 }}
      value={yr3budget}
      onChange={handleyr3budget}
    />
    <FormHelperText>Enter budget </FormHelperText>
  </FormControl>


      

        {/* <button type='button' onClick={ticketsave} className="mr-3 bg-orange-200 w-[100px] h-[46px] hover:bg-orange-500 hover:text-white mt--[2px] rounded" style={{ width:100, height:46, marginTop:2, borderRadius:14}}>Save</button> */}
        <button type='button' onClick={handleClose7} className="mr-3 bg-gray-200 w-[100px] h-[46px] hover:bg-gray-500 hover:text-white mt--[2px] rounded" style={{ width:100, height:46, marginTop:2, borderRadius:14}}>Close</button>
         
    
        </Box>
      </Modal>

</Grid>
     
      </Grid>

      

      
      <Redbar1 />
      <div className="text-center"> 
      <Grid item container spacing={2} sx={{ marginLeft:1, marginTop:1, marginBottom:1,  }}>
      <Grid xs={3} >
        {isloading ?
        <button type='button' onClick={budgetrequestsave} className="bg-gray-200 w-[100px] h-[46px] hover:bg-gray-500 hover:text-white mt-[2px] rounded" >Save</button> 
        :
        <div className='text-center'>
       <CircularProgress/>
       </div>}

       </Grid>
      <Grid xs={6} >{viewerror && <Alert sx={{fontWeight: 'bold', color:"red", marginLeft:3}} severity="error">{errormessage}</Alert>} </Grid>
      <Grid xs={3} ><button type='button' onClick={handleclose} className="bg-gray-200 w-[100px] h-[46px] hover:bg-gray-500 hover:text-white mt--[2px] rounded" style={{ width:100, height:46, marginTop:2, borderRadius:14}}>Close</button></Grid>
      </Grid>
      </div>
      <br/>
    </Paper>

  )
}
