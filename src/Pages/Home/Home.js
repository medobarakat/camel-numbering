import React, { useEffect, memo } from 'react'
//image
import TransferImg from "../../Assets/Images/transfer.png"
// icons
import Camel from "../../Assets/Logo/Camel"
import Hand from "../../Assets/Logo/Hand"
import Salary from "../../Assets/Logo/Salary"
import WorkIcon from '@mui/icons-material/Work'; import Export from "../../Assets/Logo/Export"
import Market from "../../Assets/Logo/Market"
import Transfer from "../../Assets/Logo/Transfer"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import LoopIcon from '@mui/icons-material/Loop';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import StoreIcon from '@mui/icons-material/Store';
//   styles
import "./Home.scss"
import { Container } from '@mui/material'
import { useSelector } from 'react-redux'
import { MainUrl, getWalletCount } from '../../Constance/ApiConstance'
import { useState } from 'react'
import axios from 'axios'
const Home = () => {
    const Savedtoken = useSelector(state => state.auth.token);
    const [errorText, setErrorText] = useState("")
    const [tokenCount, setTokenCount] = useState(0)
    const [loading, setLoading] = useState(false)
    const wallet_id = 2469117966;

    useEffect(()=>{
        getInitalData()
    },[])

    const getInitalData = async () => {
        setLoading(true)
        //  const url = MainUrl + "/token";
         const url = MainUrl + getWalletCount + wallet_id;
        setErrorText("")

        const config = {
            headers: {
              Accept: "application/json",
              Authorization : `bearer ${Savedtoken}`
            },
          };
        axios
            .get(url , config)
            .then((res) => {
                //  console.log(res.data.data.token_count);
                setLoading(false)
                 setTokenCount(res.data.data.token_count)
                // dispatch(setToken(res.data.token))
            })
            .catch((err) => {
                setErrorText(err.response.data.error);
                setLoading(false)
            });
    };
    return (
        <>
            {
                loading ? (
                    <div style={{marginTop:"9rem"}}>
                        <p>
                            loading ...
                        </p>
                    </div>
                ) : (
                    <div className='HomeWarpper'>
                        <Container>
                            <div className='firstSec'>
                                <div className='card'>
                                    <div className='iconandtxt'>
                                        <Camel />
                                        <p>
                                            الاملاك#
                                        </p>
                                    </div>

                                    <h4 className='number'>{tokenCount}</h4>
                                </div>
                                <div className='card'>
                                    <div className='iconandtxt'>
                                        <Hand />
                                        <p>
                                            المبيعات#
                                        </p>
                                    </div>
                                    <h4 className='number'>340</h4>
                                </div>
                                <div className='card'>
                                    <div className='iconandtxt'>
                                        <Salary />
                                        <p>
                                            لمشتريات#
                                        </p>
                                    </div>
                                    <h4 className='number'>340</h4>
                                </div>
                            </div>
                            <div className='secSec'>
                                <div className='title'>
                                    الخدمات
                                </div>
                                <div className='sec-cards'>
                                    <div className='card'>
                                        <div className='inner'>
                                            <WorkIcon />
                                            شراء ملكيه
                                        </div>
                                        <div className='outer'>
                                            <KeyboardBackspaceIcon />
                                        </div>
                                    </div>
                                    <div className='card'>
                                        <div className='inner'>

                                            <LoopIcon />
                                            نقل ملكيه
                                        </div>
                                        <div className='outer'>
                                            <KeyboardBackspaceIcon />
                                        </div>
                                    </div>
                                    <div className='card'>
                                        <div className='inner'>

                                            <SwapVertIcon />
                                            الاستيراد والتصدير
                                        </div>
                                        <div className='outer'>
                                            <KeyboardBackspaceIcon />
                                        </div>
                                    </div>
                                    <div className='card'>
                                        <div className='inner'>

                                            <StoreIcon />
                                            دخول الاسواق
                                        </div>
                                        <div className='outer'>
                                            <KeyboardBackspaceIcon />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </div>
                )
            }
        </>
    )
}

export default memo(Home)