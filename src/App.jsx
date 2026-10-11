import { useReducer, useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import TaskStats from "./components/TaskStats";
import TaskForm from "./components/TaskForm";
import TaskFilters from "./components/TaskFilters";
import TaskList from "./components/TaskList";

const initialState = {
  tasks: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TASK": {
      const newTask = {
        id: state.tasks.length + 1,
        title: action.payload.title,
        completed: false,
        priority: action.payload.priority,
      };
      return { ...state, tasks: [...state.tasks, newTask] };
    }
    case "TOGGLE_TASK": {
      const taskId = action.payload;
      const tasks = state.tasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : { ...task },
      );
      return { ...state, tasks: tasks };
    }
    case "DELETE_TASK": {
      const taskId = action.payload;
      const tasks = state.tasks.filter((task) => task.id != taskId);
      return { ...state, tasks: tasks };
    }
    case "CLEAR_ALL": {
      const tasks = state.tasks.filter((task) => task.completed == false);
      return { ...state, tasks: tasks };
    }
    default:
      throw new Error("Unknown action");
  }
}

function App() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [state, dispatch] = useReducer(reducer, initialState);
  const [searchInput, setSearchInput] = useState("");

  const handleAddTask = (title, priority) => {
    dispatch({ type: "ADD_TASK", payload: { title, priority } });
  };
  const handleToggleTask = (id) => {
    dispatch({ type: "TOGGLE_TASK", payload: id });
  };

  const handleDeleteTask = (id) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  };

  const handleClearAll = () => {
    dispatch({ type: "CLEAR_ALL" });
  };
  const completedCount = state.tasks.filter((task) => task.completed).length;

  const activeCount = state.tasks.length - completedCount;

  // const filteredTasks = state.tasks.filter((task) => {
  //   if (activeFilter === "Active") return !task.completed;
  //   if (activeFilter === "Completed") return task.completed;

  //   return true;
  // });
  const filteredTasks = state.tasks.filter((task) => {
    const matchesStatus =
      activeFilter === "All" ||
      (activeFilter === "Active" && !task.completed) ||
      (activeFilter === "Completed" && task.completed);

    const matchesSearch = task.title
      .toLowerCase()
      .includes(searchInput.trim().toLowerCase());

    return matchesStatus && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 md:flex">
      <Sidebar tasks={state.tasks} />

      <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-10">
        <div className="mx-auto max-w-6xl space-y-8">
          <Header searchInput={searchInput} setSearchInput={setSearchInput} />

          <TaskStats
            total={state.tasks.length}
            active={activeCount}
            completed={completedCount}
          />

          <TaskForm onAdd={handleAddTask} />

          <section className="space-y-4">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Stay on track
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Focus on what matters today.
                </p>
              </div>

              <TaskFilters
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
                onClearAll={handleClearAll}
              />
            </div>

            <TaskList
              tasks={filteredTasks}
              onToggle={handleToggleTask}
              onDelete={handleDeleteTask}
            />
          </section>

          <footer className="pb-4 text-center text-xs text-slate-400">
            Made for better focus, one task at a time.
          </footer>
        </div>
      </main>
    </div>
  );
}

export default App;
