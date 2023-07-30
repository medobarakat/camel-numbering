import React from 'react'
import CamelLogo from '../../Assets/Logo/CamelLogo'
import DummyImg from "../../Assets/Images/Femal.png"

import "./index.scss"
const CardsWithImg = ({ item }) => {
    return (
        <div className='card' id={item.id}>
            <img src={DummyImg} alt={item.title} />
            <div className='textWrapper'>
                <h5>
                    {item.title}
                </h5>
                <div className='textwithIcon'>
                    <p>{item.type}</p>
                    <CamelLogo />
                </div>
            </div>
        </div>
    )
}

export default CardsWithImg