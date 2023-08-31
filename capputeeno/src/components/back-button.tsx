import { styled } from "styled-components";
import { BackIcon } from "./icons/back-icon";
import { useRouter } from "next/navigation";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 150%;
  color: var(--secondary-text);
  cursor: pointer;
  background-color: transparent;
  width: fit-content;
  border: none;
`

interface BtnProps {
  navigate: string;
}

export function BackBtn({ navigate }: BtnProps) {
  const router = useRouter();

  const handleNavigate = () => {
    router.push(navigate);
  }

  return (
    <Button onClick={handleNavigate}>
          <BackIcon />
          Voltar
    </Button>
  )
}