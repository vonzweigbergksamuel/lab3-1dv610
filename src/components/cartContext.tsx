"use client";

import { createContext, useState, useEffect } from "react";
import { ShoppingCart } from "@svz1234/shopping-cart";

interface CartContextType {
  cart: ShoppingCart | null;
}

export const CartContext = createContext<CartContextType>({
  cart: null,
});

export function CartProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [cart, setCart] = useState<ShoppingCart | null>(null);

  useEffect(() => {
    setCart(new ShoppingCart("localStorage"));
  }, []);

  return (
    <CartContext.Provider value={{ cart }}>{children}</CartContext.Provider>
  );
}
