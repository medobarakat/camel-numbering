import React from 'react';
import BgImg from "../../Assets/Images/mainBg.png";
import LoginNavbar from '../../Components/LoginNavbar/LoginNavbar';
import ForgetpasswordComponent from '../../Components/ForgetpasswordComponent/ForgetpasswordComponent';
import { Box } from '@mui/material';
import Man from "../../Assets/Logo/Man"
import { Link } from 'react-router-dom';
import "./Forgetpassword.scss";
const Forgetpassword = () => {
  const backgroundStyle = {
    backgroundImage: `url(${BgImg})`,
  };

  return (
    <div className='ForgetpasswordWrapper' style={backgroundStyle}>
      <LoginNavbar />
      <Box
          sx={{
            maxWidth: 536,
            margin: '0px auto',
          }}
        >
          <ForgetpasswordComponent />
          <Link className='IconWithLink'>
            <Man />
            <p>انشاء حساب جديد</p>
          </Link>
        </Box>
    </div>
  );
};

export default Forgetpassword;
