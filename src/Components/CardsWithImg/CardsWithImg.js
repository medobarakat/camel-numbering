import React from 'react'
import CamleIcon from '../../Assets/Logo/CamleIcon'
// images
import Grandfemale from "../../Assets/Images/Grandfemale.png"
import Grandmale from "../../Assets/Images/Grandmale.png"
import Youngfemale from "../../Assets/Images/Youngfemale.png"
import Youngmale from "../../Assets/Images/Youngmale.png"


import "./index.scss"
import { Link } from 'react-router-dom'
const CardsWithImg = ({ item }) => {
    return (
        <Link
            key={item.WALLET_ID}
            to={{
                pathname: `/prop/${item.WALLET_ID}`,
            }}
            state={{item:item}}
            className='card'
            id={item.WALLET_ID}
        >            <img src={Grandfemale} alt={item.title} />
            <div className='textWrapper'>
                <h5>
                    {item.NAME}
                </h5>
                <div className='textwithIcon'>
                    <p>
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
                    </p>
                    <CamleIcon />
                </div>
            </div>
        </Link>
    )
}

export default CardsWithImg