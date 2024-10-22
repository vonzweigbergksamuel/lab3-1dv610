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
    <div className="flex flex-col my-4 justify-center items-center">
      <div className="flex gap-2">
        {/* <Button onClick={cart.addToCart}>Add to Cart</Button> */}
        {/* <Button onClick={cart.removeFromCart}>Remove from Cart</Button> */}
        <Button
          variant={"ghost"}
          onClick={cart.decrementQuantity}
          className="w-10 h-10 text-3xl text-red-700"
        >
          <p>-</p>
        </Button>
        <p className="my-auto mx-2 mb-2 pt-2 text-xl">{cart.quantity}</p>

        <Button
          variant={"ghost"}
          onClick={cart.incrementQuantity}
          className="w-10 h-10 text-3xl text-blue-700"
        >
          <p className="pt-[2px]">+</p>
        </Button>
      </div>
    </div>
  );
}
