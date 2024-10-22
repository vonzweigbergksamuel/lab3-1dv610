"use client";

import { useCallback, useContext, useEffect, useState } from "react";
import { CartContext } from "../lib/cartContext";
import { getProducts } from "@/controller/mainController";
import { ProductProperties } from "@/types/product";
import Image from "next/image";
import { Separator } from "./ui/separator";

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
            <li key={product.id} className="py-4">
              <div className="flex gap-8 justify-between pb-2">
                <div>
                  <h2 className="pb-1">{product.name}</h2>
                  <p className="pb-1">{product.price} kr</p>
                  <p className="text-lg font-bold">
                    {cart.getProductQuantity(product.id!)} st
                  </p>
                </div>
                <Image
                  src={product.image || DEFAULT_IMG}
                  alt={product.name || ""}
                  width={100}
                  height={100}
                />
              </div>
              <Separator />
            </li>
          )
      )}
    </ul>
  );
}
