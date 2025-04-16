import { useEffect, useState } from "react";
import "./Login.css";
import bgImage from "../../../assets/login-background.svg";
import LoginCard from "./LoginCard";
import logo from "../../../assets/rewardify-logo.svg";
import store_logo from "../../../assets/store.svg";
import Button from "../../common/button/Button";
import OTPInput from "./OTPInput";
import api from "../../../utils/axios/axios";
import StoreCard from "../storeCard/StoreCard";
import { useNavigate } from "react-router";
import { GENERATE_OTP_URL, LOGIN_URL } from "../../../utils/axios/apiURL";
import { useDispatch, useSelector } from "react-redux";
import { setTokens } from "../../../utils/slices/authSlice";

const Login = () => {
  const { accessToken, isOrganizationUser, stores } = useSelector(state => state.auth);
  const [screen, setScreen] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState(Array(4).fill(""));
  const [secondsLeft, setSecondsLeft] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();  

  // Check if user is already authenticated and navigate to the correct page
  useEffect(() => {
    if (accessToken) {
      authNavigation(isOrganizationUser, stores);
    }
  }, [accessToken, isOrganizationUser, stores]);

  useEffect(() => {
    if (screen === "otp" && secondsLeft === null) setSecondsLeft(55);
    if (screen !== "otp") return;
    if (secondsLeft === 0) return;
    const timer = setInterval(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearInterval(timer);
  }, [screen, secondsLeft]);

  const authNavigation = (isOrganizationUser, stores) => {
    if (isOrganizationUser) {
      stores.length > 0 && stores.length < 2 ? navigate('dashboard') : setScreen('store');     
    } else {
      setScreen('noStore');
    }
  }

  const generateOTP = async () => {
    try {
      await api.post(GENERATE_OTP_URL, {
        dialCode: 91,
        contactNo: phoneNumber,
      });
      setScreen("otp");
    } catch (error) {
      console.error(error);
    }
  };

  const verifyOTP = async () => {
    try {     
      const response = await api.post(
        LOGIN_URL,
        {
          dialCode: +91,
          contactNo: phoneNumber,
          type: 1,
          otp: Number(otp?.join("")),
        }
      );
      const { token, refreshToken, isOrganizationUser, stores = [] } = response.data;
      dispatch(setTokens({ accessToken: token, refreshToken, isOrganizationUser, stores }));  
      authNavigation(isOrganizationUser, stores);
    } catch (error) {
      console.error(error);
    }
  };

  const handleResend = () => {
    generateOTP();
    setSecondsLeft(55);
  };

  const renderContent = () => {
    switch (screen) {
      case "phone":
        return (
          <LoginCard
            logo={logo}
            title={"Get started with REWARDIFY"}
            excerpt={"Enter your mobile number or Shop ID to get started"}
          >
            <input
              className="phone-input"
              type="phone"
              placeholder="Enter shop ID / Mobile Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <Button
              btnText={"Send OTP"}
              btnStyle={`${phoneNumber.length >= 10 ? "fill" : "disabled"}`}
              onClick={() => phoneNumber.length >= 10 && generateOTP()}
            />
            <p className="btn-excerpt excerpt">
              By clicking, you agree to our <a href="#">Terms & Conditions</a>{" "}
              and <a href="#">Privacy Policy.</a>
            </p>
          </LoginCard>
        );
      case "otp":
        return (
          <LoginCard
            logo={logo}
            title={"Verify your details"}
            excerpt={"Enter OTP number below"}
          >
            <OTPInput otp={otp} setOtp={setOtp} />
            <Button
              btnText={"Verify and Continue"}
              btnStyle={`${otp.length === 4 ? "fill" : "disabled"}`}
              onClick={() => otp.length === 4 && verifyOTP()}
            />
            <p className="btn-excerpt excerpt">
              Didn’t receive OTP?{" "}
              {secondsLeft === 0 ? (
                <span
                  onClick={handleResend}
                  className="text-secondary font-semibold cursor-pointer"
                >
                  Resend
                </span>
              ) : (
                <>Resend in 0:{secondsLeft?.toString().padStart(2, "0")}</>
              )}
            </p>
          </LoginCard>
        );

      case "noStore":
        return (
          <LoginCard
            logo={store_logo}
            title={"No stores are linked to this account"}
            excerpt={
              "Enter your account details correctly or register your store with us"
            }
          >
            <Button btnText={"Register your store with us"} btnStyle="fill" />
            <Button
              btnText={"Login with different account"}
              btnStyle="outline"
              onClick={() => setScreen("phone")}
            />
          </LoginCard>
        );

      case "store":
        return (
          <LoginCard
            logo={store_logo}
            title={"Select Your Store"}
            excerpt={"Your Number is connect with 2 stores"}
          >
            <StoreCard />
            <StoreCard />
            <Button btnText={"Continue"} btnStyle="fill" />
          </LoginCard>
        );

      default:
        return (
          <LoginCard
            logo={logo}
            title={"Grow your Business Exponentially!"}
            excerpt={"Pay less on each transaction you make with our App."}
          >
            <Button
              btnText={"Login"}
              btnStyle="fill"
              onClick={() => setScreen("phone")}
            />
            <Button btnText={"Contact Us"} btnStyle="outline" onClick={() => navigate('/contact-us')}/>
            <p className="btn-excerpt excerpt">
              By clicking, you agree to our <a href="#">Terms & Conditions</a>{" "}
              and <a href="#">Privacy Policy.</a>
            </p>
          </LoginCard>
        );
    }
  };

  return (
    <div className="on-boarding">
      <img className="bg-image" src={bgImage} alt="bg-image" />
      <div className="overlay"></div>
      {renderContent()}
    </div>
  );
};

export default Login;