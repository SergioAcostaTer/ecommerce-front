//products.ts
import { Product } from "@/types";
import axios, { AxiosResponse } from "axios";

export const getProduct = async (
  id: string | string[]
): Promise<Product> => {
  const response: AxiosResponse<Product> = await axios.get(
    `https://fakestoreapi.com/products/${id}`
  );
  return response.data;
};
