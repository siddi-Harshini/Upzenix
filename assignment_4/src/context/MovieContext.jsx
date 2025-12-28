import React, { createContext, useContext, useState } from 'react'
import { useNotification } from './NotificationContext'

const MovieContext = createContext()

export function useMovies() {
  return useContext(MovieContext)
}

export function MovieProvider({ children }) {
  const [movies, setMovies] = useState([
    { id: 1, title: 'Starlight', genre: 'Sci-fi', duration: 120, releaseDate: '2025-10-12', price: 12.5 },
    { id: 2, title: 'Nebula', genre: 'Action', duration: 95, releaseDate: '2024-07-01', price: 10 },
  ])
  const { notify } = useNotification()

  function addMovie(movie) {
    try {
      setMovies((s) => [{ ...movie, id: Date.now() }, ...s])
      notify({ type: 'success', message: 'Movie added' })
      return true
    } catch (err) {
      notify({ type: 'error', message: 'Failed to add movie' })
      return false
    }
  }

  function updateMovie(id, updates) {
    try {
      setMovies((s) => s.map((m) => (m.id === id ? { ...m, ...updates } : m)))
      notify({ type: 'success', message: 'Movie updated' })
      return true
    } catch (err) {
      notify({ type: 'error', message: 'Failed to update movie' })
      return false
    }
  }

  function deleteMovie(id) {
    try {
      setMovies((s) => s.filter((m) => m.id !== id))
      notify({ type: 'success', message: 'Movie deleted' })
      return true
    } catch (err) {
      notify({ type: 'error', message: 'Failed to delete movie' })
      return false
    }
  }

  return (
    <MovieContext.Provider value={{ movies, addMovie, updateMovie, deleteMovie }}>
      {children}
    </MovieContext.Provider>
  )
}
