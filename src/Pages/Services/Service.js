import React, { useEffect, useState } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
// icons
import ShopBag2 from "../../Assets/Logo/ShopBag2"
import Transfer from "../../Assets/Logo/Transfer"
import ImportExportArrows from "../../Assets/Logo/ImportExportArrows"
import Store from "../../Assets/Logo/Store"
import ScanBarCode from "../../Assets/Logo/ScanBarCode"
//images
import Anaam from "../../Assets/Images/Anaam.png"
import Empty from "../../Assets/Images/empty.png"
import { Badge, Box, Button, Container, MenuItem, Select, TextField, Toolbar } from '@mui/material'
// styles
import "./Services.scss"
import { Link } from 'react-router-dom';
import { GetAllTransfers, MainUrl, TransferApi, WalletData, getpropData } from '../../Constance/ApiConstance';
import { useSelector } from 'react-redux';
import Loader from '../../Components/Loader/Loader';
import axios from 'axios';
const Service = () => {
  const Savedtoken = useSelector(state => state.auth.token);
  const [open, setOpen] = useState(false);
  const [acceptOpen, setAcceptOpen] = useState(false);
  const [failureOpen, setFailureOpen] = useState(false);
  const [activeCard, setActiveCard] = useState(1)
  const [animalsData, setAnimalsData] = useState([])
  const [selectedAnimal, setSelectedAnimal] = useState('')
  const [recieverId, setRecieverId] = useState('')
  const [data, setData] = useState([])
  const [buyerId, setBuyerId] = useState([]);
  const [buyerData, setBuyerData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [Modalerror, setModalError] = useState('')
  const wallet_id = 2469117966;
  // const wallet_id = useSelector(state => state.auth.wallet_id);
  const handleClickOpen = () => {
    if (recieverId && animalsData) {
      setOpen(true);
      setError(false)
    } else {
      setError(true)
    }
  };
  const handleClose = () => {
    setOpen(false);
    setAcceptOpen(false)
    setFailureOpen(false)
  }


  useEffect(() => {
    getInitalData();
    getPropsData()
  }, []);

  useEffect(() => {
    buyerId.forEach((id) => {
      getWalletData(id);
    });
  }, [buyerId]);

  const getInitalData = async () => {
    setLoading(true)
    const url = MainUrl + GetAllTransfers + wallet_id;
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
        // setData(res.data.data.Transfers)
        console.log(JSON.stringify(res.data.data.Transfers))
        // Filter and store unique old_wallet_id values
        const stringId = wallet_id.toString();
        const filteredTransfers = res.data.data.Transfers.filter(
          (transfer) =>
            transfer.NEW_WALLET_ID === stringId &&
            transfer.State === 3
        );
        // console.log(filteredTransfers)
        setData(filteredTransfers)
        const uniqueOldWalletIds = Array.from(
          new Set(filteredTransfers.map((transfer) => transfer.OLD_WALLET_ID))
        );
        setBuyerId(uniqueOldWalletIds);
        console.log(uniqueOldWalletIds);
      })
      .catch((err) => {
        setLoading(false)
        console.log(err)
      });
  };

  const getWalletData = async (theId) => {
    setLoading(true);
    const url = MainUrl + WalletData + theId;

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
        setBuyerData(res.data.data.Wallet);
        console.log(res.data.data.Wallet)
      })
      .catch((err) => {
        setLoading(false)
        console.log(err)
      });
  }


  const getPropsData = async () => {
    setLoading(true)
    const url = MainUrl + getpropData + wallet_id;

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
        setAnimalsData(res.data.data.Tokens)
        console.log(res.data.data.Tokens)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      });
  };

  const handleChangeAnimal = (e) => {
    console.log(e.target.value)
    setSelectedAnimal(e.target.value)
  }


  const transferAnimal = () => {
    setOpen(false)
    const url = MainUrl + TransferApi;
    const config = {
      headers: {
        Accept: "application/json",
        Authorization: `bearer ${Savedtoken}`
      },
    };
    const body ={
      "ANIMAL_ID": selectedAnimal.NAME,
      "OLD_WALLET_ID": selectedAnimal.WALLET_ID,
      "NEW_WALLET_ID": recieverId,
       "STATE": 0
    }
    axios
      .post(url, body,config)
      .then((res) => {
        // console.log(res.data.result)
      if (res.status === 400) {
        setFailureOpen(true)
        // console.log(res.message)
      } else {
        setAcceptOpen(true)
      }
      })
      .catch((err) => {
        setModalError(err.response.data.message)
        setLoading(false)
        setFailureOpen(true)
      });
  }


  return (
    <>
      {
        loading ? (
          <Loader />
        ) : (
          <div className='servicesWrapper'>
            {/* accept modal */}
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={acceptOpen}>
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
                  تم نقل الملكيه بنجاح
                </Typography>
                <Box sx={{
                  width: "20%",
                  margin: "auto"
                }}>
                  <Button autoFocus sx={{
                    borderRadius: 3,
                    background: "#5DBB67",
                    fontSize: 16, fontFamily: "inherit"
                  }} variant="contained" onClick={handleClose}>
                    اغلاق
                  </Button>
                </Box>
              </DialogContent>
            </Dialog>
            {/* failure modal */}
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={failureOpen}>
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
                <Typography gutterBottom sx={{ color:"red",marginTop: 4, marginBottom: 4, fontFamily: "inherit" }}>
                  {/* حدثت مشكله في نقل الملكيه */}
                  {Modalerror}
                </Typography>
                <Box sx={{
                  width: "20%",
                  margin: "auto"
                }}>
                  <Button autoFocus sx={{
                    borderRadius: 3,
                    background: "#5DBB67",
                    fontSize: 16, fontFamily: "inherit"
                  }} variant="contained" onClick={handleClose}>
                    اغلاق
                  </Button>
                </Box>
              </DialogContent>
            </Dialog>

            {/* question modal */}
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
                  {/* بالضغط على تأكيد فانت توافق على نقل الملكية الخاصة بك */}
                  {recieverId} سيتم نقل الملكيه {selectedAnimal?.NAME} إلي صاحب الهويه رقم
                </Typography>
                <Box sx={{
                  width: "20%",
                  margin: "auto"
                }}>
                  <Button autoFocus sx={{
                    borderRadius: 3,
                    background: "#5DBB67",
                    fontSize: 16, fontFamily: "inherit"
                  }} variant="contained" onClick={transferAnimal}>
                    تأكيد
                  </Button>
                </Box>
              </DialogContent>
            </Dialog>
            <div className='title'>
              <Container>
                <h5>
                  الخدمات
                </h5>
              </Container>
            </div>
            <Container>

              <div className='cardWrapper'>
                <div className={`card2 ${activeCard === 1 ? 'active' : ''}`} onClick={() => setActiveCard(1)}>
                  <div className='inner'>
                    <Badge anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }} sx={{
                      '& .MuiBadge-badge': {
                        backgroundColor: '#003462',
                        padding: 1
                      },
                    }} badgeContent={data.length} color="secondary">
                      <ShopBag2 />
                    </Badge>
                    شراء ملكيه
                  </div>

                </div>
                <div className={`card2 ${activeCard === 2 ? 'active' : ''}`} onClick={() => setActiveCard(2)}>
                  <div className='inner'>

                    <Transfer />
                    نقل ملكيه
                  </div>

                </div>
                <div className='card2 soon'>
                  <div className='inner'>

                    <ImportExportArrows />
                    الاستيراد والتصدير
                  </div>

                </div>
                <div className='card2 soon'>
                  <div className='inner'>

                    <Store />
                    دخول الاسواق
                  </div>

                </div>
              </div>
              <div className='lastSectionsWrapper'>
                {
                  activeCard === 1 && (
                    <>
                      {
                        data.length > 0 ? (
                          <>
                            <div className='title2'>
                              خدمة شراء ملكية
                            </div>
                            <div className='buyCardWrapper2'>
                              {
                                data.map((item) => (

                                  <Link
                                    className='singleCardBuy'
                                    to={`/services/${item.ANIMAL_ID}`}
                                    state={{ data: data }} // Replace with your actual prop
                                    key={item.ANIMAL_ID}
                                  >
                                    <div className='firstCol'>
                                      <p className='buyerName'>{buyerData?.FIRSTNAME} {" "} {buyerData?.SECONDNAME} {" "} {buyerData.THIRDNAME}</p>
                                      <p className='camelName'>{item.ANIMAL_ID}</p>
                                      <div className='iconWrapper'>
                                        <ScanBarCode />
                                        <span className='barcode'>{item.barcode}</span>
                                      </div>
                                    </div>
                                    <div className='secCol'>
                                      <p className='date'>
                                        {/* {item.date} */}
                                        16-8-2023
                                      </p>
                                    </div>
                                  </Link>
                                ))
                              }
                            </div>
                          </>
                        ) : (
                          <>
                            <div className='noDataWrapper'>
                              <img src={Empty} alt='empty' width={168} height={168} />
                              <p className='emptyTxt'>
                                عفوا لا يوجد طلبات شراء ملكيه
                              </p>
                              <Link to="/" className='LinkStyle' >الرجوع للرئيسية</Link>


                            </div>
                          </>
                        )
                      }

                    </>
                  )}
                {
                  activeCard === 2 && (
                    <>
                      <div className='title2'>
                        خدمات نقل ملكيه
                      </div>
                      <div className='buyCardWrapper'>
                        <div className='signleBuy'>
                          <p>
                            رقم الهويه الوطنية للمشترى
                          </p>
                          <TextField
                            id="outlined-required"
                            placeholder='رقم الهويه الوطنية للمشترى'
                            inputProps={{
                              sx: {
                                textAlign: 'end'
                              },
                            }}
                            value={recieverId}
                            onChange={(e) => setRecieverId(e.target.value)}
                          />
                          <Button onClick={handleClickOpen} sx={{
                            borderRadius: 3,
                            background: "#5DBB67",
                            fontSize: 16, fontFamily: "inherit"
                          }} variant="contained" color="success">ارسال</Button>
                          <div>
                            {error && (
                              <p style={{ color: "red" }}>برجاء ملئ جميع الحقول</p>
                            )}
                          </div>
                        </div>
                        <div className='signleBuy'>
                          <p>
                            اسم الحيوان
                          </p>
                          <Select
                            value={selectedAnimal}
                            onChange={(e) => handleChangeAnimal(e)}
                          >
                            {
                              animalsData?.map((item) => (
                                <MenuItem key={item.NAME} value={item}>{item.NAME}</MenuItem>
                              ))
                            }
                          </Select>
                        </div>
                      </div>

                    </>
                  )}
              </div>
            </Container>

          </div>
        )
      }
    </>

  )
}

export default Service