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
        <button className="p-2 text-sm text-white bg-primary rounded-full">
          <svg
            xmlns="http://www.w3.org/
            2000/svg"
            className="w-6 h-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 0a2 2 0 012 2v2h2a2 2 0 110 4H8a2 2 0 110-4h2V2a2 2 0 012-2zM5 6a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm0 4a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm0 4a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm10 6a2 2 0 110-4 2 2 0 010 4z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
          <SheetDescription>Your shopping cart</SheetDescription>
        </SheetHeader>
        <Cart />
      </SheetContent>
    </Sheet>
  );
}
