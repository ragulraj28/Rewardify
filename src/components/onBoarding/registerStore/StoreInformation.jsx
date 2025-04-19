import React, { useState } from 'react'
import CardWrapper from './CardWrapper'
import Checkbox from './checkbox/Checkbox'
import { ClockIcon } from '../../../assets/icons/icon'
import Button from '../../common/button/Button'
import UploadImage from './UploadImage'

const StoreInformation = ( {setActivePage} ) => {
    const[image, setImage] = useState(null);
  return (
    <div className='store-information'>
        <h2 className="page-sub-title">Store Information</h2>
        <CardWrapper title={'Owner Information'}>
            <input type="text" placeholder="Owner's Name" />
            <input type="email" placeholder="Email Address" />
            <div className="verify-input">
                <input type="phone" placeholder="Mobile Number" />
                <button className='verify-btn'>Verify</button>
            </div>
            <div className="card-footer">
                <p className="card-excerpt">
                    By providing your <a href="#">Whatsapp Number</a> to get updates on payments, order confirmation etc
                </p>
                <Checkbox id='whatsapp' labelText={'My whatsapp number is same as above'}/>
                <Checkbox id='differentWhatsapp' labelText={'I have a different whatsapp number'}/>
            </div>
        </CardWrapper>
        <CardWrapper title={'Store Information'}>
            <input type="text" placeholder='Store Name' />
            <input type="text" placeholder='Store Full Address' />
            <Checkbox id='sameAsContactNumber' labelText={'Same as my contact number'}/>
            <div className="verify-input">
                <input type="phone" placeholder="Store Contact Number" />
                <button className='verify-btn'>Verify</button>
            </div>
            <input type="text" placeholder='Store Location' />
        </CardWrapper>
        <CardWrapper title={'Working Days'}>
            <div className="flex flex-col gap-y-2 gap-x-10 flex-wrap max-h-[150px]">
                <Checkbox id={"monday"} labelText={"Monday"}/>
                <Checkbox id={"tuesday"} labelText={"Tuesday"}/>
                <Checkbox id={"wednesday"} labelText={"Wednesday"}/>
                <Checkbox id={"thursday"} labelText={"Thursday"}/>
                <Checkbox id={"friday"} labelText={"Friday"}/>
                <Checkbox id={"saturday"} labelText={"Saturday"}/>
                <Checkbox id={"sunday"} labelText={"Sunday"}/>
            </div>
        </CardWrapper>
        <CardWrapper title={"Working Time"} excerpt={"Select the Opening & Closing Time"}>
            <div className="flex gap-4 items-center">
                <div className="time-input">
                    <ClockIcon />
                    <input type="text" placeholder='0:00 AM'/>
                </div>
                <div className="time-input">
                    <ClockIcon />
                    <input type="text" placeholder='0:00 PM'/>
                </div>
            </div>
        </CardWrapper>
        <CardWrapper title={"Upload Store Image"} excerpt={"Uploading image will help customer to easily recognize your store "}>
            <UploadImage image={image} setImage={setImage}/>
        </CardWrapper>
        <Button btnText={'Continue'} onClick={() => setActivePage('storeDocument')}/>
    </div>
  )
}

export default StoreInformation