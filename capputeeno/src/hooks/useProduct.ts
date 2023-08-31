import { ProductFetchResponse } from "@/types/product-response";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string

const fetcher = (id: string): AxiosPromise<ProductFetchResponse> => {
  return axios.post(
    API_URL,
    { 
      query: `
        query {
          Product(id: "${id}"){
            name
            description
            category
            price_in_cents
            image_url
            created_at
          }
        }
      `
    }
  )
}

export function useProduct(id: string){
  const { data } = useQuery({
    queryKey: ['product', id],
    queryFn: () => fetcher(id),
    enabled: !!id
  })

  return {
    data: data?.data?.data?.Product
  }
}