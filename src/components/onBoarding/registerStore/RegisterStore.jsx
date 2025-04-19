import './RegisterStore.css'
import StoreInformation from './StoreInformation'
import Header from '../contact/header/Header'
import StoreDocument from './StoreDocument'
import Agreement from './Agreement'
import { useState } from 'react'

const RegisterStore = () => {

  const[activePage, setActivePage] = useState('storeInformation');

  return (
    <>
      <Header />
      <div className='register-store'>
          <h1 className="page-title">Start your Onboarding Process with Us</h1>
          <p className="excerpt">Kindly fill the all information correctly to get onboarded quickly with REWARDIFY</p>
          <div className="content-wrapper">
            <div className="flex-1 flex justify-end">
              <div className="sidebar">
                <div className={`step ${activePage === 'storeInformation' && 'active'}`}>
                  <span className='step-tagline'>Step 1</span>
                  <h3 className='step-title'>Store Information</h3>
                  <p className="step-excerpt">Owner name , Store location, Store address</p>
                </div>
                <div className={`step ${activePage === 'storeDocument' && 'active'}`}>
                  <span className='step-tagline'>Step 2</span>
                  <h3 className='step-title'>Store Document</h3>
                  <p className="step-excerpt">GSTIN Number , PAN Number, Bank details</p>
                </div>
                <div className={`step ${activePage === 'agreement' && 'active'}`}>
                  <span className='step-tagline'>Step 3</span>
                  <h3 className='step-title'>Agreement</h3>
                  <p className="step-excerpt">REWARDIFY partner Agreement</p>
                </div>
              </div>
            </div>
            <div className="flex-1 flex justify-start">
              <div className="form-wrapper">
                {activePage === 'storeInformation' && <StoreInformation setActivePage={setActivePage} />}
                {activePage === 'storeDocument' && <StoreDocument setActivePage={setActivePage} />}
                {activePage === 'agreement' &&<Agreement />}
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default RegisterStore