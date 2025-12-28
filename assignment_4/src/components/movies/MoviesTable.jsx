import React, { useMemo, useState } from 'react'
import { useMovies } from '../../context/MovieContext'
import MovieForm from './MovieForm'

function Pagination({ page, setPage, total }) {
  return (
    <div className="flex items-center gap-2">
      <button onClick={() => setPage((p) => Math.max(1, p - 1))} className="px-2 py-1 border rounded">Prev</button>
      <div className="text-sm">Page {page} / {total}</div>
      <button onClick={() => setPage((p) => Math.min(total, p + 1))} className="px-2 py-1 border rounded">Next</button>
    </div>
  )
}

export default function MoviesTable() {
  const { movies, addMovie, updateMovie, deleteMovie } = useMovies()
  const [filter, setFilter] = useState('')
  const [page, setPage] = useState(1)
  const perPage = 5
  const [editing, setEditing] = useState(null)
  const [showAdd, setShowAdd] = useState(false)

  const filtered = useMemo(() => movies.filter((m) => m.title.toLowerCase().includes(filter.toLowerCase())), [movies, filter])
  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage))
  const pageData = filtered.slice((page - 1) * perPage, page * perPage)

  function handleAdd(data) {
    addMovie(data)
    setShowAdd(false)
    setPage(1)
  }

  function handleUpdate(data) {
    updateMovie(editing.id, data)
    setEditing(null)
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <input placeholder="Filter by title" className="p-2 border rounded" value={filter} onChange={(e) => { setFilter(e.target.value); setPage(1) }} />
          <button onClick={() => setShowAdd((s) => !s)} className="px-3 py-1 bg-indigo-600 text-white rounded">{showAdd ? 'Close' : 'Add Movie'}</button>
        </div>
        <div className="text-sm text-slate-500">{filtered.length} movies</div>
      </div>

      {showAdd && <MovieForm onCancel={() => setShowAdd(false)} onSubmit={handleAdd} />}

      <table className="min-w-full text-sm bg-white dark:bg-slate-800 rounded overflow-hidden">
        <thead className="text-left text-slate-500">
          <tr>
            <th className="p-2">Title</th>
            <th className="p-2">Genre</th>
            <th className="p-2">Duration</th>
            <th className="p-2">Release</th>
            <th className="p-2">Price</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {pageData.map((m) => (
            <tr key={m.id} className="odd:bg-slate-50 dark:odd:bg-slate-900">
              <td className="p-2">{m.title}</td>
              <td className="p-2">{m.genre}</td>
              <td className="p-2">{m.duration} min</td>
              <td className="p-2">{m.releaseDate}</td>
              <td className="p-2">${m.price}</td>
              <td className="p-2">
                <button onClick={() => setEditing(m)} className="text-indigo-600 mr-2">Edit</button>
                <button onClick={() => deleteMovie(m.id)} className="text-red-500">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex items-center justify-between">
        <Pagination page={page} setPage={setPage} total={totalPages} />
        <div className="text-sm text-slate-500">Page {page} / {totalPages}</div>
      </div>

      {editing && (
        <div className="mt-4">
          <h4 className="font-semibold mb-2">Edit Movie</h4>
          <MovieForm initial={editing} onCancel={() => setEditing(null)} onSubmit={handleUpdate} />
        </div>
      )}
    </div>
  )
}
