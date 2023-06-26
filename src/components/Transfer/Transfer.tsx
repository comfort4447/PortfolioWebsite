import React from 'react';
import Sidebar from "../Siderbar/Sidebar";
import "./Transfer.css";

const Transfer = () => {
  return (
    <div className="Appp">
      <div className="AppGlass">
        <Sidebar />
        <div className="Card">
          <h2>Transfer Form</h2>
          <div className="Card">
            <form>
              <div className="form-group">
                <label htmlFor="sender">Sender</label>
                <input type="text" id="sender" name="sender" />
              </div>
              <div className="form-group">
                <label htmlFor="recipient">Recipient</label>
                <input type="text" id="recipient" name="recipient" />
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
