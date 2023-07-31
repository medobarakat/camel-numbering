import React from 'react'
import { Button, Container, MenuItem, Select } from '@mui/material'

import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';// images
import Img from "../../Assets/Images/roundImg.png"
// styles
import "./Profile.scss"
const Profile = () => {
    const data = {
        name: "اسامةعبد الرءوف عسكر",
        picturl: "anyLink",
        nationalId: "334343432122121212",
        healthCard: "334343432122121212",
        email: "osama.asker@ejadtech.sa",
        phone: "+101015293997",
        birthDay: "21 / 3/ 2023",
        password: "*********"
    }
    return (
        <div className='profileWrapper'>
            <div className='title'>
                <Container>
                    <h5>
                        الملف الشخصي
                    </h5>
                </Container>
            </div>
            <Container>
                <div className='ProfileCard'>
                    <div className='textandImg'>
                        <img src={Img} alt="user" />
                        <h5>
                            {data.name}
                        </h5>
                    </div>
                    <div className='secondWrapper'>
                        <div className='txtWrapper'>
                            <p className='firstTxt'>البطاقة الصحية</p>
                            <p className='fromData'>{data.healthCard}</p>
                        </div>
                        <div className='txtWrapper firstCard'>
                            <p className='firstTxt'>رقم الهوية الوطنية</p>
                            <p className='fromData'>{data.nationalId}</p>
                        </div>
                    </div>
                </div>
                <div className='anotherCard'>
                    <div className='col'>
                        <div className='item'>
                            <span>البريد الالكتروني</span>

                            <TextField
                                id="outlined-required"
                                defaultValue={data.email}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <BorderColorIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>
                        <div className='item'>
                            <span>تاريخ الميلاد</span>


                            <TextField
                                id="outlined-required"
                                defaultValue={data.birthDay}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <EditCalendarIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>

                    </div>
                    <div className='col'>
                        <div className='item'>
                            <span>رقم الجوال</span>
                            <TextField
                                id="outlined-required"
                                defaultValue={data.phone}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <BorderColorIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>
                        <div className='item'>
                            <span>كلمه المرور</span>
                            <TextField
                                id="outlined-required"
                                defaultValue={data.password}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <BorderColorIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Profile