import React, { useState, useEffect } from 'react';
import BudgetForm from './budgetform'; // Import the BudgetForm component

const UserDashboard = () => {
  const [budgetSubmitted, setBudgetSubmitted] = useState(false);
  const [submittedBudgets, setSubmittedBudgets] = useState([]);

  useEffect(() => {
    // Simulate fetching submitted budget requests
    // Replace '/api/submitted-budgets' with your actual backend endpoint
    const fetchSubmittedBudgets = async () => {
      try {
        const response = await fetch('/api/submitted-budgets');
        const data = await response.json();
        setSubmittedBudgets(data);
      } catch (error) {
        console.error('Error fetching submitted budgets:', error);
      }
    };

    fetchSubmittedBudgets();
  }, [budgetSubmitted]);

  const handleSubmitBudget = async (budgetDetails) => {
    
    try {
      
      await fetch('/api/submit-budget', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(budgetDetails),
      });

      setBudgetSubmitted(true);
    } catch (error) {
      console.error('Error submitting budget:', error);
    }
  };

  return (
    <div>
      <h1>User Dashboard</h1>

      {!budgetSubmitted ? (
        <div>
          <h2>Submit Budget Request</h2>
          <BudgetForm onSubmit={handleSubmitBudget} />
        </div>
      ) : (
        <div>
          <p>Budget request submitted successfully!</p>
        </div>
      )}

      <div>
        <h2>Submitted Budget Requests</h2>
        {submittedBudgets.map((budget) => (
          <BudgetCard key={budget.id} status="Submitted" {...budget} />
        ))}
      </div>
    </div>
  );
};

const BudgetCard = ({ status, project, amount, justification }) => (
  <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', margin: '16px 0' }}>
    <h3>{status} Budget Request</h3>
    <p>Project: {project}</p>
    <p>Amount: {amount}</p>
    <p>Justification: {justification}</p>
  </div>
);

export default UserDashboard;
