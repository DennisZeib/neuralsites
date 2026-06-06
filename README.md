
# Todo App

A clean, modern todo application with a dark theme built with React, TypeScript, and Tailwind CSS.

## Overview

A simple but polished todo app that lets you add tasks, mark them as complete, and delete them. All tasks are persisted in `localStorage` so they survive page refreshes — no backend required.

## Features

- **Add tasks** — type and press Enter or click the Add button
- **Complete tasks** — click the circular checkbox to toggle completion
- **Delete tasks** — hover a task to reveal the trash icon
- **Clear completed** — bulk-remove all finished tasks in one click
- **Progress bar** — visual indicator of how many tasks are done
- **Persistent storage** — tasks saved automatically to `localStorage`
- **Dark theme** — sleek gray + indigo color palette
- **Responsive** — works great on mobile and desktop

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 6** — dev server & bundler
- **Tailwind CSS 3** — utility-first styling
- **Lucide React** — icons (Plus, Trash2)
- **localStorage** — client-side persistence (no backend)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
├── types.ts                  # Todo interface
├── hooks/
│   └── useTodos.ts           # CRUD logic + localStorage sync
├── components/
│   ├── TodoInput.tsx         # Text input + Add button
│   ├── TodoItem.tsx          # Single task row
│   └── TodoList.tsx          # Task list + stats + progress bar
└── pages/
    └── HomePage.tsx          # Main page composition
```
  