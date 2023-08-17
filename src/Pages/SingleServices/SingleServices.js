import React, { useEffect, useState } from 'react'
import { useParams, useLocation, Link } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Box, Button, Container, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
// images
import Grandfemale from "../../Assets/Images/Grandfemale.png"
import Grandmale from "../../Assets/Images/Grandmale.png"
import Youngfemale from "../../Assets/Images/Youngfemale.png"
import Youngmale from "../../Assets/Images/Youngmale.png"
import Anaam from "../../Assets/Images/Anaam.png"
// styles
import "./SingleServices.scss"
import Loader from '../../Components/Loader/Loader';
import axios from 'axios';
import { ApproveTransfer, DeclineTransfer, MainUrl, getTokenData } from '../../Constance/ApiConstance';
import { useSelector } from 'react-redux';
const SingleServices = () => {
    const [loading, setLoading] = useState(true)
    const [Animaldata, setAnimalData] = useState()
    const Savedtoken = useSelector(state => state.auth.token);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [openCancel, setOpenCancel] = useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleOpenCancel = () =>{
        setOpenCancel(true)
    }
    const handleClose = () => {
        setOpen(false);
        setOpenCancel(false)
    }
    const navigateToServices = () => {
        navigate('/services');
        setOpen(false);

    }
    const location = useLocation();
    const transferId = location.state.data[0].ID;

    const { id } = useParams();
    useEffect(() => {
        getWalletData()
        console.log(transferId)
    }, [Savedtoken])



    const getWalletData = async () => {
        setLoading(true);
        const url = MainUrl + getTokenData + id;

        const config = {
            headers: {
                Accept: "application/json",
                Authorization: `bearer ${Savedtoken}`
            },
        };
        axios
            .get(url, config)
            .then((res) => {
                setLoading(false)
                setAnimalData(res.data.data.Token);
                console.log(res.data.data.Token)
            })
            .catch((err) => {
                setLoading(false)
                console.log(err)
            });
    }

    const AcceptTransfer = async () => {
        const url = MainUrl + ApproveTransfer;
        
        const config = {
            headers: {
                Accept: "application/json",
                Authorization: `bearer ${Savedtoken}`
            },
        };
        const body = {
            "transfer_id": transferId
        }
        axios
        .post(url, body, config)
        .then((res) => {
                navigateToServices()
                console.log(res.data)
            })
            .catch((err) => {
                navigateToServices()
                console.log(err)
            });
    }

    const CancelTransfer = async () => {
        const url = MainUrl + DeclineTransfer;
        
        const config = {
            headers: {
                Accept: "application/json",
                Authorization: `bearer ${Savedtoken}`
            },
        };
        const body = {
            "transfer_id": transferId
        }
        axios
        .post(url, body, config)
        .then((res) => {
                navigateToServices()
                console.log(res.data)
            })
            .catch((err) => {
                navigateToServices()
                console.log(err)
            });
    }



    return (
        <>
            {
                loading ? (
                    <Loader />
                ) : (
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
                                    }} variant="contained" onClick={AcceptTransfer}>
                                        تأكيد
                                    </Button>
                                </Box>
                            </DialogContent>
                        </Dialog>

                        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={openCancel}>
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
                                    بالضغط علي الغاء ستقوم بالغاء شراء الملكيه 
                                </Typography>
                                <Box sx={{
                                    width: "20%",
                                    margin: "auto"
                                }}>
                                    <Button autoFocus sx={{
                                        borderRadius: 3,
                                        background: "#5DBB67",
                                        fontSize: 16, fontFamily: "inherit"
                                    }} variant="contained" onClick={CancelTransfer}>
                                        تأكيد
                                    </Button>
                                </Box>
                            </DialogContent>
                        </Dialog>
                        <div className='title'>
                            <Container>
                                <h5>
                                    <Link to="/prop">الاملاك</Link>  {" > "} {Animaldata.NAME}
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
                                            <p className='fromData'>{Animaldata.AGE_YEARS}</p>
                                        </div>
                                        <div className='singleItem-single'>
                                            <p className='fromData'>
                                                {
                                                    Animaldata.TYPE === 0 && ("حيوان مخصي")
                                                }
                                                {
                                                    Animaldata.TYPE === 1 && ("جمل")
                                                }
                                                {
                                                    Animaldata.TYPE === 2 && ("خيليّ ، فرسيّ")
                                                }
                                                {
                                                    Animaldata.TYPE === 3 && ("بقريّ")
                                                }
                                                {
                                                    Animaldata.TYPE === 4 && ("ضأنيّ ، غنميّ")
                                                }
                                                {
                                                    Animaldata.TYPE === 5 && ("عنزيّ")
                                                }
                                                {
                                                    Animaldata.TYPE !== 0 && Animaldata.TYPE !== 1 && Animaldata.TYPE !== 2 && Animaldata.TYPE !== 3 && Animaldata.TYPE !== 4 && Animaldata.TYPE !== 5 && (
                                                        "غير معروف"
                                                    )
                                                }
                                            </p>
                                        </div>
                                        <div className='singleItem'>
                                            <p className='fromData'>
                                                {
                                                    Animaldata.SEX === 1 && (
                                                        "ذكر"
                                                    )
                                                }
                                                {
                                                    Animaldata.SEX === 2 && (
                                                        "أنثى"
                                                    )
                                                }
                                                {
                                                    Animaldata.SEX === 3 && (
                                                        "حيوان مخصي"
                                                    )
                                                }
                                                {
                                                    Animaldata.SEX === 0 && (
                                                        "حيوان مخصي"
                                                    )
                                                }
                                            </p>
                                        </div>
                                        <div className='singleItem'>
                                            <p className='fromData'>
                                                {
                                                    Animaldata.BARCODE_2 && (
                                                        <>{Animaldata.BARCODE_2}</>
                                                    )
                                                }
                                                {
                                                    Animaldata.BARCODE_3 && (
                                                        <>{Animaldata.BARCODE_3}</>
                                                    )
                                                }
                                                {
                                                    Animaldata.BARCODE_4 && (
                                                        <>{Animaldata.BARCODE_4}</>
                                                    )
                                                }
                                            </p>
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
                                            <p className='fromData'>
                                                {
                                                    Animaldata.COLOR === 16 && (
                                                        "المجاهيم"
                                                    )
                                                }
                                                {
                                                    Animaldata.COLOR === 17 && (
                                                        "الوضح"
                                                    )
                                                }
                                                {
                                                    Animaldata.COLOR === 18 && (
                                                        "الشعل"
                                                    )
                                                }
                                                {
                                                    Animaldata.COLOR === 19 && (
                                                        "الصفر"
                                                    )
                                                }
                                                {
                                                    Animaldata.COLOR === 20 && (
                                                        "الشقح"
                                                    )
                                                }
                                                {
                                                    Animaldata.COLOR === 21 && (
                                                        "الحمر"
                                                    )
                                                }
                                                {
                                                    Animaldata.COLOR !== 16 && Animaldata.COLOR !== 17 && Animaldata.COLOR !== 18 && Animaldata.COLOR !== 19 && Animaldata.COLOR !== 20 && Animaldata.COLOR !== 21 && (
                                                        "غير معرف"
                                                    )
                                                }
                                            </p>
                                        </div>
                                        <div className='singleItem'>
                                            <p className='fromDataStatusSucess'>
                                                {
                                                    Animaldata.STATUS === 3 && (
                                                        "موجود"
                                                    )
                                                }
                                                {
                                                    Animaldata.STATUS === 6 && (
                                                        "مباع"
                                                    )
                                                }
                                                {
                                                    Animaldata.STATUS === 7 && (
                                                        "نافق"
                                                    )
                                                }
                                                {
                                                    Animaldata.STATUS === 12 && (
                                                        "مذبوح"
                                                    )
                                                }
                                                {
                                                    Animaldata.STATUS !== 3 && Animaldata.STATUS !== 6 && Animaldata.STATUS !== 7 && Animaldata.STATUS !== 12 && (
                                                        "غيرمعرف"
                                                    )
                                                }
                                            </p>
                                        </div>
                                        <div className='singleItem'>
                                            <p className='fromData'>
                                                {
                                                    Animaldata.BREED === 1 && (
                                                        "محلى"
                                                    )
                                                }
                                                {
                                                    Animaldata.BREED === 2 && (
                                                        "هجن"
                                                    )
                                                }
                                                {
                                                    Animaldata.BREED === 3 && (
                                                        "مستورد"
                                                    )
                                                }
                                                {
                                                    Animaldata.BREED !== 1 && Animaldata.BREED !== 2 && Animaldata.BREED !== 3 && (
                                                        "غير معرف"
                                                    )
                                                }
                                            </p>
                                        </div>
                                        <div className='singleItem'>
                                            <p className='fromData'>

                                                {
                                                    Animaldata.FARMING_TYPE === 1 && (
                                                        "رعوي"
                                                    )
                                                }
                                                {
                                                    Animaldata.FARMING_TYPE === 2 && (
                                                        "مزرعة"
                                                    )
                                                }
                                                {
                                                    Animaldata.FARMING_TYPE === 3 && (
                                                        "أسواق"
                                                    )
                                                }
                                                {
                                                    Animaldata.FARMING_TYPE === 4 && (
                                                        "أحواش"
                                                    )
                                                }
                                                {
                                                    Animaldata.FARMING_TYPE !== 1 && Animaldata.FARMING_TYPE !== 2 && Animaldata.FARMING_TYPE !== 3 && Animaldata.FARMING_TYPE !== 4 && (
                                                        "غير معرف"
                                                    )
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='LeftContent'>
                                    {
                                        Animaldata.AGE_YEARS >= 2 ? (
                                            <>
                                                {
                                                    Animaldata.SEX === 2 ? (
                                                        <>
                                                            <img src={Grandfemale} alt={Animaldata.NAME} />

                                                        </>
                                                    ) : (
                                                        <>
                                                            <img src={Grandmale} alt={Animaldata.NAME} />

                                                        </>
                                                    )
                                                }
                                            </>
                                        ) : (
                                            <>
                                                {
                                                    Animaldata.SEX === 2 ? (
                                                        <>
                                                            <img src={Youngfemale} alt={Animaldata.NAME} />

                                                        </>
                                                    ) : (
                                                        <>
                                                            <img src={Youngmale} alt={Animaldata.NAME} />

                                                        </>
                                                    )
                                                }
                                            </>
                                        )
                                    }
                                </div>
                            </div>
                            <div className='buttonContainer'>
                                <Button sx={{
                                    borderRadius: 3,
                                    background: "#969BA1",
                                    fontSize: 16,
                                    width: "320px",
                                    marginRight: "32px", fontFamily: "inherit"
                                }} variant="contained" onClick={handleOpenCancel} color="success">لا اوافق</Button>

                                <Button sx={{
                                    borderRadius: 3,
                                    background: "#5DBB67",
                                    fontSize: 16,
                                    width: "320px", fontFamily: "inherit"
                                }} variant="contained" onClick={handleClickOpen} color="success">اوافق</Button>

                            </div>
                        </Container>
                    </div>
                )
            }
        </>

    )
}

export default SingleServices