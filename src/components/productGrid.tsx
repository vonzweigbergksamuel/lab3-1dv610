import { getAllProducts } from "@/controller/mainController";
import { ProductProperties } from "@/types/product";
import Image from "next/image";
import { DEFAULT_IMG } from "./cart";
import CartButtons from "./cartButtons";

export default async function ProductGrid() {
  const products: ProductProperties[] = await getAllProducts();

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          <p>{product.description}</p>
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
