import { formatValue } from "@/utils/format-price";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { styled } from "styled-components";
import { Divider } from "./divider";

interface ProductCardProps {
  image_url: string;
  title: string;
  price: number;
  id: string;
}

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 0px 0px 4px 4px;
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  width: 256px;
  cursor: pointer;

  h3 {
    font-weight: 300;
    font-size: 1rem;
    line-height: 150%;
    color: var(--text-dark-2);
  }

  div {
    padding: 0.5rem 0;
    width: 100%;

    > div {
      padding: 0;
    }

    p {
      font-weight: 600;
      font-size: 0.875rem;
      line-height: 150%;
      color: var(--shapes-dark);
    }
  }

  
`

export function ProductCard(props: ProductCardProps) {
  const router = useRouter()
  const priceFormatted = formatValue(props.price)

  const handleNavigate = () => {
    router.push(`/product?id=${props.id}`)
  }

  return (
    <Card onClick={handleNavigate}>
      <Image src={props.image_url} alt={props.title} width={256} height={300} />
      <div>
        <h3>{props.title}</h3>
        <Divider />
        <p>{priceFormatted}</p>
      </div>
    </Card>
  )
}