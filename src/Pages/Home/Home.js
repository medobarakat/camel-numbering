import React from 'react'

//image
import TransferImg from "../../Assets/Images/transfer.png"

// icons
import Camel from "../../Assets/Logo/Camel"
import Hand from "../../Assets/Logo/Hand"
import Salary from "../../Assets/Logo/Salary"
import WorkIcon from '@mui/icons-material/Work';import Export from "../../Assets/Logo/Export"
import Market from "../../Assets/Logo/Market"
import Transfer from "../../Assets/Logo/Transfer"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import LoopIcon from '@mui/icons-material/Loop';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import StoreIcon from '@mui/icons-material/Store';
//   styles
import "./Home.scss"
import { Container } from '@mui/material'
const Home = () => {
    return (
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
                      
                        <h4 className='number'>340</h4>
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

export default Home