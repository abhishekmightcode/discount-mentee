export function LoadingSkeleton({ count = 4 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {Array.from({ length: count }, (_, i) => (
        <div key={i} className="rounded-2xl bg-white border border-border p-5 animate-pulse">
          <div className="w-12 h-12 bg-gray-100 rounded-xl mb-4" />
          <div className="h-4 bg-gray-100 rounded-lg w-3/4 mb-3" />
          <div className="h-3 bg-gray-100 rounded-lg w-full mb-2" />
          <div className="h-3 bg-gray-100 rounded-lg w-2/3" />
        </div>
      ))}
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div className="rounded-2xl bg-white border border-border p-6 animate-pulse">
      <div className="w-16 h-16 bg-gray-100 rounded-2xl mb-4" />
      <div className="h-5 bg-gray-100 rounded-lg w-1/2 mb-3" />
      <div className="h-3 bg-gray-100 rounded-lg w-full mb-2" />
      <div className="h-3 bg-gray-100 rounded-lg w-3/4 mb-4" />
      <div className="h-10 bg-gray-100 rounded-xl w-full" />
    </div>
  );
}
