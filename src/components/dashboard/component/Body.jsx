import React from 'react'
import Actions from './Actions';
import Transaction from './Transaction';
import OrdersContainer from '../../orders/OrdersContainer'
import whatsapp from '../../../assets/whatsapp.png'

const Body = () => {
    return (
      <div className="body" >
        <div className='body_part1'>
            <Actions />
            <Transaction />
        </div>
        <div className='body_part2'>
            <OrdersContainer />
            
        </div>
          <img className='whatsapp' src={whatsapp} alt='whatsapp'></img>
      </div>
    );
  };
  

  

export default Body