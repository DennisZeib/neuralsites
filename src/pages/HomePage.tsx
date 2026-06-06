
import { useTodos } from '../hooks/useTodos';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';

export default function HomePage() {
  const { todos, addTodo, toggleTodo, deleteTodo, clearCompleted, completedCount, totalCount } =
    useTodos();

  return (
    <main className="min-h-screen bg-gray-900 px-4 py-12 sm:py-20">
      <div className="mx-auto w-full max-w-lg">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-400 ring-1 ring-indigo-500/20">
            My Tasks
          </div>
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
            Todo App
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Stay organised. Get things done.
          </p>
        </div>

        {/* Card */}
        <div className="rounded-2xl bg-gray-800/50 p-6 shadow-2xl shadow-black/40 ring-1 ring-gray-700/60 sm:p-8">
          <div className="flex flex-col gap-6">
            <TodoInput onAdd={addTodo} />
            <TodoList
              todos={todos}
              completedCount={completedCount}
              totalCount={totalCount}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
              onClearCompleted={clearCompleted}
            />
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-gray-700">
          Tasks are saved automatically in your browser.
        </p>
      </div>
    </main>
  );
}
  