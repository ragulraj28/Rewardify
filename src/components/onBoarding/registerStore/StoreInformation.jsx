import React, { useState } from 'react'
import CardWrapper from './CardWrapper'
import Checkbox from './checkbox/Checkbox'
import { ClockIcon } from '../../../assets/icons/icon'
import Button from '../../common/button/Button'
import UploadImage from './UploadImage'
import { useForm } from 'react-hook-form'

const StoreInformation = ( {setActivePage} ) => {
    const { register, handleSubmit, setError, clearErrors, formState:{ errors } } = useForm();
    const[image, setImage] = useState(null);

    const storeInfoSubmitHandler = (data) => {        
        const isAnyDaySelected = Object.values(data.workingDays || {}).some(val => val === true);
        if (!isAnyDaySelected) {
            setError('workingDays', {
            type: 'manual',
            message: 'Please select at least one working day',
            });
            return;
        } else {
            clearErrors('workingDays');
        }
        console.log(data);
        
        setActivePage('storeDocument');
    }
  return (
    <div className='store-information'>
        <h2 className="page-sub-title">Store Information</h2>
        <form onSubmit={handleSubmit(storeInfoSubmitHandler)}>
            <CardWrapper title={'Owner Information'}>
                <input type="text" {...register('ownerName', {required:"Owner name is required"})} placeholder="Owner's Name" />
                {errors.ownerName && <p className="form-error">{errors.ownerName.message}</p>}
                <input type="email" {...register('emailAddress', {required:"Email is required", pattern:{ value:/^[\w\.-]+@[\w\.-]+\.\w{2,}$/, message:"Invalid email"}})} placeholder="Email Address" />
                {errors.emailAddress && <p className="form-error">{errors.emailAddress.message}</p>}
                <div className="verify-input">
                    <input type="phone" {...register('phoneNumber', {required:"Phone number is required", pattern:{ value:/^\+?\d{10,15}$/, message:"Invalid phone number"}})} placeholder="Mobile Number" />
                    <button className='verify-btn'>Verify</button>
                </div>
                {errors.phoneNumber && <p className="form-error">{errors.phoneNumber.message}</p>}
                <div className="card-footer">
                    <p className="card-excerpt">
                        By providing your <a href="#">Whatsapp Number</a> to get updates on payments, order confirmation etc
                    </p>
                    <Checkbox id='whatsapp' labelText={'My whatsapp number is same as above'}/>
                    <Checkbox id='differentWhatsapp' labelText={'I have a different whatsapp number'}/>
                </div>
            </CardWrapper>
            <CardWrapper title={'Store Information'}>
                <input type="text" {...register('storeName', {required:"Store name is required"})} placeholder='Store Name' />
                {errors.storeName && <p className="form-error">{errors.storeName.message}</p>}
                <input type="text" {...register('storeAddress', {required:"Store address is required"})} placeholder='Store Full Address' />
                {errors.storeAddress && <p className="form-error">{errors.storeAddress.message}</p>}
                <Checkbox id='sameAsContactNumber' labelText={'Same as my contact number'}/>
                <div className="verify-input">
                    <input type="phone" {...register('storePhoneNumber', {required:"Store contact number is required", pattern:{ value:/^\+?\d{10,15}$/, message:"Invalid phone number"}})} placeholder="Store Contact Number" />
                    <button className='verify-btn'>Verify</button>
                </div>
                {errors.storePhoneNumber && <p className="form-error">{errors.storePhoneNumber.message}</p>}
                <input type="text" {...register('storeLocation')} placeholder='Store Location' />
            </CardWrapper>
            <CardWrapper title={'Working Days'}>
                <div className="flex flex-col gap-y-2 gap-x-10 flex-wrap max-h-[150px]">
                    <Checkbox {...register('workingDays.monday')} id={"monday"} labelText={"Monday"}/>
                    <Checkbox {...register('workingDays.tuesday')} id={"tuesday"} labelText={"Tuesday"}/>
                    <Checkbox {...register('workingDays.wednesday')} id={"wednesday"} labelText={"Wednesday"}/>
                    <Checkbox {...register('workingDays.thursday')} id={"thursday"} labelText={"Thursday"}/>
                    <Checkbox {...register('workingDays.friday')} id={"friday"} labelText={"Friday"}/>
                    <Checkbox {...register('workingDays.saturday')} id={"saturday"} labelText={"Saturday"}/>
                    <Checkbox {...register('workingDays.sunday')} id={"sunday"} labelText={"Sunday"}/>
                </div>
                {errors.workingDays && <p className="form-error">{errors.workingDays.message}</p>}
            </CardWrapper>
            <CardWrapper title={"Working Time"} excerpt={"Select the Opening & Closing Time"}>
                <div className="flex gap-4 items-center">
                    <div className="time-input">
                        <ClockIcon />
                        <input type="text" {...register('storeOpenTime', {required:"Store timing is required"})} placeholder='0:00 AM'/>
                    </div>
                    <div className="time-input">
                        <ClockIcon />
                        <input type="text" {...register('storeCloseTime', {required:"Store timing is required"})} placeholder='0:00 PM'/>
                    </div>
                </div>
                {(errors.storeOpenTime || errors.storeCloseTime) &&<p className="form-error">{errors?.storeOpenTime?.message || errors?.storeCloseTime?.message}</p>}
            </CardWrapper>
            <CardWrapper title={"Upload Store Image"} excerpt={"Uploading image will help customer to easily recognize your store "}>
                <UploadImage {...register('storeImage')} image={image} setImage={setImage}/>
            </CardWrapper>
            <Button btnType={"submit"} btnText={'Continue'}/>
        </form>
    </div>
  )
}

export default StoreInformation