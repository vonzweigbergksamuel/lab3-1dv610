"use client";

import { useCallback, useContext, useEffect, useState } from "react";
import { CartContext } from "../lib/cartContext";
import { getProducts } from "@/controller/mainController";
import { ProductProperties } from "@/types/product";
import Image from "next/image";

export const DEFAULT_IMG = "/static/capybara_barista_transparent-min.png";

export default function Cart() {
  const { cart } = useContext(CartContext);
  const [products, setProducts] = useState<ProductProperties[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProducts = useCallback(
    async (productsInCart: { productId: string | number }[]) => {
      try {
        setIsLoading(true);
        const productIds = productsInCart.map((item) => item.productId);
        const fetchedProducts = await getProducts(productIds);

        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    if (cart) {
      const productsInCart = cart!.getCart();
      fetchProducts(productsInCart);
    }
  }, [fetchProducts, cart]);

  if (!cart) {
    return <div>Loading cart...</div>;
  }

  if (isLoading) {
    return <div>Loading products...</div>;
  }

  return (
    <ul>
      {products.map(
        (product) =>
          product && (
            <li key={product.id}>
              <h2>{product.name}</h2>
              <p>{product.price}</p>
              <p>{product.description}</p>
              <Image
                src={product.image || DEFAULT_IMG}
                alt={product.name || ""}
                width={100}
                height={100}
              />
            </li>
          )
      )}
    </ul>
  );
}
