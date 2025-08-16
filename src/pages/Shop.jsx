import React, { useState } from 'react'
import Shipping from '../components/Shipping'

const Shop = () => {
  let [perPage, setPerPage]=useState(6);
  let [currentPage, setCurrentPage]= useState(1);
  let last
  return (
    <div>
      <Shipping/>
    </div>
  )
}

export default Shop