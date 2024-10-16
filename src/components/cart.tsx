"use client";

import { useContext, useEffect, useState } from "react";
import { CartContext } from "./cartContext";
import { getProducts } from "@/controller/mainController";
import Image from "next/image";

interface ProductProperties {
  id?: string;
  name?: string;
  price?: number;
  description?: string;
  image?: string;
}

const image = "/static/capybara_barista_transparent-min.png";

export default function Cart() {
  const { cart } = useContext(CartContext);
  const [products, setProducts] = useState<ProductProperties[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
    }

    fetchProducts();
  }, []);

  console.log(products);

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
                src={image}
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
