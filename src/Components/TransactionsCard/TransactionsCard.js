import React, { memo } from 'react'
// icons
import Failure from "../../Assets/Logo/Failure"
import ShopBag from "../../Assets/Logo/ShopBag"
// styles
import "./TransactionsCard.scss"
const TransactionsCard = ({ data, buyerData }) => {
    const buyerDataInfo = buyerData.find(data => buyerData.id === data.NEW_WALLET_ID);
    return (
        <div className='SignleCardWrapper' id={data?.id}>
            <div className='icon'>
                {/* if state === 2 that mean is not accepted yet */}
                {
                    data?.State === 2 && (
                        <>
                            <Failure />

                        </>
                    )
                }
                {/* still 4 and 3 */}
                {
                    data?.State === 4 && (
                        <>
                            <ShopBag />
                        </>
                    )
                }
            </div>
            <div className='textContainer'>
                <p className='firstTxt'>
                    {/* {data.name} */}
                    {buyerDataInfo?.FIRSTNAME} {" "} {buyerDataInfo?.SECONDNAME}
                </p>
                <p className='CamelTxt'>
                    {data?.ANIMAL_ID}
                </p>
            </div>
            <div className='iconWrapper'>
                {
                    data?.State === 2 && (
                        <div className='failure'>
                        <p>قيد التنفيذ</p>
                    </div>
                    )
                }
                {/* still 4 and 3 */}
                {
                    data?.State === 4 && (
                        <div className='accepted'>
                        <p>تمت الموافقه</p>
                    </div>
                    )
                }

            </div>
        </div>
    )
}

export default memo(TransactionsCard)