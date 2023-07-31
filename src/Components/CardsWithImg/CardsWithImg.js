import React from 'react'
import CamelLogo from '../../Assets/Logo/CamelLogo'
import DummyImg from "../../Assets/Images/Femal.png"

import "./index.scss"
import { Link } from 'react-router-dom'
const CardsWithImg = ({ item }) => {
    return (
        <Link
            key={item.id}
            to={{
                pathname: `/prop/${item.id}`,
                state: { item: item } 
            }}
            className='card'
            id={item.id}
        >            <img src={DummyImg} alt={item.title} />
            <div className='textWrapper'>
                <h5>
                    {item.title}
                </h5>
                <div className='textwithIcon'>
                    <p>{item.type}</p>
                    <CamelLogo />
                </div>
            </div>
        </Link>
    )
}

export default CardsWithImg