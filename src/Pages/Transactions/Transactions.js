import React, { memo, useEffect, useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Container, MenuItem, Select } from '@mui/material'
// styles
import "./Transactions.scss"
import TransactionsCard from '../../Components/TransactionsCard/TransactionsCard';
import { useSelector } from 'react-redux';
import { GetAllTransfers, MainUrl, WalletData, getpropData } from '../../Constance/ApiConstance';
import axios from 'axios';
import Loader from '../../Components/Loader/Loader';
const Transactions = () => {
    const Savedtoken = useSelector(state => state.auth.token);
    const [loading, setLoading] = useState(false)
    const wallet_id = 2469117966;
    // const wallet_id = useSelector(state => state.auth.wallet_id);
    const [buyerIds, setBuyerIds] = useState([]);
    const [transfers, setTransfers] = useState([])
    const [buyerData, setBuyerData] = useState([])
    const [selectedValue, setSelectedValue] = useState(0)
    const [filteredData, setFilteredData] = useState([])



    const selectionChangeHandler = (value) => {
        setSelectedValue(value)
        if (value === 0) {
            setFilteredData("")
        } else {
            setFilteredData(transfers.filter(item => item.State === value))
        }
    }

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
                setTransfers(res.data.data.Transfers)
                console.log(res.data.data.Transfers)
                const newWalletIds = [...new Set(res.data.data.Transfers.map(transfer => transfer.NEW_WALLET_ID))];
                setBuyerIds(newWalletIds)
            })
            .catch((err) => {
                setLoading(false)
                console.log(err)
            });
    };

    useEffect(() => {
        const fetchBuyerData = async () => {
            const buyerDataArray = [];

            for (const id of buyerIds) {
                try {
                    const walletData = await getWalletData(id);
                    const buyerData = {
                        id: id,
                        FIRSTNAME: walletData.FIRSTNAME,
                        SECONDNAME: walletData.SECONDNAME
                    };
                    buyerDataArray.push(buyerData);
                } catch (error) {
                    console.log(`Error fetching data for id ${id}:`, error);
                }
            }
            setBuyerData(buyerDataArray)
            console.log("Buyer Data Array:", buyerDataArray);
        };

        fetchBuyerData();
    }, [buyerIds]);

    const getWalletData = async (theId) => {
        setLoading(true);
        const url = MainUrl + WalletData + theId;
        const config = {
            headers: {
                Accept: "application/json",
                Authorization: `bearer ${Savedtoken}`
            },
        };
        try {
            const response = await axios.get(url, config);
            setLoading(false);
            return response.data.data.Wallet;
        } catch (error) {
            setLoading(false);
            throw error;
        }
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
                                        onChange={(e) => selectionChangeHandler(e.target.value)}
                                        variant="outlined"
                                        value={selectedValue}
                                        placeholder='الحاله'
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
                                        <MenuItem value={0}>
                                            الحاله
                                        </MenuItem>
                                        <MenuItem value={2}>
                                            قيد التنفيذ
                                        </MenuItem>
                                        <MenuItem value={3}>
                                            تمت الموافقه
                                        </MenuItem>
                                        <MenuItem value={4}>
                                            تم الرفض
                                        </MenuItem>
                                    </Select>
                                </div>
                                <div className='CardWrapper'>
                                    {
                                        filteredData.length > 0 ? (
                                            <>
                                                {filteredData.map((item) => (
                                                    <TransactionsCard key={item.id} data={item} buyerData={buyerData} />
                                                ))}
                                            </>
                                        ) : (
                                            <>
                                                {transfers.map((item) => (
                                                    <TransactionsCard key={item.id} data={item} buyerData={buyerData} />
                                                ))}
                                            </>
                                        )
                                    }
                                </div>
                            </Container>
                        </div>
                    </div>
                )
            }
        </>

    )
}

export default memo(Transactions)