"use client";

import { useEffect } from "react";

export default function ReferenceError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Reference route error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold text-gray-900 mb-2">Something went wrong</h1>
        <p className="text-gray-600 text-sm mb-4">{error.message}</p>
        <button
          onClick={reset}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
