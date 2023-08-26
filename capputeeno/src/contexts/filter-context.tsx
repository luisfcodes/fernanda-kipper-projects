'use client'

import { FilterTypes } from "@/types/filter-types";
import { ReactNode, createContext, useState } from "react";

export const FilterContext = createContext({
  search: '',
  page: 0,
  type: FilterTypes.ALL,
  setSearch: (search: string) => {},
  setPage: (page: number) => {},
  setType: (type: FilterTypes) => {}
})

interface FilterContextProviderProps {
  children: ReactNode
}

export function FilterContextProvider({children}: FilterContextProviderProps){
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(0)
  const [type, setType] = useState(FilterTypes.ALL)

  return (
    <FilterContext.Provider value={{search, page, type, setSearch, setPage, setType}}>
      {children}
    </FilterContext.Provider>
  )
}