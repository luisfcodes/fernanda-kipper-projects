"use client"

import { FilterBar } from "@/components/filter-bar";
import { ProductsList } from "@/components/products-list";
import { styled } from "styled-components";

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 0.75rem 1.5rem;
  background-color: var(--bg-primary);

  @media (min-width: ${props => props.theme.desktopBreakpoint}){
    padding: 2.125rem 10rem;
  }
`

export default function Home() {
  return (
    <MainContainer>
      <FilterBar />
      <ProductsList />
    </MainContainer>
  )
}
