import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

const BudgetForm = () => {
  const [formData, setFormData] = useState({
    projectName: '',
    dept: '',
    projectProgram: '',
    justification: '',
    projectType: '',
    riskImpactBenefits: '',
    businessDriversKPIs: '',
    servicesImpacted: '',
    category: '',
    missionAlignment: '',
    vendor: '',
    baselineQuantities: 0,
    currency: '',
    unitPriceOriginalCurrency: 0,
    fy25Qty: 0,
    fy25Budget: 0,
    earlyLoad: 0,
    mindTheGap: false,
    projectPriority: '',
    fy26ProjectedQty: 0,
    fy26Budget: 0,
    fy27ProjectedQty: 0,
    fy27Budget: 0,
  });
  const [statusmessage, setStatusMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here, e.g., send data to server
    console.log('Form Data Submitted:', formData);
  };

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
      <Grid item container spacing={2} sx={{ margin: 2 }}>
        <Grid item xs={6} sm={7} sx={{ margin: 1 }}>
          <div className='flex-none w-58 decoration-4 text-green-700 text-2xl ml-8 font-bold'><h3> Create Incident</h3></div>
        </Grid>
        <Grid item xs={6} sm={3} sx={{ margin: 1 }}>
          <Alert severity="info" sx={{ fontWeight: 'bold', color: "red", marginLeft: 3 }}>{statusmessage}</Alert>
        </Grid>
      </Grid>
      {/* ... Rest of your JSX code */}
    </Paper>
  );
};

export default BudgetForm;
