import Header from './header/Header';
import './Contact.css';
import bannerImage from '../../../assets/hero-banner.svg';
import Button from '../../common/button/Button';
import Popup from '../popup/Popup';
import popupLogo from '../../../assets/handshake.svg'
import { ChevronIcon, PhoneIcon, WhatsappIcon } from '../../../assets/icons/icon';
import { useRef, useState } from 'react';
import { usePopup } from '../../../utils/popupContext/PopupContext';

const Card = ({title, excerpt, children}) => {
    return(
        <div className="contact-page-card">
            <h2 className='page-title'>
                {title}
            </h2>
            <p className="excerpt">{excerpt}</p>
            {children}
        </div>
    )
}

const popup = (hidePopup) => {
    return (
    <Popup logo={popupLogo}>
        <h1 className="page-title">Thanks For Submitting the Contact Form</h1>
        <p className="excerpt">We will get back to you Shortly</p>
        <Button btnText={'Continue'} icon={<ChevronIcon />} iconPosition='right' onClick={() => hidePopup()}/>
    </Popup> )
}

const Contact = () => {

    const[isSubmitted, setIsSubmitted] = useState(false);
    const contactDetails = useRef({
        ownerName : null,
        shopName : null,
        location : null,
        phoneNumber : null
    })

    const { showPopup, hidePopup } = usePopup();

    const submitHandler = (e) => {
        e.preventDefault();
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
                        <input type="text" placeholder='Enter Your Full Name' ref={el => contactDetails.current.ownerName = el}/>
                        <label>Shop Name</label>
                        <input type="text" placeholder='Enter the Shop Name' ref={el => contactDetails.current.shopName = el}/>
                        <label>Location</label>
                        <input type="text" placeholder='Enter your Location(eg: Indiranagar, Bangalore)' ref={el => contactDetails.current.location = el}/>
                        <label>Phone Number</label>
                        <input type="text" placeholder='Enter Your Phone Number' ref={el => contactDetails.current.phoneNumber = el}/>
                        <Button btnText={"Submit"} onClick={submitHandler}/>
                    </form>
                </div>

            }
            <Card title={"Enter Store details"} excerpt={"Enter details Manually to get started into REWARDIFY"}>
                <Button btnText={'Get Started'} icon={<ChevronIcon />} iconPosition='right'/>
            </Card>
        </div>
    </div>
  )
}

export default Contact
