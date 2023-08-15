import React, { useEffect } from 'react'
import { useParams, useLocation, Link } from 'react-router-dom';
// images
import Grandfemale from "../../Assets/Images/Grandfemale.png"
import Grandmale from "../../Assets/Images/Grandmale.png"
import Youngfemale from "../../Assets/Images/Youngfemale.png"
import Youngmale from "../../Assets/Images/Youngmale.png"
// styles
import "./SingleProp.scss"
import { Container } from '@mui/material';
const SingleProp = () => {
    const location = useLocation();
    const item = location.state.item;
    const { id } = useParams();
    // useEffect(() => {
    //     console.log(item)
    // }, [])
    return (
        <div className='singlePropWrapper'>
            <div className='title'>
                <Container>
                    <h5>
                        <Link to="/prop">الاملاك</Link>  {" > "}  {item.NAME}
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
                                <p className='fromData'>{item.AGE_YEARS}</p>
                            </div>
                            <div className='singleItem-single'>
                                <p className='fromData'>
                                    {
                                        item.TYPE === 0 && ("حيوان مخصي")
                                    }
                                    {
                                        item.TYPE === 1 && ("جمل")
                                    }
                                    {
                                        item.TYPE === 2 && ("خيليّ ، فرسيّ")
                                    }
                                    {
                                        item.TYPE === 3 && ("بقريّ")
                                    }
                                    {
                                        item.TYPE === 4 && ("ضأنيّ ، غنميّ")
                                    }
                                    {
                                        item.TYPE === 5 && ("عنزيّ")
                                    }
                                    {
                                        item.TYPE !== 0 && item.TYPE !== 1 && item.TYPE !== 2 && item.TYPE !== 3 && item.TYPE !== 4 && item.TYPE !== 5 && (
                                            "غير معروف"
                                        )
                                    }
                                </p>
                            </div>
                            <div className='singleItem'>
                                <p className='fromData'>
                                    {
                                        item.SEX === 1 && (
                                            "ذكر"
                                        )
                                    }
                                    {
                                        item.SEX === 2 && (
                                            "أنثى"
                                        )
                                    }
                                    {
                                        item.SEX === 3 && (
                                            "حيوان مخصي"
                                        )
                                    }
                                    {
                                        item.SEX === 0 && (
                                            "حيوان مخصي"
                                        )
                                    }
                                </p>
                            </div>
                            <div className='singleItem'>
                                <p className='fromData'>
                                    {
                                        item.BARCODE_2 && (
                                            <>{item.BARCODE_2}</>
                                        )
                                    }
                                    {
                                        item.BARCODE_3 && (
                                            <>{item.BARCODE_3}</>
                                        )
                                    }
                                    {
                                        item.BARCODE_4 && (
                                            <>{item.BARCODE_4}</>
                                        )
                                    }
                                </p>
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
                                <p className='fromData'>
                                    {
                                        item.COLOR === 16 && (
                                            "المجاهيم"
                                        )
                                    }
                                    {
                                        item.COLOR === 17 && (
                                            "الوضح"
                                        )
                                    }
                                    {
                                        item.COLOR === 18 && (
                                            "الشعل"
                                        )
                                    }
                                    {
                                        item.COLOR === 19 && (
                                            "الصفر"
                                        )
                                    }
                                    {
                                        item.COLOR === 20 && (
                                            "الشقح"
                                        )
                                    }
                                    {
                                        item.COLOR === 21 && (
                                            "الحمر"
                                        )
                                    }
                                    {
                                        item.COLOR !== 16 && item.COLOR !== 17 && item.COLOR !== 18 && item.COLOR !== 19 && item.COLOR !== 20 && item.COLOR !== 21 && (
                                            "غير معرف"
                                        )
                                    }
                                </p>
                            </div>
                            <div className='singleItem'>
                                <p className='fromDataStatusSucess'>
                                    {
                                        item.STATUS === 3 && (
                                            "موجود"
                                        )
                                    }
                                    {
                                        item.STATUS === 6 && (
                                            "مباع"
                                        )
                                    }
                                    {
                                        item.STATUS === 7 && (
                                            "نافق"
                                        )
                                    }
                                    {
                                        item.STATUS === 12 && (
                                            "مذبوح"
                                        )
                                    }
                                    {
                                        item.STATUS !== 3 && item.STATUS !== 6 && item.STATUS !== 7 && item.STATUS !== 12 && (
                                            "غيرمعرف"
                                        )
                                    }
                                </p>
                            </div>
                            <div className='singleItem'>
                                <p className='fromData'>
                                    {
                                        item.BREED === 1 && (
                                            "محلى"
                                        )
                                    }
                                    {
                                        item.BREED === 2 && (
                                            "هجن"
                                        )
                                    }
                                    {
                                        item.BREED === 3 && (
                                            "مستورد"
                                        )
                                    }
                                    {
                                        item.BREED !== 1 && item.BREED !== 2 && item.BREED !== 3 && (
                                            "غير معرف"
                                        )
                                    }
                                </p>
                            </div>
                            <div className='singleItem'>
                                <p className='fromData'>
                                    {
                                        item.FARMING_TYPE === 1 && (
                                            "رعوي"
                                        )
                                    }
                                    {
                                        item.FARMING_TYPE === 2 && (
                                            "مزرعة"
                                        )
                                    }
                                    {
                                        item.FARMING_TYPE === 3 && (
                                            "أسواق"
                                        )
                                    }
                                    {
                                        item.FARMING_TYPE === 4 && (
                                            "أحواش"
                                        )
                                    }
                                    {
                                        item.FARMING_TYPE !== 1 && item.FARMING_TYPE !== 2 && item.FARMING_TYPE !== 3 && item.FARMING_TYPE !== 4 && (
                                            "غير معرف"
                                        )
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='LeftContent'>

                        {
                            item.AGE_YEARS >= 2 ? (
                                <>
                                    {
                                        item.SEX === 2 ? (
                                            <>
                                                <img src={Grandfemale} alt={item.NAME} />

                                            </>
                                        ) : (
                                            <>
                                                <img src={Grandmale} alt={item.NAME} />

                                            </>
                                        )
                                    }
                                </>
                            ) : (
                                <>
                                    {
                                        item.SEX === 2 ? (
                                            <>
                                                <img src={Youngfemale} alt={item.NAME} />

                                            </>
                                        ) : (
                                            <>
                                                <img src={Youngmale} alt={item.NAME} />

                                            </>
                                        )
                                    }
                                </>
                            )
                        }
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default SingleProp