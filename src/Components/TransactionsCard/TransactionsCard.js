import React from 'react'
// icons
import Failure from "../../Assets/Logo/Failure"
import ShopBag from "../../Assets/Logo/ShopBag"
// styles
import "./TransactionsCard.scss"
const TransactionsCard = ({ data }) => {
    return (
        <div className='SignleCardWrapper' id={data.id}>
            <div className='icon'>
                {
                    data.status === "sucess" ? (
                        <ShopBag />
                    ) : (
                        <Failure />
                    )
                }
            </div>
            <div className='textContainer'>
                <p className='firstTxt'>
                    {data.name}
                </p>
                <p className='CamelTxt'>
                    {data.camelName}
                </p>
            </div>
            <div className='iconWrapper'>

                {
                    data.status === "sucess" ? (
                        <div className='accepted'>
                            <p>تمت الموافقه</p>
                        </div>
                    ) : (
                        <div className='failure'>
                            <p>قيد التنفيذ</p>
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default TransactionsCard