'use client'

import { BackBtn } from "@/components/back-button";
import { CartItem } from "@/components/cart/cart-item";
import { DefaultPageLayout } from "@/components/default-page-layout";
import { Divider } from "@/components/divider";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ProductInCart } from "@/types/product";
import { formatValue } from "@/utils/format-price";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-direction: column;

  @media (min-width: ${props => props.theme.desktopBreakpoint}) {
    flex-direction: row;
  }
`

const CartListContainer = styled.div`
  h3 {
    margin-top: 1.5rem;
    font-size: 1.5rem;
    font-weight: 500;
    text-transform: uppercase;
    color: var(--text-dark-2);
    line-height: 150%;
  }

  p {
    font-size: 1rem;
    font-weight: 300;
    line-height: 150%;
    color: var(--text-dark-2);

    span {
      font-weight: 600;
    }
  }
`

const CartList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
`

const CartResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 352px;
  min-height: 100%;
  padding: 1rem 1.5rem;
  background-color: white;
  border-radius: 4px;

  h3 {
    font-weight: 600;
    font-size: 1.25rem;
    color: var(--text-dark-2);
    text-transform: uppercase;
    margin-bottom: 2rem;
  }
`

const TotalItem = styled.div<{ isBold: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  font-weight: ${props => props.isBold ? '600' : '400'};
  font-size: 1rem;
  line-height: 150%;

  margin-bottom: 0.75rem;
`

const ShopBtn = styled.button`
  color: white;
  border-radius: 4px;
  background-color: var(--success-color);
  border: none;
  padding: 0.75rem 1rem;
  width: 100%;
  text-transform: uppercase;
  margin-top: 2.5rem;
  cursor: pointer;
`

export default function CartPage() {
  const {value, updateLocalStorage} = useLocalStorage<ProductInCart[]>('cart-items', [])

  const calculateTotal = (value: ProductInCart[], delivery: number = 0) => {
    const total = value.reduce((acc, item) => {
      return acc + (item.price_in_cents * item.quantity)
    }, 0)

    return formatValue(total + delivery)
  }

  const handleUpdateQuantity = (id: string, quantity: number) => {
    const newCart = value.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity
        }
      }

      return item
    })

    updateLocalStorage(newCart)
  }

  const handleDeleteItem = (id: string) => {
    const newCart = value.filter((item) => item.id !== id)

    updateLocalStorage(newCart)
  }

  return (
    <DefaultPageLayout>
      <Container>
        <CartListContainer>
          <BackBtn navigate="/"/>
          <h3>Seu carrinho</h3>
          <p>
            Total { value.length } produtos
            <span> { calculateTotal(value) }</span>
          </p>
          <CartList>
            { value.map((item) => (
              <CartItem 
                key={item.id} 
                product={item} 
                handleUpdateQuantity={handleUpdateQuantity}
                handleDeleteItem={handleDeleteItem}  
              />
            ))}
          </CartList>
        </CartListContainer>
        <CartResultContainer>
          <h3>Resumo do pedido</h3>

          <TotalItem isBold={false}>
            <p>Subtotal de produtos</p>
            <p>{ calculateTotal(value) }</p>
          </TotalItem>

          <TotalItem isBold={false}>
            <p>Entrega</p>
            <p>{ formatValue(4000) }</p>
          </TotalItem>

          <Divider />

          <TotalItem isBold={true}>
            <p>Total</p>
            <p>{ calculateTotal(value, 4000) }</p>
          </TotalItem>

          <ShopBtn>Finalizar Compra</ShopBtn>
        </CartResultContainer>
      </Container>
    </DefaultPageLayout>
  )
}