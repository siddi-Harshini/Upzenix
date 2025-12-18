import React from 'react'
import { Home, Calendar, Columns } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white dark:bg-slate-900 border-r dark:border-slate-800 min-h-screen p-4">
      <div className="mb-8 font-bold text-xl">Movie Admin</div>
      <nav className="space-y-2">
        <Link to="/" className="flex items-center gap-3 p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800">
          <Home size={18} /> <span>Dashboard</span>
        </Link>
        <Link to="/calendar" className="flex items-center gap-3 p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800">
          <Calendar size={18} /> <span>Calendar</span>
        </Link>
        <Link to="/kanban" className="flex items-center gap-3 p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800">
          <Columns size={18} /> <span>Kanban</span>
        </Link>
      </nav>
    </aside>
  )
}
