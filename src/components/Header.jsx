const Header = ({ searchInput, setSearchInput }) => {
  return (
    <header className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
      <div>
        <p className="mb-2 text-sm font-medium text-violet-600">
          YOUR WORKSPACE
        </p>

        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          My Tasks
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Organize your day, one task at a time.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative min-w-0 flex-1 sm:w-56 sm:flex-none">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-lg text-slate-400">
            ⌕
          </span>

          <input
            type="search"
            value={searchInput}
            placeholder="Search tasks..."
            className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-3 text-sm outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>

        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-violet-100 font-bold text-violet-700">
          J
        </div>
      </div>
    </header>
  );
};

export default Header;
