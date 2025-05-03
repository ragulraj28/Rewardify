import React from 'react';
import { useEffect } from 'react';
import api from '../../../utils/axios/axios';
import logoGreen from '../../../assets/icons/logogreen.png'
const Settlements = () => {
    
  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const response = await api.post(`/v1/store-user/settlements/list`);
    //     console.log(response);
    //   } catch (err) {
    //     console.error('Error fetching data:', err);
    //   }
    // };

    // fetchData();
  }, []);

return (
  <>
    <div className='settlements' >
      <div className='settlement_info'>
            <img src={logoGreen} alt='logo'></img>
            <div className='info'>
                <h3>Weekly Settlements(10 Apr - 17 Apr) </h3>
                <p>Paid on Apr 11, 2024 at 4:30PM</p>
                <h5>REWARDIFY(weekly Settlement)</h5>
                <span>1week ago</span>
            </div>
        </div>
        <div className='payment_detail'>
            <h5>-₹3326.00</h5>
            <p className='paid'>Paid</p>
            <p className='view'>view</p>
        </div>
    </div>
  </> 
)
}

export default Settlements