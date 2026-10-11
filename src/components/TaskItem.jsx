const TaskItem = ({ task, onToggle, onDelete }) => {
  const priorityStyles = {
    Low: "bg-slate-100 text-slate-600",
    Medium: "bg-amber-50 text-amber-700",
    High: "bg-rose-50 text-rose-600",
  };

  return (
    <div className="group flex items-center gap-3 border-b border-slate-100 px-4 py-4 last:border-b-0 sm:px-5">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        aria-label={`Mark ${task.title} as completed`}
        className="h-5 w-5 shrink-0 cursor-pointer accent-violet-600"
      />

      <div className="min-w-0 flex-1">
        <p
          className={`wrap-break-words text-sm font-medium ${
            task.completed ? "text-slate-400 line-through" : "text-slate-800"
          }`}
        >
          {task.title}
        </p>

        <p className="mt-1 text-xs text-slate-400">
          {task.completed ? "Completed" : "Keep it moving"}
        </p>
      </div>

      <span
        className={`hidden rounded-lg px-2.5 py-1.5 text-xs font-medium sm:inline-flex ${
          priorityStyles[task.priority] ?? priorityStyles.Medium
        }`}
      >
        {task.priority}
      </span>

      <button
        onClick={() => onDelete(task.id)}
        aria-label={`Delete ${task.title}`}
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-lg text-slate-400 transition hover:bg-rose-50 hover:text-rose-600"
      >
        ×
      </button>
    </div>
  );
};

export default TaskItem;
