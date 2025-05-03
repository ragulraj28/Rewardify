import { useEffect, useState } from "react";

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
import { setOrganizationTokens, setTokens } from "../../../utils/slices/authSlice";
import { useForm } from "react-hook-form";
import { setStore } from "../../../utils/slices/storeSlice";

const Login = () => {
  const { initialAccessToken, accessToken, stores, isOrganizationUser } = useSelector(state => state.auth);
  const selectedStoreRedux = useSelector(state => state.store.selectedStore);
  const [screen, setScreen] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState(Array(4).fill(""));
  const [secondsLeft, setSecondsLeft] = useState(null);
  const [selectedStore, setSelectedStoreLocal] = useState(selectedStoreRedux);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    if ((accessToken && accessToken !== "undefined") || initialAccessToken) {
      authNavigation(stores, initialAccessToken);
    }
  }, []);

  useEffect(() => {
    if (screen === "otp" && secondsLeft === null) setSecondsLeft(55);
    if (screen !== "otp" || secondsLeft === 0) return;
    const timer = setInterval(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearInterval(timer);
  }, [screen, secondsLeft]);

  const authNavigation = (stores, token) => {
    if (selectedStoreRedux && accessToken) {
      navigate("dashboard");
      return;
    }

    if (token && stores.length > 0) {
      if (stores.length < 2) {
        dispatch(setStore(stores[0]));
        setSelectedStoreLocal(stores[0]);
        if (!accessToken && isOrganizationUser) {
          organizationUserToken(stores[0]);
        }
        if (accessToken) navigate("dashboard");
      } else {
        setScreen("store");
      }
    } else {
      setScreen("noStore");
    }
  };

  const generateOTP = async (data) => {
    try {
      await api.post(GENERATE_OTP_URL, {
        dialCode: 91,
        contactNo: data.phoneNumber,
      });
      setPhoneNumber(data.phoneNumber);
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
      dispatch(setTokens({ token, refreshToken, isOrganizationUser, stores }));
      authNavigation(stores, token);
    } catch (error) {
      console.error(error);
    }
  };

  const organizationUserToken = async (storeParam) => {
    const storeToUse = storeParam || selectedStore;
    const initialAccessToken = localStorage.getItem("initialAccessToken");

    try {
      const response = await api.post('/v1/store-user/auth/generateToken/',
        { store: storeToUse?._id },
        {
          headers: {
            Authorization: `Bearer ${initialAccessToken}`
          }
        });

      dispatch(setOrganizationTokens({ accessToken: response.data.token, refreshToken: response.data.refreshToken }));
      dispatch(setStore(storeToUse));
      navigate("dashboard");
    } catch (err) {
      console.error(err);
    }
  };

  const handleResend = () => {
    generateOTP({ phoneNumber });
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
            <form className="w-full">
              <div className="input-wrapper">
                <input
                  className="phone-input"
                  placeholder="Enter shop ID / Mobile Number"
                  {...register("phoneNumber", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^\+?\d{10,15}$/,
                      message: "Enter a valid phone number"
                    }
                  })}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                {errors.phoneNumber && <p className="form-error">{errors.phoneNumber.message}</p>}
              </div>
              <Button
                btnText={"Send OTP"}
                btnStyle={`${phoneNumber.length >= 10 ? "fill" : "disabled"}`}
                onClick={handleSubmit(generateOTP)}
              />
            </form>
            <p className="btn-excerpt excerpt">
              By clicking, you agree to our <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy.</a>
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
              Didn’t receive OTP? {secondsLeft === 0 ? (
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
            excerpt={"Enter your account details correctly or register your store with us"}
          >
            <Button btnText={"Register your store with us"} btnStyle="fill" onClick={() => navigate('register-store')} />
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
            {stores?.map(data => (
              <StoreCard
                key={data?._id}
                storeData={data}
                selected={selectedStore?._id === data?._id}
                setSelectedStore={setSelectedStoreLocal}
              />
            ))}

            <Button
              btnText={"Continue"}
              btnStyle={`${selectedStore ? 'fill' : 'disabled'}`}
              onClick={() => selectedStore && organizationUserToken()}
            />
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
            <Button
              btnText={"Contact Us"}
              btnStyle="outline"
              onClick={() => navigate('/contact-us')}
            />
            <p className="btn-excerpt excerpt">
              By clicking, you agree to our <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy.</a>
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
