import React, { useEffect } from 'react';
import { useState,useRef } from 'react';
import ReactDOM  from 'react-dom/client';
import {Container,TextField,Button,Grid,Box,CardActionArea,Typography,Link,Paper,Avatar, Alert} from '@mui/material';
import Cstatus from './cstatus';
import axios from 'axios';
import logo from '../../images/digilogo.png'
import CryptoJS from "crypto-js";
import { FaSearch, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';



function Login() {
  const [user,setUser]=useState("");
  const [muser,setmUser]=useState("");
  const [vuser,setvUser]=useState(false);
  const userencrypt=useRef("")
  const[userencrypt1,setuserencrypt1]=useState("")
  const[showpassword,setshowpassword]=useState(false)

  const [password,setPassword]=useState("");
  const [mpassword,setmPassword]=useState("");
  const [vpassword,setvPassword]=useState("");
  const pwdencrypt=useRef("")
  const [pwdencrypt1, setpwdencrypt1]=useState("")

  const[loginstatus,setloginstatus]=useState("");

  const[showerror,setshowerror]=useState(false)

  const [otp,setopt]=useState("")
  const[votp,setvotp]=useState(false)
  const[getotp,setgetotp]=useState(true)
  const otpencrypt=useRef("")
  const[otpencrypt1,setotpencrypt1]=useState("")

  const ref = useRef(null);
   const ref1 = useRef(null);
   const focuspwd = useRef(null);

   const timerRef = useRef(null);

  const [loginmessage,setloginmessage]=useState("Please login using your windows credentials")

  const[showeotperror,setshoweotperror]=useState(false)

  const mcc=React.useContext(Cstatus)
    const{setMcname}=React.useContext(Cstatus)
  
  const handleUser =(e) =>{
    setUser(e.target.value);
    var p=e.target.value
    setuserencrypt1(encryptText20(p))
    if(p.length>2){
      setmUser('')
      setvUser(true)
  }
  else{
      setmUser('Enter valid user name')
      setvUser(false)
  }

};
const handlePassword =(e) =>{
    setPassword(e.target.value);
    var p=e.target.value
    setpwdencrypt1(encryptText20(p))
    
    if(p.length>5){
      setmPassword('')
      setvPassword(true)
  }
  else{
      setmPassword('Enter valid password')
      setvPassword(false)
  }

};


const encryptText20 = (stringToEncrypt) => {
  const plainTextArray = CryptoJS.enc.Utf8.parse(stringToEncrypt);
  const keyArray = CryptoJS.enc.Base64.parse("RFdJekZrTzIycWZWTWd4Mg==");
  const iv = CryptoJS.enc.Base64.parse("QWN5bk13aWtNa1c0YzcrbQ==");

  try {
    const encrypted = CryptoJS.AES.encrypt(plainTextArray, keyArray, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });

    return encrypted.toString();
  } catch (ex) {
    console.error(ex);
    return null;
  }
}

useEffect(() => {
  ref1.current.focus();

  return () => clearTimeout(timerRef.current);
},[])



const gotootp=async ()=>{

  let data = JSON.stringify({
    "username": user,
    "password": password
  });

  let logindata=await login();

  if(logindata.isLogin){
    generateotp()
  }
  else{

    setshowerror(true)
    setloginstatus("Invalid user name or password")

  }

  console.log(data)


}

const generateotp =()=>{
   let data = JSON.stringify({
    "phone": user
  });
  
  
  
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:5000/api/accounts/login-with-phone',
    headers: { 
      
      'Content-Type': 'application/json', 
      
    },
    data : data
  };
  
  axios.request(config)
  .then((response) => {
    setgetotp(false)
    setloginmessage("Please Enter OTP send via SMS") 
    timerRef.current= setTimeout(() => {
    ref.current.focus();
    },1000)

  })
  .catch((error) => {
    console.log("Otp fetch failed")
    console.log(error);
    bypassotp()
  });
  
}
const  handleLogin = async ()=>{
 
  if(user.length>3 && password.length>5){
    
    gotootp()
  }
  else{
    setshowerror(true)
    setloginstatus("Invalid user name or password")

  }
  
   
}


   const handlekeypress=(event)=>{
    
    if(event.key === 'Enter'){
      let pass=event.target.value
      
      if(user.length>3 && pass.length>5){
        handleLogin()
       }
       else{
         setshowerror(true)
         setloginstatus("Invalid user name or password")
     
       }
    }
   }

   const handleotp=(e)=>{
    let p=e.target.value
    setopt(e.target.value)
    setotpencrypt1(encryptText20(p))

   }
 

   const handleloginotp=()=>{

    let data = JSON.stringify({
      "username": userencrypt1,
      "password": otpencrypt1
    });
    console.log(data)
    let config = {
      method: 'post',
      url: 'http://localhost:5000/api/accounts/check-phone',
      headers: { 
      
        'Content-Type': 'application/json', 
        
      },
      data : data
    };
    
    axios.request(config)
    .then((response) => {
      console.log(response.data["header"]["responseCode"]==200)
      if(response.data["header"]["responseCode"]==200){
        
        localStorage.setItem('token', true)
        localStorage.setItem('user', JSON.stringify(user))
        setshoweotperror(false)
        let tt=new Date();
        localStorage.setItem('logtime', tt)
        localStorage.setItem("login", false)
        localStorage.setItem('user', user)
        localStorage.setItem('manager',  mcc.mcname["managerstatus"])
        localStorage.setItem('admin', mcc.mcname["adminstatus"])
        localStorage.setItem('company', mcc.mcname["company"])
        localStorage.setItem('menu', mcc.mcname["menu"])
        localStorage.setItem('statu', mcc.mcname["statu"])
        const interval = setTimeout(() => {
          //const mv={ login:false,user:user, manager: mcc.mcname["managerstatus"], admin:mcc.mcname["adminstatus"]}
          const mv={ statu: mcc.mcname["statu"], menu: mcc.mcname["menu"], company: mcc.mcname["company"], login:false,user:user, manager: mcc.mcname["managerstatus"], admin:mcc.mcname["adminstatus"], myroute:0,  incidentno:0, type:"MY", dislist: true, data:[],lview:true}
 
          setMcname(mv)
         }, 1000);

         return () => clearTimeout(interval);
      }
      else{
        setshoweotperror(true)
      }
    })
    .catch((error) => {
      console.log("error encounterred")
      console.log(error);
      setshoweotperror(true)
    });


   
    




   }
   const bypassotp=()=>{
        
    localStorage.setItem('token', true)
    localStorage.setItem('user', JSON.stringify(user))
    setshoweotperror(false)
    let tt=new Date();
    localStorage.setItem('logtime', tt)
    localStorage.setItem("login", false)
    localStorage.setItem('user', user)
    localStorage.setItem('manager',  mcc.mcname["managerstatus"])
    localStorage.setItem('admin', mcc.mcname["adminstatus"])
    localStorage.setItem('company', mcc.mcname["company"])
    localStorage.setItem('menu', mcc.mcname["menu"])
    localStorage.setItem('statu', mcc.mcname["statu"])
    const interval = setTimeout(() => {
      //const mv={ login:false,user:user, manager: mcc.mcname["managerstatus"], admin:mcc.mcname["adminstatus"]}
      const mv={ statu: mcc.mcname["statu"], menu: mcc.mcname["menu"], company: mcc.mcname["company"], login:false,user:user, manager: mcc.mcname["managerstatus"], admin:mcc.mcname["adminstatus"], myroute:0,  incidentno:0, type:"MY", dislist: true, data:[],lview:true}

      setMcname(mv)
     }, 1000);
     console.log("Completed")
     return () => clearTimeout(interval);
  }

 

  const login = async () => {
    let data = {
      password: password,
      phone: user
    };
    
    try {
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:5000/api/accounts/login',
        headers: {
          'Content-Type': 'application/json',
        },
        data: data
      };
  
      const response = await axios.request(config);
      const outputresponse = response.data;
  
      //console.log(response.data);
      // localStorage.setItem('bearer', response.data["access_token"])
  
      console.log("New one" , outputresponse);
      return outputresponse;
    } catch (error) {
      console.log(error);
      return null; // or handle the error as needed
    }
  };

   const handlekeypress1=(event)=>{
    
    if(event.key === 'Enter'){
      //encryptotp()
      handleloginotp()
    }
   }

   const handlefocuspwd=(event)=>{
    if(event.key === 'Enter' && event.target.value.length>3){
      focuspwd.current.focus();
    }
   }

   
   const handleshowpassword=()=>{
    setshowpassword(!showpassword)

   }
   

   const navigateToSignup = () => {
    const mv={ statu: mcc.mcname["statu"], menu: mcc.mcname["menu"], company: mcc.mcname["company"], login:false,user:mcc.mcname["user"], manager: mcc.mcname["managerstatus"], admin:mcc.mcname["adminstatus"], myroute:20, incidentno: '',route:21}
    setMcname(mv)
  };
 
 

  return (
    <div>
     
      <Container maxWidth="xs" >
        
    <Paper elevation={6} sx={{pl:5,pr:5,pb:5, maxWidth: 700,  alignItems: "center"}}>
    
          
          <Box
    sx={{
      marginTop:5,
      alignItems: "center",
      display:"flex",
      flexDirection:"column",

    }}>
        <img src={logo} width="102px" height="102px" className='mt-5'></img>
      
      <Typography gutterBottom variant="h5" component="div" className='logwel'>
            Welcome Back
          </Typography>
          
        <Typography className='logplease'>
        {loginmessage}
        </Typography>
           {getotp ? <div >
            <TextField
            id="Name"
            label ="Phone Number"
            variant="outlined"
            value={user}
            onChange={handleUser}
            onKeyPress={handlefocuspwd}
            fullWidth
            sx={{mt:2}}
            inputRef={ref1} 
            />

            <TextField 
            id="Password"
            label ="Password"
            variant="outlined"
            type={showpassword ? "Text" : "password"}
            value={password}
            onChange={handlePassword}
            onKeyPress={handlekeypress}
            fullWidth
            sx={{mt:2}}
            inputRef={focuspwd}
            InputProps={{endAdornment:  <FaEye onClick={handleshowpassword} className="fa-solid fa-coffee fa-xl cursor-default w-7 h-7 text-gray-600" />}}
            />

           
{showerror && <Alert severity="error">{loginstatus}</Alert>}
            
            <button  type='button'  className="logbutton bg-green-600 text-white hover:bg-green-400 hover:text-white" onClick={handleLogin}>
            LogIn
                    </button >
        </div>
        :
        <div>
            <TextField 
            id="Otp"
            label ="Enter OTP"
            variant="outlined"
            value={otp}
            onChange={handleotp}
            onKeyPress={handlekeypress1}
            fullWidth
            sx={{mt:2}}
            inputRef={ref} 
            />

{showeotperror && <Alert severity="error">Please enter a valid OTP</Alert>}
            
            <button  type='button'  className="logbutton bg-green-600 text-white hover:bg-green-400 hover:text-white" onClick={bypassotp}>
            Verify OTP
                    </button >
        </div>}
           
            </Box>
       
            </Paper>
            {/* Sign Up Link */}
        {/* <Box sx={{ mt: 2, textAlign: 'center' }}>
          <Typography>
            Don't have an account?{' '}
            <Link href="/signup" color="primary" >
              Sign Up
            </Link>
          </Typography>
        </Box> */}
            </Container>
    </div>
  )
}

export default Login

