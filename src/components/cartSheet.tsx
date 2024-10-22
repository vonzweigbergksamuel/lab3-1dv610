import Cart from "@/components/cart";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function CartSheet() {
  return (
    <Sheet>
      <SheetTrigger>
        <svg viewBox="0 0 10 8" width="40">
          <path
            d="M1 1h8M1 4h 8M1 7h8"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
          <SheetDescription>Your shopping cart</SheetDescription>
        </SheetHeader>
        <div className="mt-2">
          <Cart />
        </div>
      </SheetContent>
    </Sheet>
  );
}
