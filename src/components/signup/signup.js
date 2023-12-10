// import React, { useState, useRef } from 'react';
// import { Container, TextField, Button, Box, Paper, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
// import axios from 'axios';
// import CryptoJS from 'crypto-js';
// import Cstatus from '../login/cstatus';

// function Signup() {
//   const [fname, setFname] = useState("");
//   const [lname, setLname] = useState("");
//   const [password, setPassword] = useState("");
//   const [phone, setPhone] = useState("");
//   const [gender, setGender] = useState("");
//   const [email, setEmail] = useState("");

//   const [showError, setShowError] = useState(false);
//   const [signupStatus, setSignupStatus] = useState("");

//   const refFname = useRef(null);
//   const refLname = useRef(null);
//   const refPassword = useRef(null);
//   const refPhone = useRef(null);
//   const refGender = useRef(null);
//   const refEmail = useRef(null);

//   const mcc=React.useContext(Cstatus)
//     const{setMcname}=React.useContext(Cstatus)

//     const[myroute,setmyroute]=React.useState(localStorage.getItem('myroute')) 

//   const handleSignup = async () => {
//     if (fname && lname && password && phone && gender && email) {
//       // You can add your signup logic here, e.g., make an API call to register the user
//       console.log("Signup data:", { fname, lname, password, phone, gender, email });
//       setShowError(false);
//       setSignupStatus("User registered successfully!");
//     } else {
//       setShowError(true);
//       setSignupStatus("Please fill in all fields.");
//     }
//   };

//   const handleKeyPress = (event, ref) => {
//     if (event.key === 'Enter') {
//       ref.current.focus();
//     }
//   };

//   return (
//     <div>
//       <Container maxWidth="xs">
//         <Paper elevation={6} sx={{ pl: 5, pr: 5, pb: 5, maxWidth: 700, alignItems: "center" }}>
//           <Box
//             sx={{
//               marginTop: 5,
//               alignItems: "center",
//               display: "flex",
//               flexDirection: "column",
//             }}
//           >
//             <Typography gutterBottom variant="h5" component="div" className='logwel'>
//               Sign Up
//             </Typography>

//             <TextField
//               id="fname"
//               label="First Name"
//               variant="outlined"
//               value={fname}
//               onChange={(e) => setFname(e.target.value)}
//               onKeyPress={(e) => handleKeyPress(e, refLname)}
//               fullWidth
//               sx={{ mt: 2 }}
//               inputRef={refFname}
//             />

//             <TextField
//               id="lname"
//               label="Last Name"
//               variant="outlined"
//               value={lname}
//               onChange={(e) => setLname(e.target.value)}
//               onKeyPress={(e) => handleKeyPress(e, refPassword)}
//               fullWidth
//               sx={{ mt: 2 }}
//               inputRef={refLname}
//             />

//             <TextField
//               id="password"
//               label="Password"
//               variant="outlined"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               onKeyPress={(e) => handleKeyPress(e, refPhone)}
//               fullWidth
//               sx={{ mt: 2 }}
//               inputRef={refPassword}
//               autoComplete="off"
//             />

//             <TextField
//               id="phone"
//               label="Phone Number"
//               variant="outlined"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               onKeyPress={(e) => handleKeyPress(e, refGender)}
//               fullWidth
//               sx={{ mt: 2 }}
//               inputRef={refPhone}
//               autoComplete="off"
//             />

//             <FormControl fullWidth sx={{ mt: 2 }}>
//               <InputLabel id="gender-label">Gender</InputLabel>
//               <Select
//                 labelId="gender-label"
//                 id="gender"
//                 value={gender}
//                 label="Gender"
//                 onChange={(e) => setGender(e.target.value)}
//                 inputRef={refGender}
//               >
//                 <MenuItem value="male">Male</MenuItem>
//                 <MenuItem value="female">Female</MenuItem>
//                 <MenuItem value="other">Other</MenuItem>
//               </Select>
//             </FormControl>

//             <TextField
//               id="email"
//               label="Email"
//               variant="outlined"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               onKeyPress={(e) => handleKeyPress(e, refEmail)}
//               fullWidth
//               sx={{ mt: 2 }}
//               inputRef={refEmail}
//             />

//             {showError && <Typography color="error" sx={{ mt: 2 }}>{signupStatus}</Typography>}

//             <Button
//               type="button"
//               className="logbutton bg-green-600 text-white hover:bg-green-400 hover:text-white"
//               onClick={handleSignup}
//               sx={{ mt: 2 }}
//             >
//               Sign Up
//             </Button>

//           </Box>
//         </Paper>
//       </Container>
//     </div>
//   );
// }

// export default Signup;
