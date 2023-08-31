'use client'

import { BackBtn } from "@/components/back-button";
import { DefaultPageLayout } from "@/components/default-page-layout";
import { ShoppingBagIcon } from "@/components/icons/shopping-bag-icon";
import { useProduct } from "@/hooks/useProduct";
import { formatValue } from "@/utils/format-price";
import Image from "next/image";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  section {
    margin-top: 1.5rem;
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 2rem;

    img {
      width: 50%;
      height: auto;
    }

    > div {
      display: flex;
      justify-content: space-between;
      flex-direction: column;

      button {
        background-color: #115D8C;
        mix-blend-mode: multiply;
        border-radius: 4px;
        color: white;
        border: none;
        cursor: pointer;
        padding: 0.625rem 0;
        font-weight: 500;
        font-size: 1rem;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;
        line-height: 150%;
      }
    }
  }
`

const ProductInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  span {
    font-weight: 400;
    font-size: 1rem;
    line-height: 150%;
    color: var(--text-dark2);
  }

  h2 {
    font-weight: 300;
    font-size: 2rem;
    line-height: 150%;
    color: var(--text-dark2);
    margin-top: 0.75rem;
  }

  span:nth-of-type(2) {
    font-weight: 600;
    font-size: 1.25rem;
    color: var(--shapes-dark);
    margin-bottom: 1.5rem;
  }

  p {
    font-weight: 400;
    font-size: 0.75rem;
    color: var(--text-dark);
  }

  div {

    margin-top: 2rem;

    h3 {
      text-transform: uppercase;
      color: var(--text-dark);
      font-size: 1rem;
      font-weight: 500;
    }

    p {
      font-size: 0.875rem;
    }
  }
`

export default function Product({ searchParams }: { searchParams: { id: string } }) {
  const { data } = useProduct(searchParams.id)

  return (
    <DefaultPageLayout>
      <Container>
        <BackBtn navigate="/" />
        <section>
          <Image src={data?.image_url} alt={data?.name} width={640} height={640} />
          <div>
            <ProductInfo>
              <span>{data?.category}</span>
              <h2>{data?.name}</h2>
              <span>{formatValue(data?.price_in_cents ?? 0)}</span>
              <p>*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</p>
              <div>
                <h3>Descrição</h3>
                <p>{data?.description}</p>
              </div>
            </ProductInfo>
            <button>
              <ShoppingBagIcon />
              Adicionar ao carrinho
            </button>
          </div>
        </section>
      </Container>
    </DefaultPageLayout>
  )
}