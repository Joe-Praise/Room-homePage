import React from 'react'
// import { HiArrowLongRight } from "react-icons/hi2";
import Arrow from './Arrow';
const ShopNowButton = ({className}) => {
  return (
    <button type='button' className={`shopNow ${className}`}>
        SHOP NOW <Arrow/>
    </button>
  )
}

export default ShopNowButton