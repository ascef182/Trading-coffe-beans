"use client";

import { useEffect, useState } from "react";

export function ClientErrorBoundary({
  children,
}: {
  children: React.ReactNode;
}) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = () => setHasError(true);
    window.addEventListener("error", errorHandler);
    return () => window.removeEventListener("error", errorHandler);
  }, []);

  if (hasError) {
    return (
      <div className="p-4 text-center">
        <h2 className="text-xl font-bold mb-2">Something went wrong</h2>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-primary text-white rounded"
        >
          Refresh Page
        </button>
      </div>
    );
  }

  return <>{children}</>;
}
