import React, { useState } from 'react';

function FinanceTracker() {
  const [balance, setBalance] = useState(1000);  // Default balance
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (type) => {
    if (!amount || !description) {
      alert('Please fill in both fields');
      return;
    }

    const newTransaction = {
      description,
      amount: parseFloat(amount),
      type
    };

    setTransactions([...transactions, newTransaction]);
    
    if (type === 'income') {
      setBalance(balance + parseFloat(amount));
    } else if (type === 'expense') {
      setBalance(balance - parseFloat(amount));
    }

    // Reset input fields
    setAmount('');
    setDescription('');
  };

  return (
    <div>
      <h2>Finance Tracker</h2>
      <div>Current Balance: ${balance.toFixed(2)}</div>
      <input 
        type="text" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        placeholder="Description" 
      />
      <input 
        type="number" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)} 
        placeholder="Amount" 
      />
      <div>
        <button onClick={() => addTransaction('income')}>Add Income</button>
        <button onClick={() => addTransaction('expense')}>Add Expense</button>
      </div>

      <h3>Transactions</h3>
      <ul>
        {transactions.map((trans, index) => (
          <li key={index}>
            {trans.description} - {trans.type === 'income' ? '+' : '-'}${trans.amount.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FinanceTracker;
