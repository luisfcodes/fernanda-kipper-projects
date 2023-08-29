import { styled } from "styled-components";
import { InputHTMLAttributes } from "react";
import { SearchIcon } from "./icons/search-icon";

export const PrimaryInput = styled.input`
  width: 352px;
  border-radius: 8px;
  border: none;
  background-color: var(--bg-secondary);
  padding: 0.625rem 1rem;

  font-family: inherit;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 22px;
  color: var(--text-dark);
`

const InputContainer = styled.div`
  position: relative;
  width: 352px;

  svg {
    position: absolute;
    right: 1.25rem;
    top: 50%;
    transform: translateY(-50%);
  }
`

interface PrimaryInputWSearchIconProps extends InputHTMLAttributes<HTMLInputElement>{
  handleChange: (value: string) => void;
}

export function PrimaryInputWSearchIcon(props: PrimaryInputWSearchIconProps){
  return (
    <InputContainer>
      <PrimaryInput onChange={(event) => props.handleChange(event.target.value)} {...props}/>
      <SearchIcon />
    </InputContainer>
  )
}