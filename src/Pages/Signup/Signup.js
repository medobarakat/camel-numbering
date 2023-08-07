import React from 'react';
import BgImg from "../../Assets/Images/mainBg.png";
import LoginNavbar from '../../Components/LoginNavbar/LoginNavbar';
import SignupComponent from '../../Components/SignupComponent/SignupComponent';
import { Box } from '@mui/material';
import Man from "../../Assets/Logo/Man"
import { Link } from 'react-router-dom';
import "./Signup.scss";
const Signup = () => {
  const backgroundStyle = {
    backgroundImage: `url(${BgImg})`,
  };

  return (
    <div className='SignupWrapper' style={backgroundStyle}>
      <LoginNavbar />
      <Box
          sx={{
            maxWidth: 536,
            margin: '0px auto',
          }}
        >
          <SignupComponent />
          <Link className='IconWithLink'>
            <Man />
            <p>انشاء حساب جديد</p>
          </Link>
        </Box>
    </div>
  );
};

export default Signup;
