import React from 'react'

import './Product.css'

type ProductProps = {
  imgSrc: string
  alt: string
}

export const Product = ({ imgSrc, alt }: ProductProps) => {
  return (
    <div className="product">
      <img draggable="false" src={imgSrc} alt={alt} />
    </div>
  )
}
