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
  const [filteredData, setFilteredData] = useState([])
  const [selectedValue, setSelectedValue] = useState()

  const selectionChangeHandler = (value) => {
    console.log(value)
    setSelectedValue(value)
    if(value === ""){
      setFilteredData("")
    }else{
      setFilteredData(data.filter(item => item.SEX === value))
    }
    // const newFiltered = data.filter(item => item.SEX === value)
    // console.log(newFiltered)
  }

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
        console.log(JSON.stringify(res.data.data.Tokens))
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      });
  };

  useEffect(() => {
    getData()
  }, [wallet_id]);


  const handleTransfer = async () => {

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
                    value={selectedValue}
                    variant="outlined"
                    onChange={(e) => selectionChangeHandler(e.target.value)}
                    placeholder='أختر النوع'
                    sx={{
                      borderRadius: 2,
                      backgroundColor: "white",
                      width: "260px",
                      height: "40px",
                      textAlign: "right",
                      "& .MuiSvgIcon-root": {
                        right: "unset",
                        left: "7px",
                      },
                    }}>
                    <MenuItem value={""}>
                      الكل
                    </MenuItem>
                    <MenuItem value={1}>
                      ذكر
                    </MenuItem>
                    <MenuItem value={2}>
                      انثي
                    </MenuItem>
                    <MenuItem value={3}>
                      حيوان مخصي
                    </MenuItem>

                  </Select>
                </div>
                <div className='cardsContainer'>
                  {
                    filteredData.length > 0 ? (
                      <>
                        {
                          filteredData.map((item) => (
                            <CardsWithImg item={item} />
                          ))
                        }
                      </>
                    ) : (
                      <>
                        {
                          data.map((item) => (
                            <CardsWithImg item={item} />
                          ))
                        }
                      </>
                    )
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