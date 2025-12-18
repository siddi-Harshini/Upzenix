import React from 'react'
import { Moon, Sun, Search } from 'lucide-react'

export default function Topbar({ theme, setTheme }) {
  return (
    <header className="flex items-center justify-between px-6 py-3 border-b dark:border-slate-800 bg-white dark:bg-slate-900">
      <div className="flex items-center gap-4">
        <div className="text-lg font-semibold">Admin Dashboard</div>
        <div className="hidden md:flex items-center bg-slate-100 dark:bg-slate-800 rounded-full px-3 py-1 gap-2">
          <Search size={16} />
          <input className="bg-transparent outline-none" placeholder="Search..." />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-2 rounded-full bg-slate-100 dark:bg-slate-800"
          aria-label="toggle theme"
        >
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </button>
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500" />
      </div>
    </header>
  )
}
