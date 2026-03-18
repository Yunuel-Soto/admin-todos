import { products } from '@/products/data/products'
import { ProductCard } from '@/products/indext'
import React from 'react'

export default function ProductsPage() {
  return (
    <div className='flex flex-row gap-3 flex-wrap'>
        {/* Product card */}
        {
          products.map((product, index) => (
            <ProductCard key={product.id} {...product}/>
          ))
        }
    </div>
  )
}
