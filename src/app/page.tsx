import ProductGrid from "@/components/productGrid";
import CartSheet from "@/components/cartSheet";

export default function Home() {
  return (
    <div className="flex ">
      <ProductGrid />
      <CartSheet />
    </div>
  );
}
