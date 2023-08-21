import React from 'react'
// icon
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
// style
import "./property.scss"
import { Button, Container, MenuItem, Select } from '@mui/material'
import Card from '../../Components/Card/Card';
import CardsWithImg from '../../Components/CardsWithImg/CardsWithImg';
import { useState } from 'react';
import Loader from '../../Components/Loader/Loader';
import { MainUrl, getpropData } from '../../Constance/ApiConstance';
import axios from 'axios';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
const Properity = () => {
  const Savedtoken = useSelector(state => state.auth.token);
  // const wallet_id = useSelector(state => state.auth.wallet_id);
  const wallet_id = 2469117966;
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  const getData = async () => {
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
        setData(res.data.data.Tokens)
        console.log(res.data.data.Tokens)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      });
  };

  useEffect(() => {
    getData()
  }, [wallet_id]);


  const handleTransfer = async()=>{
    
  }



  return (
    <>
      {
        loading ? (
          <Loader />
        ) : (
          <div className="propWrapper">
            <div className='title'>
              <Container>
                <h5>
                  الاملاك
                </h5>
              </Container>
            </div>
            <Container>
              <div>
                <div>
                  <Button sx={{
                    borderRadius: 2,
                    backgroundColor: "#5dbb67",
                    marginRight: 2, fontFamily: "inherit"
                  }}><SearchIcon sx={{ fill: 'white' }} /></Button>
                  <Select
                    IconComponent={KeyboardArrowDownIcon}
                    // value={selected}
                    variant="outlined"
                    // onChange={selectionChangeHandler}
                    sx={{
                      borderRadius: 2,
                      backgroundColor: "white",
                      width: "260px",
                      height: "40px",
                      "& .MuiSvgIcon-root": {
                        right: "unset",
                        left: "7px",
                      },
                    }}>
                    <MenuItem value={""}>
                      اختر
                    </MenuItem>

                  </Select>
                </div>
                <div className='cardsContainer'>
                  {
                    data.map((item) => (
                      <CardsWithImg item={item} />
                    ))
                  }
                </div>
              </div>
              <div>
                <Card />
              </div>
            </Container>
          </div>
        )
      }

    </>

  )
}

export default Properity