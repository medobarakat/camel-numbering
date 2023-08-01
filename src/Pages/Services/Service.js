import React, { useState } from 'react'

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
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

import { Badge, Box, Button, Container, TextField, Toolbar } from '@mui/material'
// styles
import "./Services.scss"
import { Link } from 'react-router-dom';
const Service = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  }
  const [activeCard, setActiveCard] = useState(1)

  const buyData = [
    {
      id: 1,
      name: "حسام محمد عسكر",
      date: "5-5-2023",
      camelName: "اللؤلؤه",
      barcode: "757edjjdu874878838"
    },
    {
      id: 2,
      name: "حسام محمد عسكر",
      date: "5-5-2023",
      camelName: "اللؤلؤه",
      barcode: "757edjjdu874878838"
    },
    {
      id: 3,
      name: "حسام محمد عسكر",
      date: "5-5-2023",
      camelName: "اللؤلؤه",
      barcode: "757edjjdu874878838"
    },
    {
      id: 4,
      name: "حسام محمد عسكر",
      date: "5-5-2023",
      camelName: "اللؤلؤه",
      barcode: "757edjjdu874878838"
    },
    {
      id: 5,
      name: "حسام محمد عسكر",
      date: "5-5-2023",
      camelName: "اللؤلؤه",
      barcode: "757edjjdu874878838"
    },
    {
      id: 6,
      name: "حسام محمد عسكر",
      date: "5-5-2023",
      camelName: "اللؤلؤه",
      barcode: "757edjjdu874878838"
    },
    {
      id: 7,
      name: "حسام محمد عسكر",
      date: "5-5-2023",
      camelName: "اللؤلؤه",
      barcode: "757edjjdu874878838"
    },
    {
      id: 8,
      name: "حسام محمد عسكر",
      date: "5-5-2023",
      camelName: "اللؤلؤه",
      barcode: "757edjjdu874878838"
    },
    {
      id: 9,
      name: "حسام محمد عسكر",
      date: "5-5-2023",
      camelName: "اللؤلؤه",
      barcode: "757edjjdu874878838"
    },
  ];




  return (
    <div className='servicesWrapper'>
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
          <Typography gutterBottom sx={{ marginTop: 4, marginBottom: 4 }}>
            بالضغط على تأكيد فانت توافق على نقل الملكية الخاصة بك
          </Typography>
          <Box sx={{
            width: "20%",
            margin: "auto"
          }}>
            <Button autoFocus sx={{
              borderRadius: 3,
              background: "#5DBB67",
              fontSize: 16
            }} variant="contained" onClick={handleClose}>
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
              }} badgeContent={3} color="secondary">
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
                <div className='title2'>
                  خدمة شراء ملكية
                </div>
                <div className='buyCardWrapper2'>
                    {
                      buyData.map((item) => (
                        <Link className='singleCardBuy' to={`/buy/${item.id}`} key={item.id}>
                          <div className='firstCol'>
                            <p className='buyerName'>{item.name}</p>
                            <p className='camelName'>{item.camelName}</p>
                            <div className='iconWrapper'>
                              <ScanBarCode />
                              <span className='barcode'>{item.barcode}</span>
                            </div>
                          </div>
                          <div className='secCol'>
                            <p className='date'>
                              {item.date}
                            </p>
                          </div>
                        </Link>
                      ))
                    }
                </div>
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
                    />
                    <Button onClick={handleClickOpen} sx={{
                      borderRadius: 3,
                      background: "#5DBB67",
                      fontSize: 16
                    }} variant="contained" color="success">ارسال</Button>

                  </div>
                  <div className='signleBuy'>
                    <p>
                      اسم الحيوان
                    </p>
                    <TextField
                      id="outlined-required"
                      placeholder='اسم الحيوان'
                      inputProps={{
                        sx: {
                          textAlign: 'end'
                        },
                      }}
                    />
                  </div>
                </div>
              </>
            )}
        </div>
      </Container>

    </div>
  )
}

export default Service