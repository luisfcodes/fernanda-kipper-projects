'use client'

import { styled } from "styled-components"
import { Saira_Stencil_One } from "next/font/google"
import { PrimaryInputWSearchIcon } from "./primary-input"
import { CartControl } from "./cart-control"

const sairaStencilOne = Saira_Stencil_One({
  weight: ['400'],
  subsets: ['latin'],
})

const TagHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 160px;

  > div {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
`

const Logo = styled.a`
  color: var(--logo-color);
  font-weight: 400;
  font-size: 2.5rem;
  line-height: 150%;
`

export function Header() {
  return (
    <TagHeader>
      <Logo className={sairaStencilOne.className}>Capputeeno</Logo>
      <div>
        <PrimaryInputWSearchIcon placeholder="Procurando por algo específico?" />
        <CartControl />
      </div>
    </TagHeader>
  )
}