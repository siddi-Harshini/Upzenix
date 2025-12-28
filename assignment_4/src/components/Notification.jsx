import React from 'react'
import { useNotification } from '../context/NotificationContext'

export default function NotificationCenter() {
  const { notifs } = useNotification()
  return (
    <div className="fixed right-4 top-4 space-y-2 z-50">
      {notifs.map((n) => (
        <div
          key={n.id}
          className={`px-4 py-2 rounded shadow text-sm font-medium ${
            n.type === 'success' ? 'bg-green-50 text-green-700' : n.type === 'error' ? 'bg-red-50 text-red-700' : 'bg-slate-50 text-slate-900'
          }`}
        >
          {n.message}
        </div>
      ))}
    </div>
  )
}
