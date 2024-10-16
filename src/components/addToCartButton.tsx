"use client";

import { useCallback, useContext, useState, useEffect } from "react";
import { Button } from "./ui/button";
import { CartContext } from "./cartContext";

export default function AddToCartButton({ productId }: { productId: number }) {
  const { cart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(
    cart?.getProductQuantity(productId) || 0
  );

  useEffect(() => {
    setQuantity(cart?.getProductQuantity(productId) || 0);
  }, [cart, productId]);

  const addProductToCart = useCallback(() => {
    cart?.addProductToCart(productId);
    setQuantity(cart?.getProductQuantity(productId) || 0);
  }, [cart, productId]);

  const removeProductFromCart = useCallback(() => {
    cart?.removeProductFromCart(productId);
    setQuantity(cart?.getProductQuantity(productId) || 0);
  }, [cart, productId]);

  const incrementQuantity = useCallback(() => {
    cart?.incrementProductQuantity(productId);
    setQuantity(cart?.getProductQuantity(productId) || 0);
  }, [cart, productId]);

  const decrementQuantity = useCallback(() => {
    cart?.decrementProductQuantity(productId);
    setQuantity(cart?.getProductQuantity(productId) || 0);
  }, [cart, productId]);

  return (
    <div>
      <p>Quantity: {quantity}</p>
      <Button onClick={() => addProductToCart()}>Add to cart</Button>
      <Button onClick={() => removeProductFromCart()}>Remove from cart</Button>
      <Button onClick={() => incrementQuantity()}>+</Button>
      <Button onClick={() => decrementQuantity()}>-</Button>
    </div>
  );
}
