export default function ProgressBar({ current, total }: { current: number; total: number }) {
  const pct = ((current + 1) / total) * 100;

  return (
    <div className="w-full" role="progressbar" aria-valuenow={current + 1} aria-valuemin={1} aria-valuemax={total}>
      <div className="flex items-center justify-between mb-2">
        {Array.from({ length: total }, (_, i) => (
          <div key={i} className="flex items-center flex-1">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                i <= current
                  ? "gradient-blue text-white shadow-md"
                  : "bg-gray-100 text-muted"
              }`}
            >
              {i + 1}
            </div>
            {i < total - 1 && (
              <div className="flex-1 h-1 mx-2 rounded-full bg-gray-100 overflow-hidden">
                <div
                  className="h-full gradient-blue rounded-full transition-all duration-500"
                  style={{ width: i < current ? "100%" : i === current ? `${((current + 1) / total) * 100}%` : "0%" }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-between px-1">
        {["Personal", "Academic", "Upload", "Success"].map((label, i) => (
          <span
            key={label}
            className={`text-xs font-medium transition-colors ${
              i <= current ? "text-primary" : "text-muted"
            }`}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
