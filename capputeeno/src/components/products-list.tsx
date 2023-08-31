'use client'

import { useProducts } from "@/hooks/useProducts"
import { ProductCard } from "./product-card"
import { styled } from "styled-components"

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 256px);
  grid-gap: 2rem;
  max-width: 100%;
  margin-top: 2rem;
`

export function ProductsList(){
  const { data } = useProducts()

  return (
    <ListContainer>
      {data?.map(product => (
        <ProductCard 
          key={product.id}
          image_url={product.image_url}
          title={product.name}
          price={product.price_in_cents}
          id={product.id}
        />
      ))}
    </ListContainer>
  )
}