import { Link } from '@mui/material'
import React from 'react'

const Card = ({title}) => {
  return (
    <div>
        <Link>
        {title}
        </Link>
    </div>
  )
}

export default Card