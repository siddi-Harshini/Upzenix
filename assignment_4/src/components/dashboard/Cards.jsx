import React from 'react'
import { Users, Ticket, DollarSign } from 'lucide-react'

const Card = ({ icon, label, value, trend }) => (
  <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded shadow">
    <div className="flex items-center gap-4">
      <div className="p-3 bg-indigo-50 dark:bg-indigo-900 rounded">
        {icon}
      </div>
      <div>
        <div className="text-sm text-slate-500">{label}</div>
        <div className="font-semibold text-xl">{value}</div>
      </div>
    </div>
    <div className="text-sm text-green-500">{trend}</div>
  </div>
)

export default function Cards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card icon={<Users size={20} />} label="Users" value="8,642" trend="+5%" />
      <Card icon={<Ticket size={20} />} label="Tickets Sold" value="23,412" trend="+10%" />
      <Card icon={<DollarSign size={20} />} label="Revenue" value="$124,120" trend="+2%" />
    </div>
  )
}
