'use client'

import { FilterTypes } from "@/types/filter-types";
import { PriorityTypes } from "@/types/priority-types";
import { ReactNode, createContext, useState } from "react";

export const FilterContext = createContext({
  search: '',
  page: 0,
  type: FilterTypes.ALL,
  priority: PriorityTypes.POPULARITY,
  setPriority: (priority: PriorityTypes) => {},
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
  const [priority, setPriority] = useState(PriorityTypes.POPULARITY)

  return (
    <FilterContext.Provider value={{search, page, type, priority, setSearch, setPage, setType, setPriority}}>
      {children}
    </FilterContext.Provider>
  )
}