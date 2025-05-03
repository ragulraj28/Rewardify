import React, { useState } from 'react';
import { IoReload } from "react-icons/io5";
import AllTransaction from './AllTransaction';
import { transactiondetails } from "../utils/allTransactiondetails";
import Settlements from './Settlements';

const Transaction = () => {
  const [activeTab, setActiveTab] = useState('all'); // all | settlements

  return (
    <div className='transaction'>
      <div className='transaction_head'>
        <div className='head_title'>
          <h2>Recent Transaction</h2>
          <button><IoReload className='btn_icon' /></button>
        </div>
        <p>Last Update at: June 02, 2024 | 11:25 PM</p>
        <ul>
          <li
            onClick={() => setActiveTab('all')}
            className={activeTab === 'all' ? 'tab-active' : ''}
          >
            All Transaction
            <div className='line'></div>
          </li>
          <li
            onClick={() => setActiveTab('settlements')}
            className={activeTab === 'settlements' ? 'tab-active' : ''}
          >
            Settlements
            <div className='line'></div>
          </li>
        </ul>
      </div>

      <div className='transaction-tab-container'>
        {activeTab === 'all' ? (
          transactiondetails.map((e, index) => (
            <AllTransaction
              key={index}
              ph_no={e.ph_no}
              payment_method={e.payment_method}
              paid_date={e.paid_date}
              paid_time={e.paid_time}
              time={e.time}
            />
          ))
        ) : (
          <Settlements />
        )}
      </div>
    </div>
  );
};

export default Transaction;
