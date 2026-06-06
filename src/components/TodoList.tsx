
import type { Todo } from '../types';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  completedCount: number;
  totalCount: number;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onClearCompleted: () => void;
}

export default function TodoList({
  todos,
  completedCount,
  totalCount,
  onToggle,
  onDelete,
  onClearCompleted,
}: TodoListProps) {
  if (totalCount === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-gray-700 py-16 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-800 text-3xl">
          ✓
        </div>
        <p className="text-sm font-medium text-gray-400">No tasks yet</p>
        <p className="text-xs text-gray-600">Add a task above to get started</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {/* Stats row */}
      <div className="flex items-center justify-between px-1">
        <p className="text-xs text-gray-500">
          <span className="font-semibold text-gray-300">{completedCount}</span> of{' '}
          <span className="font-semibold text-gray-300">{totalCount}</span> completed
        </p>
        {completedCount > 0 && (
          <button
            onClick={onClearCompleted}
            className="text-xs text-gray-500 transition hover:text-red-400"
          >
            Clear completed
          </button>
        )}
      </div>

      {/* Progress bar */}
      <div className="h-1 w-full overflow-hidden rounded-full bg-gray-700">
        <div
          className="h-full rounded-full bg-indigo-500 transition-all duration-500"
          style={{ width: `${Math.round((completedCount / totalCount) * 100)}%` }}
        />
      </div>

      {/* Task list */}
      <ul className="flex flex-col gap-2 pt-1">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
}
  