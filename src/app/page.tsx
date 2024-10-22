import ProductGrid from "@/components/productGrid";
import CartSheet from "@/components/cartSheet";

export default function Home() {
  return (
    <div>
      <div className="flex h-screen">
        <ProductGrid />
      </div>
      <div className="top-10 right-10 absolute">
        <CartSheet />
      </div>
    </div>
  );
}
