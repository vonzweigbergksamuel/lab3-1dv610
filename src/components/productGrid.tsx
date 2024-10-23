import { getAllProducts } from "@/controller/mainController";
import { ProductProperties } from "@/types/product";
import Image from "next/image";
import CartButtons from "./cartButtons";
import { DEFAULT_IMG } from "./cart";

export default async function ProductGrid() {
  const products: ProductProperties[] = await getAllProducts();

  return (
    <div className="flex gap-24 justify-center mt-[10%]">
      {products.map((product) => (
        <div key={product.id} className="flex-col">
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          <Image
            src={product.image || DEFAULT_IMG}
            alt={product.name || ""}
            width={100}
            height={100}
          />
          {product.id && <CartButtons productId={product.id} />}
        </div>
      ))}
    </div>
  );
}
