import React from 'react'
import KanbanBoard from '../components/kanban/KanbanBoard'

export default function KanbanPage() {
  return (
    <div className="bg-white dark:bg-slate-800 p-4 rounded shadow">
      <h3 className="font-semibold mb-4">Kanban</h3>
      <KanbanBoard />
    </div>
  )
}
