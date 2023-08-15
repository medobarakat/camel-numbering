import React, { useEffect, useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Container, MenuItem, Select } from '@mui/material'
// styles
import "./Transactions.scss"
import TransactionsCard from '../../Components/TransactionsCard/TransactionsCard';
import { useSelector } from 'react-redux';
import { GetAllTransfers, MainUrl } from '../../Constance/ApiConstance';
import axios from 'axios';
import Loader from '../../Components/Loader/Loader';
const Transactions = () => {
    const data =
        [
            {
                id: 1,
                name: "اسامه عسكر",
                camelName: "الميساء",
                status: "sucess"
            },
            {
                id: 2,
                name: "مي علاء الدين",
                camelName: "الميساء",
                status: "ongoing"
            },
            {
                id: 3,
                name: "اسامه عسكر",
                camelName: "الميساء",
                status: "sucess"
            },
            {
                id: 4,
                name: "مي علاء الدين",
                camelName: "الميساء",
                status: "ongoing"
            },
            {
                id: 5,
                name: "اسامه عسكر",
                camelName: "الميساء",
                status: "sucess"
            },
            {
                id: 6,
                name: "مي علاء الدين",
                camelName: "الميساء",
                status: "ongoing"
            },
            {
                id: 7,
                name: "اسامه عسكر",
                camelName: "الميساء",
                status: "sucess"
            },
            {
                id: 8,
                name: "مي علاء الدين",
                camelName: "الميساء",
                status: "ongoing"
            }

        ]
    const Savedtoken = useSelector(state => state.auth.token);
    const [loading, setLoading] = useState(false)
    const wallet_id = 2469117966;
    useEffect(() => {
        getInitalData();
    }, []);

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
                console.log(res.data.data)
            })
            .catch((err) => {
                setLoading(false)
            });
    };
    return (
        <>
            {
                loading ? (
                    <Loader />
                ) : (
                    <div className='transationsWrapper'>
                        <div className='title'>
                            <Container>
                                <h5>
                                    المعاملات
                                </h5>
                            </Container>
                        </div>
                        <div>
                            <Container>
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
                                            marginLeft: "20px",
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
                                <div className='CardWrapper'>
                                    {data.map((item) => (
                                        <TransactionsCard key={item.id} data={item} />
                                    ))}
                                </div>
                            </Container>
                        </div>
                    </div>
                )
            }
        </>

    )
}

export default Transactions