import React from 'react'
// icon
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
// style
import "./property.scss"
import { Button, Container, MenuItem, Select } from '@mui/material'
import Card from '../../Components/Card/Card';
import CardsWithImg from '../../Components/CardsWithImg/CardsWithImg';
const Properity = () => {
  const cardData = [
    {
      id: 1,
      img: "anylink",
      title: "الدانه",
      type: "انثي كبيره"
    },
    {
      id: 2,
      img: "anylink",
      title: "ضاحي",
      type: "ذكر كبير"
    },
    {
      id: 3,
      img: "anylink",
      title: "الروميساء",
      type: "انثي صغيره"
    },
    {
      id: 4,
      img: "anylink",
      title: "الدانه",
      type: "ذكر كبير"
    },
    {
      id: 5,
      img: "anylink",
      title: "ضاحي",
      type: "ذكر كبير"
    },
    {
      id: 6,
      img: "anylink",
      title: "الروميساء",
      type: "انثي كبيره"
    },
    {
      id: 7,
      img: "anylink",
      title: "الدانه",
      type: "انثي كبيره"
    },
    {
      id: 8,
      img: "anylink",
      title: "الدانه",
      type: "ذكر كبير"
    },
  ]
  return (
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
              marginRight: 2
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
              cardData.map((item) => (
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

export default Properity