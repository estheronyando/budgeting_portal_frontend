import React, { useState } from 'react';
import '../../css/budgetingportal/budgetrequestform.css'
import { Alert, Box, Button, Card, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Modal, Paper, Select, TextField, TextareaAutosize } from '@mui/material';
 
const BudgetRequestForm = () => {
  const [formData, setFormData] = useState({
    domain: '',
    dept: '',
    projectProgram: '',
    justification: '',
    projectType: '',
    riskImpactBenefits: '',
    businessDriversKPIs: '',
    servicesImpacted: '',
    category: '',
    missionAlignmentStatement: '',
    vendor: '',
    baselineQuantities: '',
    currency: '',
    unitPriceOriginalCurrency: '',
    Year1Qty: '',
    Year1Budget: '',
    Year1EarlyLoad: '',
    Year1MindTheGap: '',
    Year1Priority: '',
    Year2Qty: '',
    Year2Budget: '',
    Year2EarlyLoad: '',
    Year2MindTheGap: '',
    Year2Priority: '',
    Year3Qty: '',
    Year3Budget: '',
    Year3EarlyLoad: '',
    Year3MindTheGap: '',
    Year3Priority: '',
  });
 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };
 
  return (
<Paper
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1 },
    }}
    noValidate
    autoComplete="off"
    elevation={4}
>
<Grid item container spacing={2} sx={{margin:2}}>
<Grid item xs={6} sm={7}  sx={{ margin: 1 }}>
<div className='flex-none w-58 decoration-4 text-green-700 text-2xl ml-8 font-bold'><h3> Add Budget Request</h3></div>
</Grid>
</Grid>
<Card variant="outlined">
<div className="wrapper">
<h3 className="text-lg font-semibold mb-4 text-blue-500">Budget Request Form</h3>
<form onSubmit={handleSubmit}>
<div className="container">
<div className="sub-container">
            {/* Card 1 - Basic Information */}
<div className="card-container">
<div className="bg-white rounded-lg shadow-md p-6 container">
<h3 className="text-lg font-semibold mb-4">Basic Information</h3>
<div className="form-group">
<label htmlFor="domain">Domain</label>
<input
                    type="text"
                    id="domain"
                    name="domain"
                    value={formData.domain}
                    onChange={handleInputChange}
                    className="border p-2 rounded w-full focus:outline-none focus:border-blue-500"
                  />
</div>
<div className="form-group">
<label htmlFor="dept">Dept</label>
<input
                    type="text"
                    id="dept"
                    name="dept"
                    value={formData.dept}
                    onChange={handleInputChange}
                    className="border p-2 rounded w-full focus:outline-none focus:border-blue-500"
                  />
</div>
                {/* Add more fields for Card 1 */}
</div>
</div>
            {/* Card 2 - Project Details */}
<div className="card-container">
<div className="bg-white rounded-lg shadow-md p-6 container">
<h3 className="text-lg font-semibold mb-4">Project Details</h3>
<div className="form-group">
<label htmlFor="projectProgram">Project/Program</label>
<input
                    type="text"
                    id="projectProgram"
                    name="projectProgram"
                    value={formData.projectProgram}
                    onChange={handleInputChange}
                    className="border p-2 rounded w-full focus:outline-none focus:border-blue-500"
                  />
</div>
<div className="form-group">
<label htmlFor="justification">Justification</label>
<input
                    type="text"
                    id="justification"
                    name="justification"
                    value={formData.justification}
                    onChange={handleInputChange}
                    className="border p-2 rounded w-full focus:outline-none focus:border-blue-500"
                  />
</div>
                {/* Add more fields for Card 2 */}
</div>
</div>
            {/* Card 3 - Budget and Financials */}
<div className="card-container">
<div className="bg-white rounded-lg shadow-md p-6 container">
<h3 className="text-lg font-semibold mb-4">Budget and Financials</h3>
<div className="form-group">
<label htmlFor="Year1Qty">Year 1 Quantity</label>
<input
                    type="text"
                    id="Year1Qty"
                    name="Year1Qty"
                    value={formData.Year1Qty}
                    onChange={handleInputChange}
                    className="border p-2 rounded w-full focus:outline-none focus:border-blue-500"
                  />
</div>
<div className="form-group">
<label htmlFor="Year1Budget">Year 1 Budget</label>
<input
                    type="text"
                    id="Year1Budget"
                    name="Year1Budget"
                    value={formData.Year1Budget}
                    onChange={handleInputChange}
                    className="border p-2 rounded w-full focus:outline-none focus:border-blue-500"
                  />
</div>
                {/* Add more fields for Card 3 */}
</div>
</div>
</div>
<div className="flex justify-end mt-4">
<button
              type="submit"
              className="submit bg-blue-500 text-white p-2 rounded hover:bg-blue-700 focus:outline-none"
>
              Submit
</button>
</div>
</div>
</form>
</div>
</Card>
 
  </Paper>
  );
};
 
export default BudgetRequestForm;