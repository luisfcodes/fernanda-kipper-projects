import { useLocalStorage } from "@/hooks/useLocalStorage";

import { styled } from "styled-components";
import { CartIcon } from "./icons/cart-icon";

const CartCount = styled.span`
  width: 17px;
  height: 17px;
  border-radius: 100%;
  padding: 0.125rem 0.5rem;

  background-color: var(--delete-color);
  color: white;

  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.625rem;
  right: -0.525rem;
  top: 50%;
`

const Container = styled.div`
  position: relative;
`

export function CartControl() {
  const { value } = useLocalStorage('cart-items', [])

  return (
    <Container>
      <CartIcon />
      {value.length > 0 && <CartCount>{value.length}</CartCount>}
    </Container>
  )
}