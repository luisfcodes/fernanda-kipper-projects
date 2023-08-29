'use client'

import { useProducts } from "@/hooks/useProducts"
import { ProductCard } from "./product-card"

export function ProductsList(){
  const { data } = useProducts()

  return (
    <div>
      {data?.map(product => (
        <ProductCard 
          key={product.id}
          image_url={product.image_url}
          title={product.name}
          price={product.price_in_cents}
        />
      ))}
    </div>
  )
}