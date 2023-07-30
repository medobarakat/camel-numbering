import React from 'react'
// icon
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
// style
import "./property.scss"
import { Button, Container, MenuItem, Select } from '@mui/material'
import Card from '../../Components/Card/Card';
const Properity = () => {
  const cardData = [
    {
      id:1,
      img:"anylink",
      title:"الدانه",
      type:"انثي كبيره"
    }
  ]
  return (
    <div className="propWrapper">
      <div className='title'>
        <h5>
          الاملاك
        </h5>

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
        </div>

        <div>
          <Card />
        </div>
      </Container>

    </div>
  )
}

export default Properity