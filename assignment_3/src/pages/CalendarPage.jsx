import React from 'react'
import CalendarView from '../components/calendar/CalendarView'

export default function CalendarPage() {
  return (
    <div className="bg-white dark:bg-slate-800 p-4 rounded shadow">
      <h3 className="font-semibold mb-4">Events Calendar</h3>
      <CalendarView />
    </div>
  )
}
