"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="grid place-items-center min-h-dvh">
      <div className="flex flex-col items-center justify-center gap-8 text-center">
        <h2 className="text-heading text-3xl md:text-7xl font-medium">
          Something went wrong!
        </h2>
        <button
          className="px-6 rounded-full border border-btn-secondary duration-300 py-2 bg-btn-secondary hover:bg-btn"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </button>
      </div>
    </div>
  );
}
