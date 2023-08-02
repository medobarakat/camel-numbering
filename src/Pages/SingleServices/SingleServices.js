import React, { useEffect, useState } from 'react'
import { useParams, useLocation, Link } from 'react-router-dom';
import DummyImg from "../../Assets/Images/Femal.png"
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Box, Button, Container, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Anaam from "../../Assets/Images/Anaam.png"
// styles
import "./SingleServices.scss"
const SingleServices = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    }
    const navigateToServices = () => {
        navigate('/services');
        setOpen(false);

    }
    const location = useLocation();
    const data = location.state;
    const { id } = useParams();
    const MyData = {
        id: 1,
        name: "اللؤلوة",
        age: 33,
        type: "جمل",
        type2: "انثي",
        barcode: "hqi2quik9u9w2awe",
        color: "الحمر",
        status: "موجود",
        strain: "هجن",
        edu: "رعوي",
    }
    return (
        <div className='singleServicesWrapper'>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle sx={{ padding: 0 }} disableTypography>
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            {/* Empty string to hide the title */}
                        </Typography>
                        <IconButton edge="end" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                    </Toolbar>
                </DialogTitle>
                <DialogContent sx={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}>
                    <img width={128} height={88} src={Anaam} alt="user" />
                    <Typography gutterBottom sx={{ marginTop: 4, marginBottom: 4, fontFamily: "inherit" }}>
                        بالضغط على اوافق فانت توافق علي شراء هذه الملكية
                    </Typography>
                    <Box sx={{
                        width: "20%",
                        margin: "auto"
                    }}>
                        <Button autoFocus sx={{
                            borderRadius: 3,
                            background: "#5DBB67",
                            fontSize: 16, fontFamily: "inherit"
                        }} variant="contained" onClick={navigateToServices}>
                            تأكيد
                        </Button>
                    </Box>
                </DialogContent>
            </Dialog>
            <div className='title'>
                <Container>
                    <h5>
                        <Link to="/prop">الاملاك</Link>  {" > "}  {MyData.name}
                    </h5>
                </Container>
            </div>
            <Container>

                <div className='lowerContent'>

                    <div className='rightContent'>
                        <div className='col'>
                            <div className='singleItem'>
                                <p className='label'>السن</p>
                            </div>
                            <div className='singleItem-single'>
                                <p className='label'>نوع الحيوان</p>
                            </div>
                            <div className='singleItem'>
                                <p className='label'>الجنس</p>
                            </div>
                            <div className='singleItem'>
                                <p className='label'>الباركود</p>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='singleItem'>
                                <p className='fromData'>{MyData.age}</p>
                            </div>
                            <div className='singleItem-single'>
                                <p className='fromData'>{MyData.type}</p>
                            </div>
                            <div className='singleItem'>
                                <p className='fromData'>{MyData.type2}</p>
                            </div>
                            <div className='singleItem'>
                                <p className='fromData'>{MyData.barcode}</p>
                            </div>
                        </div>
                        <div className='col2'>
                            <div className='singleItem'>
                                <p className='label'>اللون</p>
                            </div>
                            <div className='singleItem-single'>
                                <p className='label'>الحالة</p>
                            </div>
                            <div className='singleItem'>
                                <p className='label'>السلالة</p>
                            </div>
                            <div className='singleItem'>
                                <p className='label'>التربية</p>
                            </div>
                        </div>
                        <div className='col2'>
                            <div className='singleItem'>
                                <p className='fromData'>{MyData.color}</p>
                            </div>
                            <div className='singleItem'>
                                <p className='fromDataStatusSucess'>{MyData.status}</p>
                            </div>
                            <div className='singleItem'>
                                <p className='fromData'>{MyData.strain}</p>
                            </div>
                            <div className='singleItem'>
                                <p className='fromData'>{MyData.edu}</p>
                            </div>
                        </div>
                    </div>
                    <div className='LeftContent'>
                        <img src={DummyImg} alt={MyData.name} />
                    </div>
                </div>
                <div className='buttonContainer'>
                    <Button sx={{
                        borderRadius: 3,
                        background: "#969BA1",
                        fontSize: 16,
                        width: "320px",
                        marginRight: "32px", fontFamily: "inherit"
                    }} variant="contained" color="success">لا اوافق</Button>

                    <Button sx={{
                        borderRadius: 3,
                        background: "#5DBB67",
                        fontSize: 16,
                        width: "320px", fontFamily: "inherit"
                    }} variant="contained" onClick={handleClickOpen} color="success">ارسال</Button>

                </div>
            </Container>
        </div>
    )
}

export default SingleServices