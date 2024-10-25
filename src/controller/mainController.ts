"use server";

import Model from "@/model/Model";
import Product from "@/model/Product";
import { ProductCategory } from "@/model/ProductCategory";

const model = new Model();

export async function getAllProducts(): Promise<object[]> {
  const products = model.products;
  return products.map(toJSON);
}

export async function getProducts(
  productIds: (string | number)[]
): Promise<object[]> {
  const products = model.products;

  if (products.length === 0) {
    throw new Error("No products found");
  }

  const selectedProducts = products.filter((product) => {
    const matchingId = productIds.some((id) => {
      const idString = String(id);
      const baseId = idString.split("-")[0];
      return product.id === baseId;
    });

    return matchingId;
  });

  return selectedProducts.map(toJSON);
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

function toJSON(product: Product): object {
  return product.inJSON();
}
