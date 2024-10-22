import ProductGrid from "@/components/productGrid";
import CartSheet from "@/components/cartSheet";

export default function Home() {
  return (
    <div className="flex-col h-screen">
      <h1 className="text-5xl pt-16 text-center">Samuel - L3</h1>
      <ProductGrid />
      <div className="top-16 right-16 absolute">
        <CartSheet />
      </div>
    </div>
  );
}
