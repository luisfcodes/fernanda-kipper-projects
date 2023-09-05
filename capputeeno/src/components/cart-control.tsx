import { useLocalStorage } from "@/hooks/useLocalStorage";

import { styled } from "styled-components";
import { CartIcon } from "./icons/cart-icon";
import { useRouter } from "next/navigation";

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

const Container = styled.button`
  position: relative;
  background-color: transparent;
  border: none;
  cursor: pointer;
`

export function CartControl() {
  const router = useRouter()
  const { value } = useLocalStorage('cart-items', [])

  return (
    <Container onClick={() => router.push('/cart')}>
      <CartIcon />
      {value.length > 0 && <CartCount>{value.length}</CartCount>}
    </Container>
  )
}