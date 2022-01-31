import React from 'react'

import './Product.css'

type ProductProps = {
  imgSrc: string
}

export const Product = ({ imgSrc }: ProductProps) => {
  return (
    <div className="product">
      <img src={imgSrc} alt="" />
    </div>
  )
}
