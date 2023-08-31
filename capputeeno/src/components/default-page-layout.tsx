"use client"

import { styled } from "styled-components"

export const DefaultPageLayout = styled.div`
  min-height: 100vh;
  padding: 0.75rem 1.5rem;
  background-color: var(--bg-primary);

  @media (min-width: ${props => props.theme.desktopBreakpoint}){
    padding: 2.125rem 10rem;
  }
`