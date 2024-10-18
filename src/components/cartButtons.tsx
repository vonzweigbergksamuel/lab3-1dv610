"use client";

import { useCart } from "../lib/cartHooks";
import { Button } from "./ui/button";

export default function CartButtons({
  productId,
}: {
  productId: string | number;
}) {
  const cart = useCart(productId);

  return (
    <div>
      <p>Quantity: {cart.quantity}</p>
      <Button onClick={cart.addToCart}>Add to Cart</Button>
      <Button onClick={cart.removeFromCart}>Remove from Cart</Button>
      <Button onClick={cart.incrementQuantity}>+</Button>
      <Button onClick={cart.decrementQuantity}>-</Button>
    </div>
  );
}
