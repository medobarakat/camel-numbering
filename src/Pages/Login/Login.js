import React from 'react';
import "./login.scss";
import BgImg from "../../Assets/Images/mainBg.png";
import LoginNavbar from '../../Components/LoginNavbar/LoginNavbar';
import LoginComponent from '../../Components/LoginComponent/LoginComponent';
import { Box } from '@mui/material';

const Login = () => {
  const backgroundStyle = {
    backgroundImage: `url(${BgImg})`,
  };

  return (
    <div className='LoginWrapper' style={backgroundStyle}>
      <LoginNavbar />
      <Box
          sx={{
            maxWidth: 536,
            margin: '0px auto',
          }}
        >
          <LoginComponent />
        </Box>
    </div>
  );
};

export default Login;
