import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onToggle, onDelete }) => {
  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
        <div>
          <h2 className="font-bold text-slate-900">Your tasks</h2>
          <p className="mt-1 text-xs text-slate-500">
            Everything you need to get done
          </p>
        </div>

        <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">
          {tasks.length} items
        </span>
      </div>

      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))
      ) : (
        <div className="px-5 py-14 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-2xl text-violet-600">
            ✓
          </div>

          <h3 className="font-semibold text-slate-800">All caught up!</h3>

          <p className="mt-2 text-sm text-slate-500">
            No tasks here. Enjoy the breathing room.
          </p>
        </div>
      )}
    </section>
  );
};

export default TaskList;
