//products.ts
import { Product } from "@/types";
import axios, { AxiosResponse } from "axios";

export const getProducts = async (
  category: string | string[]
): Promise<Product[]> => {
  if (category) {
    const response: AxiosResponse<Product[]> = await axios.get(
      `https://fakestoreapi.com/products/category/${category}`
    );
    return response.data;
  } else {
    const response: AxiosResponse<Product[]> = await axios.get(
      "https://fakestoreapi.com/products"
    );
    return response.data;
  }
};
