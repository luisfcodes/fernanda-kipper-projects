"use client"

import { FilterContextProvider } from "@/contexts/filter-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  desktopBreakpoint: '968px',
  tabletBreakpoint: '768px',
}

interface DefaultProvidersProps {
  children: ReactNode
}

export function DefaultProviders({children}: DefaultProvidersProps){
  const client = new QueryClient()

  return (
    <QueryClientProvider client={client}>
      <FilterContextProvider>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </FilterContextProvider>
    </QueryClientProvider>
  )
}