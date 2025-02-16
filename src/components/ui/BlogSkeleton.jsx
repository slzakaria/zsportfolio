export function BlogSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="space-y-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="p-4 rounded-lg bg-slate-100 dark:bg-slate-800">
            <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-1/4 mb-4"></div>
            <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full mb-2"></div>
            <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-2/3"></div>
            <div className="flex gap-2 mt-4">
              <div className="h-6 w-16 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
              <div className="h-6 w-16 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}