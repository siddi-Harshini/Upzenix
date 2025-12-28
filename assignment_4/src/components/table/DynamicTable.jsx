import React, { useMemo, useState } from 'react'

const initialData = new Array(23).fill(0).map((_, i) => ({
  id: i + 1,
  movie: ['Starlight', 'Nebula', 'Space Race'][i % 3],
  user: `User ${i + 1}`,
  seats: Math.floor(Math.random() * 6) + 1,
  date: new Date(Date.now() - i * 86400000).toISOString().slice(0, 10),
}))

export default function DynamicTable() {
  const [data, setData] = useState(initialData)
  const [filter, setFilter] = useState('')
  const [page, setPage] = useState(1)
  const perPage = 5

  const filtered = useMemo(() => data.filter((d) => d.movie.toLowerCase().includes(filter.toLowerCase())), [data, filter])
  const totalPages = Math.ceil(filtered.length / perPage)
  const pageData = filtered.slice((page - 1) * perPage, page * perPage)

  function addRow() {
    const next = { id: Date.now(), movie: 'New Movie', user: 'New User', seats: 1, date: new Date().toISOString().slice(0, 10) }
    setData((s) => [next, ...s])
  }

  function removeRow(id) {
    setData((s) => s.filter((r) => r.id !== id))
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <input placeholder="Filter by movie" className="p-2 border rounded" value={filter} onChange={(e) => setFilter(e.target.value)} />
          <button onClick={addRow} className="px-3 py-1 bg-indigo-600 text-white rounded">Add</button>
        </div>
        <div className="text-sm text-slate-500">{filtered.length} results</div>
      </div>

      <table className="min-w-full text-sm">
        <thead className="text-left text-slate-500">
          <tr>
            <th className="p-2">Movie</th>
            <th className="p-2">User</th>
            <th className="p-2">Seats</th>
            <th className="p-2">Date</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {pageData.map((r) => (
            <tr key={r.id} className="odd:bg-slate-50 dark:odd:bg-slate-900">
              <td className="p-2">{r.movie}</td>
              <td className="p-2">{r.user}</td>
              <td className="p-2">{r.seats}</td>
              <td className="p-2">{r.date}</td>
              <td className="p-2">
                <button onClick={() => removeRow(r.id)} className="text-red-500">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex items-center justify-between">
        <div>
          <button onClick={() => setPage((p) => Math.max(1, p - 1))} className="px-3 py-1 mr-2 border rounded">Prev</button>
          <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} className="px-3 py-1 border rounded">Next</button>
        </div>
        <div className="text-sm text-slate-500">Page {page} / {totalPages}</div>
      </div>
    </div>
  )
}
