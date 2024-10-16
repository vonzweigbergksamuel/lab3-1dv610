"use client";

import { useCallback, useContext, useState, useEffect } from "react";
import { Button } from "./ui/button";
import { CartContext } from "./cartContext";

export default function AddToCartButton({ productId }: { productId: string }) {
  const { cart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(
    cart?.getProductQuantity(productId) || 0
  );

  const fetchProductQuantity = useCallback(() => {
    if (cart) {
      setQuantity(cart.getProductQuantity(productId));
    } else {
      setQuantity(0);
    }
  }, [cart, productId]);

  useEffect(() => {
    fetchProductQuantity();
  }, [fetchProductQuantity]);

  const addProductToCart = useCallback(() => {
    cart?.addProductToCart(productId);
    fetchProductQuantity();
  }, [fetchProductQuantity, cart, productId]);

  const removeProductFromCart = useCallback(() => {
    cart?.removeProductFromCart(productId);
    fetchProductQuantity();
  }, [fetchProductQuantity, cart, productId]);

  const incrementQuantity = useCallback(() => {
    cart?.incrementProductQuantity(productId);
    fetchProductQuantity();
  }, [fetchProductQuantity, cart, productId]);

  const decrementQuantity = useCallback(() => {
    cart?.decrementProductQuantity(productId);
    fetchProductQuantity();
  }, [fetchProductQuantity, cart, productId]);

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
