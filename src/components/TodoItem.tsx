
import { Trash2 } from 'lucide-react';
import type { Todo } from '../types';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li className="group flex items-center gap-4 rounded-xl bg-gray-800 px-4 py-3.5 ring-1 ring-gray-700/60 transition hover:ring-gray-600">
      {/* Custom checkbox */}
      <button
        role="checkbox"
        aria-checked={todo.completed}
        onClick={() => onToggle(todo.id)}
        className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 transition-all ${
          todo.completed
            ? 'border-indigo-500 bg-indigo-500'
            : 'border-gray-600 bg-transparent hover:border-indigo-400'
        }`}
        aria-label={todo.completed ? 'Mark incomplete' : 'Mark complete'}
      >
        {todo.completed && (
          <svg
            className="h-2.5 w-2.5 text-white"
            fill="none"
            viewBox="0 0 10 8"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path d="M1 4l3 3 5-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>

      {/* Task text */}
      <span
        className={`flex-1 text-sm leading-relaxed transition-colors ${
          todo.completed ? 'text-gray-500 line-through' : 'text-gray-100'
        }`}
      >
        {todo.text}
      </span>

      {/* Delete button */}
      <button
        onClick={() => onDelete(todo.id)}
        aria-label="Delete task"
        className="flex-shrink-0 rounded-lg p-1.5 text-gray-600 opacity-0 transition hover:bg-red-500/10 hover:text-red-400 group-hover:opacity-100 focus:opacity-100"
      >
        <Trash2 size={15} />
      </button>
    </li>
  );
}
  