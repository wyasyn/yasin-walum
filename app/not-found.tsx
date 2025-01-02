import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid place-items-center min-h-dvh">
      <div className="flex flex-col items-center justify-center gap-8 text-center">
        <h2 className="text-heading text-3xl md:text-7xl font-medium">
          Not Found
        </h2>
        <p>Could not find requested resource</p>
        <Link
          href="/"
          className="px-6 rounded-full border border-btn-secondary duration-300 py-2 bg-btn-secondary hover:bg-btn"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
