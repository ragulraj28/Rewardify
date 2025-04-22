import React from 'react'
import Actions from './Actions';
import '../style/dashboard.css'
import Transaction from './Transaction';
import Orders from './Orders';
const Body = () => {
    return (
      <div className="body" >
        <div className='body_part1'>
            <Actions />
            <Transaction />
        </div>
        <div className='body_part2'>
            <Orders />
        </div>
      </div>
    );
  };
  

  

export default Body