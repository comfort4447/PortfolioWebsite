import React, { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import Sidebar from '../Siderbar/Sidebar';
import './Transfer.css';
import { Link, useNavigate } from 'react-router-dom';

const Transfer = () => {
  const navigate = useNavigate();
  const [recipient, setRecipient] = useState('');
  const [accountData, setAccountData] = useState<any>(null);

  useEffect(() => {
    fetchAccountData();
  }, []);

  const onSubmit = async (data: { amount: string }) => {
    try {
      const amount = data.amount.trim(); // Trim any leading or trailing whitespace
      if (!amount || isNaN(Number(amount))) {
        // Check if the amount is empty or not a valid number
        throw new Error('Please enter a valid amount');
      }

      const formData = new FormData();
      formData.append('amount', amount);
      formData.append('accountNumber', recipient);

      const id = localStorage.getItem('id');
      const recipientId = accountData.find((account: any) => account.account_Number === recipient)?.id;
      const baseURL = `http://localhost:4000/Accounts/${id}/send-money/:recipientId`
      
      const response = await axios.post(baseURL, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      });

      console.log(response.data);
      alert('Transfer done successfully');
      navigate('/dashboard');
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        console.log(axiosError.response.data);
      } else {
        console.log(axiosError.message);
      }
    }
  };

  const handleRecipientChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRecipient(event.target.value);
  };

  const fetchAccountData = async () => {
    try {
      const baseURL1 = 'http://localhost:4000/Accounts/getAccounts';
      const response = await axios.get(baseURL1, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      });
      setAccountData(response.data);

      // Extract account numbers from the response data and update the dropdown options
      const accountNumbers = response.data.map((account: any) => account.account_Number);
      setRecipient(accountNumbers[0]); // Set the first account number as the initial value
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        console.log(axiosError.response.data);
      } else {
        console.log(axiosError.message);
      }
    }
  };

  return (
    <div className="Appp">
      <div className="AppGlass">
        <Sidebar />
        <div className="Card">
          <h2>Transfer Form</h2>
          <div className="Card">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target as HTMLFormElement);
                const amount = formData.get('amount') as string;
                onSubmit({ amount });
              }}
            >
              <div className="form-group">
                <label htmlFor="recipient">Recipient</label>
                <select id="recipient" name="recipient" value={recipient} onChange={handleRecipientChange}>
                  {accountData &&
                    accountData.map((account: any) => (
                      <option key={account.account_Number} value={account.account_Number}>
                        {account.account_Number}
                      </option>
                    ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="amount">Amount</label>
                <input type="number" id="amount" name="amount" />
              </div>
              <button type="submit">Transfer</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transfer;
