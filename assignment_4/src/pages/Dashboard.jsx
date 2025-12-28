import React from 'react'
import Cards from '../components/dashboard/Cards'
import MiniCharts from '../components/charts/MiniCharts'
import DynamicTable from '../components/table/DynamicTable'

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <Cards />
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white dark:bg-slate-800 p-4 rounded shadow">
          <MiniCharts />
        </div>
        <div className="bg-white dark:bg-slate-800 p-4 rounded shadow">
          <h3 className="font-semibold mb-4">Latest Bookings</h3>
          <DynamicTable />
        </div>
      </div>
    </div>
  )
}
