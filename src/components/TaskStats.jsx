const TaskStats = ({ total, active, completed }) => {
  const stats = [
    {
      label: "Total tasks",
      value: total,
      symbol: "▦",
      color: "bg-violet-50 text-violet-600",
    },
    {
      label: "In progress",
      value: active,
      symbol: "◷",
      color: "bg-blue-50 text-blue-600",
    },
    {
      label: "Completed",
      value: completed,
      symbol: "✓",
      color: "bg-emerald-50 text-emerald-600",
    },
  ];

  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-slate-200 bg-white p-5"
        >
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-slate-500">{stat.label}</p>

            <span
              className={`flex h-10 w-10 items-center justify-center rounded-xl text-lg ${stat.color}`}
            >
              {stat.symbol}
            </span>
          </div>

          <p className="mt-4 text-3xl font-bold text-slate-900">{stat.value}</p>
        </div>
      ))}
    </section>
  );
};

export default TaskStats;
