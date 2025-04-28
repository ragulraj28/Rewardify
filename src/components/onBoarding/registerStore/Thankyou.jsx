import React from 'react'
import { PhoneIcon, WhatsappIcon } from '../../../assets/icons/icon'
import Button from '../../common/button/Button'
import Card from '../common/cardLayout/Card'
import storeImg from '../../../assets/store.svg'

const Thankyou = () => {
  return (
    <div className='thankyou '>
        <div className="acknowledgement">
            <img src={storeImg} alt="store-img" />
            <h1 className='page-title'>Thanks for the details</h1>
            <p className="excerpt">We're working to launch your store live in the market very soon. Once we done our verification we will send you the credentials</p>
        </div>
        <Card title={'Contact Us'} excerpt={'For any enquiries contact us'}>
            <Button btnText={'Contact via Call'} icon={<PhoneIcon />} btnStyle='outline'/>
            <Button btnText={'Contact Via WhatsApp'} icon={<WhatsappIcon />} btnStyle='outline'/>
        </Card>
    </div>
  )
}

export default Thankyou