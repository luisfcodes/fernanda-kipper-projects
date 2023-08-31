export interface ProductFetchResponse {
  data: {
    Product: {
      name: string;
      description: string;
      category: string;
      price_in_cents: number;
      image_url: string;
      created_at: string;
    }
  }
}