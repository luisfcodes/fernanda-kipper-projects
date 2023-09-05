import { ProductInCart } from "@/types/product"
import { formatValue } from "@/utils/format-price"
import Image from "next/image"
import { ChangeEvent } from "react"
import { styled } from "styled-components"
import { DeleteIcon } from "../icons/delete-icon"

interface CartItemProps {
  product: ProductInCart
  handleUpdateQuantity: (id: string, quantity: number) => void
  handleDeleteItem: (id: string) => void
}

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 210px;
  border-radius: 8px;
  background-color: white;
  width: 100%;
  position: relative;

  button {
    cursor: pointer;
    background-color: transparent;
    border: none;

    svg {
      position: absolute;
      top: 1rem;
      right: 1rem;
    }
  }

  img {
    max-height: 100%;
    max-width: 256px;
    width: 100%;
    border-radius: 8px 0 0 8px;
  }

  > div {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    flex-direction: column;
    padding: 1rem 1.5rem;
    line-height: 150%;
    color: var(--text-dark-2);

    h4 {
      font-weight: 300;
      font-size: 1.25rem;
    }

    p {
      font-weight: 400;
      font-size: 0.75rem;
      max-height: 50%;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      span {
        font-weight: 600;
        font-size: 1rem;
        color: var(--shape-dark);
      }
    }
  }
`

const SelectQuantity = styled.select`
  padding: 0.5rem 0.75rem;
  border: 1.5px solid var(--border-color);
  border-radius: 8px;
  background-color: var(--bg-secondary);
  color: var(--text-dark);
  font-weight: 400;
  font-size: 1rem;
  cursor: pointer;
`

export function CartItem({ product, handleUpdateQuantity, handleDeleteItem }: CartItemProps) {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    handleUpdateQuantity(product.id, Number(event.target.value))
  }

  return (
    <Item>
      <button onClick={() => handleDeleteItem(product.id)} aria-label="Deletar">
        <DeleteIcon />
      </button>
      <Image src={product.image_url} alt={product.name} width={256} height={210} />
      <div>
        <h4>{product.name}</h4>
        <p>{product.description}</p>
        <div>
          <SelectQuantity value={product.quantity} onChange={handleChange}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </SelectQuantity>
          <span>{formatValue(product.price_in_cents)}</span>
        </div>
      </div>
    </Item>
  )
}