'use client'

import { useFilter } from "@/hooks/useFilter";
import { FilterTypes } from "@/types/filter-types";
import { styled } from "styled-components";

interface FilterItemProps {
  selected: boolean;
}

const FilterList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  list-style: none;
`

const FilterItem = styled.li<FilterItemProps>`
  font-family: inherit;
  font-size: 1rem;
  line-height: 1.375rem;
  text-align: center;
  text-transform: uppercase;
  color: var(--text-dark);
  cursor: pointer;
  
  font-weight: ${props => props.selected ? '600' : '400'};
  border-bottom: ${props => props.selected ? '4px solid var(--orange-low)' : 'none'};
`

export function FilterByType(){
  const { type, setType } = useFilter()

  const handleChangeType = (type: FilterTypes) => {
    setType(type)
  }

  return (
    <FilterList>
      <FilterItem 
        selected={type === FilterTypes.ALL} 
        onClick={() => handleChangeType(FilterTypes.ALL)}
      >
        Todos os Produtos
      </FilterItem>

      <FilterItem 
        selected={type === FilterTypes.SHIRT} 
        onClick={() => handleChangeType(FilterTypes.SHIRT)}
      >
        Camisetas
      </FilterItem>

      <FilterItem 
        selected={type === FilterTypes.MUG} 
        onClick={() => handleChangeType(FilterTypes.MUG)}
      >
        Canecas
      </FilterItem>
    </FilterList>
  )
}