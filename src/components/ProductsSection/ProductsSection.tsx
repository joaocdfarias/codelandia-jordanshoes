import { Product } from './Product'
import data from './mock.json'

import './ProductSection.css'

export const ProductsSection = () => {
  return (
    <section>
      <div className="products-text">
        <h1> Destaques </h1>
        <p>
          Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado.{' '}
        </p>
      </div>
      <div className="products">
        {data.products.map((item) => {
          return <Product imgSrc={item.src} />
        })}
      </div>
    </section>
  )
}
