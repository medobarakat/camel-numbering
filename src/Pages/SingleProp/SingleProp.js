import React, { useEffect } from 'react'
import { useParams, useLocation, Link } from 'react-router-dom';
import DummyImg from "../../Assets/Images/Femal.png"
import DummyImg2 from "../../Assets/Images/camel2.png"
// styles
import "./SingleProp.scss"
import { Container } from '@mui/material';
const SingleProp = () => {
    const location = useLocation();
    const data = location.state;
    const { id } = useParams();
    const MyData = {
        id: 1,
        name: "اللؤلوة",
        age: 33,
        type: "جمل",
        type2: "انثي",
        barcode: "hqi2quik9u9w2awe",
        color: "الحمر",
        status: "موجود",
        strain: "هجن",
        edu: "رعوي",
    }
    return (
        <div className='singlePropWrapper'>
            <div className='title'>
                <Container>
                    <h5>
                    <Link to="/prop">الاملاك</Link>  {" > "}  {MyData.name} 
                    </h5>
                </Container>
            </div>
            <Container>

                <div className='lowerContent'>

                    <div className='rightContent'>
                        <div className='col'>
                            <div className='singleItem'>
                                <p className='label'>السن</p>
                            </div>
                            <div className='singleItem-single'>
                                <p className='label'>نوع الحيوان</p>
                            </div>
                            <div className='singleItem'>
                                <p className='label'>الجنس</p>
                            </div>
                            <div className='singleItem'>
                                <p className='label'>الباركود</p>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='singleItem'>
                                <p className='fromData'>{MyData.age}</p>
                            </div>
                            <div className='singleItem-single'>
                                <p className='fromData'>{MyData.type}</p>
                            </div>
                            <div className='singleItem'>
                                <p className='fromData'>{MyData.type2}</p>
                            </div>
                            <div className='singleItem'>
                                <p className='fromData'>{MyData.barcode}</p>
                            </div>
                        </div>
                        <div className='col2'>
                            <div className='singleItem'>
                                <p className='label'>اللون</p>
                            </div>
                            <div className='singleItem-single'>
                                <p className='label'>الحالة</p>
                            </div>
                            <div className='singleItem'>
                                <p className='label'>السلالة</p>
                            </div>
                            <div className='singleItem'>
                                <p className='label'>التربية</p>
                            </div>
                        </div>
                        <div className='col2'>
                            <div className='singleItem'>
                                <p className='fromData'>{MyData.color}</p>
                            </div>
                            <div className='singleItem'>
                                <p className='fromDataStatusSucess'>{MyData.status}</p>
                            </div>
                            <div className='singleItem'>
                                <p className='fromData'>{MyData.strain}</p>
                            </div>
                            <div className='singleItem'>
                                <p className='fromData'>{MyData.edu}</p>
                            </div>
                        </div>
                    </div>
                    <div className='LeftContent'>
                        <img src={DummyImg} alt={MyData.name} />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default SingleProp