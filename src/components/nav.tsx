export default function Nav() {
  return (
    <nav className="flex items-center justify-between w-full p-4 bg-foreground text-background">
      <div className="flex items-center gap-4">
        <a href="/" className="font-bold text-xl">
          Create Next App
        </a>
        <a href="/products">Products</a>
      </div>
      <div className="flex items-center gap-4">
        <a href="/cart">Cart</a>
        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Deploy now
        </a>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read our docs
        </a>
      </div>
    </nav>
  );
}
