import Header from './header/Header';
import bannerImage from '../../../assets/hero-banner.svg';
import Button from '../../common/button/Button';
import Popup from '../popup/Popup';
import popupLogo from '../../../assets/handshake.svg'
import { ChevronIcon, PhoneIcon, WhatsappIcon } from '../../../assets/icons/icon';
import api from '../../../utils/axios/axios';
import { usePopup } from '../../../utils/popupContext/PopupContext';
import { useNavigate } from 'react-router';
import { set, useForm } from 'react-hook-form';
import { useState } from 'react';
import Card from '../common/cardLayout/Card';

const popup = (hidePopup) => {
    return (
    <Popup logo={popupLogo}>
        <h1 className="page-title">Thanks For Submitting the Contact Form</h1>
        <p className="excerpt">We will get back to you Shortly</p>
        <Button btnText={'Continue'} icon={<ChevronIcon />} iconPosition='right' onClick={() => hidePopup()}/>
    </Popup> )
}

const Contact = () => {

    const { register, handleSubmit, formState:{ errors, isSubmitting}} = useForm();

    const { showPopup, hidePopup } = usePopup();
    const[isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate();

    const submitHandler = async (data) => {        
        
        console.log(data);
        setIsSubmitted(true);
        showPopup(popup(hidePopup));
       
    }

  return (
    <div className={`contact-us`}>
        <Header />
        <div className="hero-banner">
            <img src={bannerImage} alt="hero-image" />
        </div>
        <div className="content-wrapper">
            <h1 className="page-title">Contact Form</h1>
            <p className="excerpt">Fill the contact form, One of our executives will reach out to you Shortly</p>
            { isSubmitted ? 

                <>
                    <Card title={'We have Received Your Contact Form'} excerpt={'We will get back to you Shortly, If you have any quires contact us below'} />
                    <Card title={'Contact Us'} excerpt={'For any enquiries contact us'}>
                        <Button btnText={'Contact via Call'} icon={<PhoneIcon />} btnStyle='outline'/>
                        <Button btnText={'Contact Via WhatsApp'} icon={<WhatsappIcon />} btnStyle='outline'/>
                    </Card>
                </>

            :

                <div className="form-wrapper">
                    <form>
                        <label>Owner Name</label>
                        <div className="input-wrapper">
                            <input {...register("ownerName", {required: "Owner name is required"})} placeholder='Enter Your Full Name'/>
                            {errors.ownerName && <p className="form-error">{errors.ownerName.message}</p>}
                        </div>
                        <label>Shop Name</label>
                        <div className="input-wrapper">
                            <input {...register("shopName", {required: "Shop name is required"})} placeholder='Enter the Shop Name'/>
                            {errors.shopName && <p className="form-error">{errors.shopName.message}</p>}
                        </div>                       
                        <label>Location</label>
                        <div className="input-wrapper">
                            <input {...register("shopLocation", {required: "Shop location is required"})} placeholder='Enter your Location(eg: Indiranagar, Bangalore)'/>
                            {errors.shopLocation && <p className="form-error">{errors.shopLocation.message}</p>}
                        </div>
                        <label>Phone Number</label>
                        <div className="input-wrapper">
                            <input {...register("phoneNumber", {required: "Phone number is required" ,pattern: {value: /^\+?\d{10,15}$/, message: "Enter a valid phone number"}})} placeholder='Enter Your Phone Number'/>
                            {errors.phoneNumber && <p className="form-error">{errors.phoneNumber.message}</p>}
                        </div>                       
                        <Button btnText={`${isSubmitting ? 'Submitting...' : 'Submit'}`} onClick={handleSubmit(submitHandler)}/>
                    </form>
                </div>

            }
            <Card title={"Enter Store details"} excerpt={"Enter details Manually to get started into REWARDIFY"}>
                <Button btnText={'Get Started'} icon={<ChevronIcon />} iconPosition='right' onClick={() => navigate('/register-store')}/>
            </Card>
        </div>
    </div>
  )
}

export default Contact
