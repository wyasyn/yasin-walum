import Link from "next/link";
import Toggle from "./toggle";
import Navigation from "./Navigation";

export default function Navbar() {
  return (
    <header className="py-3">
      <div className="container flex justify-between items-center">
        <Link href="/" className="text-heading font-display text-4xl flex">
          .<span>A</span>sin
        </Link>
        <div className="flex items-center space-x-4">
          <Navigation />
          <Toggle />
        </div>
      </div>
    </header>
  );
}
