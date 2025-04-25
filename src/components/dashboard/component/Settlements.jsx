import React from 'react';
import { useEffect } from 'react';
import '../style/settlements.css'
import api from '../../../utils/axios/axios';
import logoGreen from '../../../assets/icons/logogreen.png'
const Settlements = () => {
    
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.post(`/v1/store-user/settlements/list`);
        console.log(response);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };

    fetchData();
  }, []);

return (
        <div className='settlements' >
          
          <div className='settlement_info'>
                <img src={logoGreen} alt='logo' style={{height:"44px",width:"44px"}}></img>
                <div className='info'>
                    <h3>Weekly Settlements(10 Apr - 17 Apr) </h3>
                    <p>Paid on Apr 11, 2024 at 4:30PM</p>
                    <h5>REWARDIFY(weekly Settlement)</h5>
                    <span>1week ago</span>
                </div>
            </div>
            <div className='payment_detail'>
                <h5>-₹3326.00</h5>
                <div className='details'>
                    <p className='paid'>Paid</p>
                    <p className='view'>view</p>
                </div>
            </div>
          
{/*             
            <div style={{width: '100%',height: '1px',backgroundColor: 'rgba(134, 140, 154, 1)',margin: '0 12px'}}></div> */}
        </div>
    
)
}

export default Settlements