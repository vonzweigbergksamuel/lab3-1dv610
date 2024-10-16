"use server";

import Model from "@/model/Model";
import { ProductCategory } from "@/model/ProductCategory";

const model = new Model();

export async function getProducts(): Promise<object[]> {
  return model.getProductsInJSON();
}

export async function createProduct(
  name: string,
  price: number,
  description: string,
  image: string,
  category: ProductCategory
): Promise<void> {
  model.createProduct(name, price, description, image, category);
}

export async function updateProduct(
  id: string,
  name?: string,
  price?: number,
  description?: string,
  image?: string,
  category?: ProductCategory
): Promise<void> {
  model.updateProduct(id, name, price, description, image, category);
}

export async function deleteProduct(id: string): Promise<void> {
  model.deleteProduct(id);
}
