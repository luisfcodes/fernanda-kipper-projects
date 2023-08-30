import { styled } from "styled-components";
import { ArrowIcon } from "./icons/arrow-icon";
import { useState } from "react";
import { useFilter } from "@/hooks/useFilter";
import { PriorityTypes } from "@/types/priority-types";

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  button {
    background-color: transparent;
    cursor: pointer; 
    border: none;
    font-family: inherit;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.375rem;
    color: var(--text-dark);

    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const PriorityFilter = styled.ul`
  width: 250px;
  position: absolute;
  background-color: #FFFFFF;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 0.75rem 1rem;
  list-style: none;
  z-index: 10;
  top: 100%;
  right: 0.5rem;

  li {
    color: var(--text-dark);
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.375rem;
    cursor: pointer;
  }

  li + li {
    margin-top: 0.25rem;
  }
`

export function FilterByPriority(){
  const [isOpen, setIsOpen] = useState(false)
  const { setPriority } = useFilter()

  const handleOpen = () => setIsOpen(prev => !prev)

  const handleUpdatePriority = (priority: PriorityTypes) => {
    setPriority(priority)
    setIsOpen(false)
  }

  return (
    <FilterContainer>
      <button onClick={handleOpen}>
        Organizar por
        <ArrowIcon />
      </button>
      {isOpen && (
        <PriorityFilter>
          <li onClick={() => handleUpdatePriority(PriorityTypes.NEWS)}> Novidades </li>
          <li onClick={() => handleUpdatePriority(PriorityTypes.MINOR_PRICE)}> Preço: Maior - menor </li>
          <li onClick={() => handleUpdatePriority(PriorityTypes.BIGGEST_PRICE)}> Preço: Menor - maior </li>
          <li onClick={() => handleUpdatePriority(PriorityTypes.POPULARITY)}> Mais vendidos </li>
        </PriorityFilter>
      )}
    </FilterContainer>
  )
}