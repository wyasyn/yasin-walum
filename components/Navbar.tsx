import Link from "next/link";
import Toggle from "./toggle";
import Navigation from "./Navigation";

export default function Navbar() {
  return (
    <header className="py-4">
      <div className="container flex justify-between items-center">
        <Link
          href="/"
          className="text-heading text-xl font-medium tracking-wider"
        >
          Yasyn.
        </Link>
        <div className="flex items-center space-x-4">
          <Navigation />
          <Toggle />
        </div>
      </div>
    </header>
  );
}
