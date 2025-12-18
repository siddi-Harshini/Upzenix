import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import CalendarPage from './pages/CalendarPage'
import KanbanPage from './pages/KanbanPage'
import Layout from './components/layout/Layout'

export default function App() {
  // theme persistence
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <Layout theme={theme} setTheme={setTheme}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/kanban" element={<KanbanPage />} />
      </Routes>
    </Layout>
  )
}
