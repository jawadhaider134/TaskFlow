const filters = ["All", "Active", "Completed"];

const TaskFilters = ({ activeFilter, onFilterChange, onClearAll }) => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`rounded-xl px-4 py-2.5 text-sm font-medium transition ${
            activeFilter === filter
              ? "bg-violet-600 text-white shadow-sm"
              : "bg-white text-slate-500 hover:bg-slate-100"
          }`}
        >
          {filter}
        </button>
      ))}
      <button
        className="rounded-xl px-4 py-2.5 text-sm font-medium transition bg-rose-50 text-rose-600"
        onClick={() => onClearAll()}
      >
        Clear all Completed
      </button>
    </div>
  );
};

export default TaskFilters;
