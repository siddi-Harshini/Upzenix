import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Mon', uv: 400 },
  { name: 'Tue', uv: 300 },
  { name: 'Wed', uv: 500 },
  { name: 'Thu', uv: 200 },
  { name: 'Fri', uv: 700 },
  { name: 'Sat', uv: 600 },
  { name: 'Sun', uv: 800 },
]

export default function MiniCharts() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Weekly Analytics</h3>
      <div style={{ height: 220 }}>
        <ResponsiveContainer>
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="uv" stroke="#4f46e5" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
