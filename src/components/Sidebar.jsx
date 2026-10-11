const Sidebar = ({ tasks }) => {
  return (
    <aside className="hidden w-64 shrink-0 flex-col border-r border-slate-200 bg-white p-6 md:flex">
      <a href="#" className="mb-12 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-xl font-bold text-white">
          T
        </div>
        <span className="text-xl font-bold tracking-tight text-slate-900">
          TaskFlow
        </span>
      </a>

      <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
        Workspace
      </p>

      <nav className="space-y-2">
        <button className="flex w-full items-center gap-3 rounded-xl bg-violet-50 px-4 py-3 text-sm font-semibold text-violet-700">
          <span>▦</span>
          My Tasks
          <span className="ml-auto rounded-md bg-violet-100 px-2 py-1 text-xs">
            {tasks.length}
          </span>
        </button>

        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-slate-500 transition hover:bg-slate-50 hover:text-slate-900">
          <span>◷</span>
          Upcoming
        </button>

        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-slate-500 transition hover:bg-slate-50 hover:text-slate-900">
          <span>✓</span>
          Completed
        </button>
      </nav>

      <div className="mt-auto rounded-2xl bg-slate-50 p-4">
        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-xl">
          ✦
        </div>

        <h3 className="font-semibold text-slate-900">Stay productive</h3>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          Small steps every day lead to big results.
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
