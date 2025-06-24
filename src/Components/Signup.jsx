import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css'; 
import Logo from "../assets/Logo.png"
import Aos from 'aos';
import "aos/dist/aos.css"

const Signup = () => {
  useEffect(()=>{
    Aos.init({
      duration:1000,
      once:true,
      
    })
  },[])
  const [email, setEmail] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [otp, setOtp] = useState('');
  const [enteredOtp, setEnteredOtp] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleEmailSubmit = () => {
    const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
    // const generatedOtp = (Math.random()*10000)
    setOtp(generatedOtp);
    sessionStorage.setItem('signupEmail', email);
    sessionStorage.setItem('signupOtp', generatedOtp);
    console.log("OTP:-",generatedOtp)
    setShowPopup(true);
    setShowOtpInput(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 10000);
  };

  const handleOtpSubmit = () => {
    const storedOtp = sessionStorage.getItem("signupOtp");
    if (enteredOtp === storedOtp) {
      alert('OTP Verified Successfully!');
      sessionStorage.setItem('isVerified', 'true');
      navigate("/");
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  return (
  <>
    <div className='signup-back' data-aos="fade-down">
        <div className='signup-img'>
          <img src={Logo} alt="Logo" />
        </div>
    <div className="signup-container">
      {!showOtpInput ? (
        <>
          <h2>Sign-up</h2>
          <input
           type='text'
           placeholder='Enter Name'
           required
           />
           <input
           type='number'
           placeholder='Enter Mob.no'
           />
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          required />
          <button onClick={handleEmailSubmit} disabled={!email} id="signup-btn">Send OTP</button>
        </>
      ) : (
        <>
          <h2>Enter OTP</h2>
          <input
            type="text"
            placeholder="Enter OTP"
            value={enteredOtp}
            onChange={e => setEnteredOtp(e.target.value)}
          />
          <button onClick={handleOtpSubmit} id="signup-btn">Verify OTP</button>
        </>
      )}

      {/* OTP Slide-In Popup */}
      {showPopup && (
        <div className="otp-popup">
          <p>Your OTP is: <strong>{otp}</strong></p>
          <button className="close-btn" onClick={() => setShowPopup(false)}>×</button>
        </div>
      )}
    </div>
    </div>
    </>
  );
};

export default Signup;