import { formatValue } from "@/utils/format-price";
import Image from "next/image";
import { styled } from "styled-components";

interface ProductCardProps {
  image_url: string;
  title: string;
  price: number;
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

  h3 {
    font-weight: 300;
    font-size: 1rem;
    line-height: 150%;
    color: var(--text-dark-2);
  }

  div {
    padding: 0.5rem 0;
    
    > div {
      width: 228px;
      height: 1px;
      margin: 0.5rem 0;
      padding: 0;
      background-color: var(--shapes);
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
  const priceFormatted = formatValue(props.price)

  return (
    <Card>
      <Image src={props.image_url} alt={props.title} width={256} height={300} />
      <div>
        <h3>{props.title}</h3>
        <div></div>
        <p>{priceFormatted}</p>
      </div>
    </Card>
  )
}