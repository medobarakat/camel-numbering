import React from 'react'

// images
import RightLogo from "../../Assets/Images/rightLogo.png"
import AnaamChainLogo from "../../Assets/Images/Anaam-Chain-2.png"
import Anaam from "../../Assets/Logo/Anaam.js"
import "./index.scss"
const LoginNavbar = () => {
  return (
    <div className='LoginNavbarWrapper'>
        <img src={AnaamChainLogo} alt='AnaamChainLogo' width={106}/> 
         <img src={RightLogo} alt='rightLogo' width={268} height={51}/>
    </div>
  )
}

export default LoginNavbar