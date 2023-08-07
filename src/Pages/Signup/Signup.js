import React from 'react';
import BgImg from "../../Assets/Images/mainBg.png";
import LoginNavbar from '../../Components/LoginNavbar/LoginNavbar';
import SignupComponent from '../../Components/SignupComponent/SignupComponent';
import { Box } from '@mui/material';
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
          <Link to={"/login"} className='IconWithLink'>
            <p>لدي حساب بالفعل</p>
          </Link>
        </Box>
    </div>
  );
};

export default Signup;
