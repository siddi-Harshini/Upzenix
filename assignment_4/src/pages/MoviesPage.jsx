import React from 'react'
import MoviesTable from '../components/movies/MoviesTable'

export default function MoviesPage() {
  return (
    <div className="bg-white dark:bg-slate-800 p-4 rounded shadow">
      <h3 className="font-semibold mb-4">Movies</h3>
      <MoviesTable />
    </div>
  )
}
