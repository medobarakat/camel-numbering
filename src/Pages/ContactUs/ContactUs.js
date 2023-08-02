import React from 'react'
// logo
import ContactUsLogo from "../../Assets/Logo/ContactUsLogo"
// styles
import "./ContactUs.scss"
import { Button, Container, TextField } from '@mui/material'

const ContactUs = () => {
    return (
        <div className='ContactUsWrapper'>
            <div className='title'>
                <Container>
                    <h5>
                        تواصل معنا
                    </h5>
                </Container>
            </div>
            <Container>

                <div className='lowerContent'>

                    <div className='rightContent'>
                        <div className='inputWithText'>
                            <span>الاسم بالكامل</span>
                            <TextField id="outlined-basic" fullWidth variant="outlined" />
                        </div>
                        <div className='twoInputContainer'>
                           
                            <div className='inputWithText'>
                                <span>البريد الالكترونى</span>
                                <TextField id="outlined-basic" fullWidth variant="outlined" />
                            </div>
                            <div className='inputWithText'>
                                <span>رقم الجوال</span>
                                <TextField id="outlined-basic" fullWidth variant="outlined" />
                            </div>
                        </div>
                        <div className='inputWithText'>
                            <span>رسالتك</span>
                            <TextField
                                fullWidth
                                multiline
                                sx={{
                                    width: "100%",
                                    background:"#FAFAF"
                                }}
                            />

                        </div>
                        <Button sx={{
                            borderRadius: 3,
                            background: "#5DBB67",
                            fontSize: 16,
                            width: "320px", fontFamily: "inherit", marginTop: 4
                        }} variant="contained" color="success">ارسال</Button>
                    </div>
                    <div className='LeftContent'>
                        <ContactUsLogo />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ContactUs