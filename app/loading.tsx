// app/loading.tsx
"use client";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-amber-50">
      <div className="flex space-x-2 mb-8">
        {/* Grãos de café animados */}
        <div className="w-4 h-6 bg-amber-800 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-4 h-6 bg-amber-700 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-4 h-6 bg-amber-900 rounded-full animate-bounce"></div>
      </div>

      <p className="text-amber-900 font-semibold text-lg">Loading...</p>
    </div>
  );
}
