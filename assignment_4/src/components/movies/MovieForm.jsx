import React, { useState, useEffect } from 'react'

function Field({ label, value, onChange, type = 'text', placeholder }) {
  return (
    <div className="space-y-1">
      <label className="block text-sm text-slate-600">{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type={type}
        placeholder={placeholder}
        className="w-full p-2 border rounded bg-white dark:bg-slate-800"
      />
    </div>
  )
}

export default function MovieForm({ initial = {}, onCancel, onSubmit }) {
  const [form, setForm] = useState({ title: '', genre: '', duration: '', releaseDate: '', price: '', ...initial })
  const [errors, setErrors] = useState({})

  useEffect(() => setForm((f) => ({ ...f, ...initial })), [initial])

  function validate() {
    const err = {}
    if (!form.title || form.title.trim().length < 2) err.title = 'Title is required (min 2 chars)'
    if (!form.genre) err.genre = 'Genre required'
    if (!form.releaseDate) err.releaseDate = 'Release date required'
    if (!form.duration || Number(form.duration) <= 0) err.duration = 'Duration must be > 0'
    if (!form.price || Number(form.price) < 0) err.price = 'Price must be >= 0'
    setErrors(err)
    return Object.keys(err).length === 0
  }

  function submit(e) {
    e && e.preventDefault()
    if (!validate()) return
    const cleaned = { ...form, duration: Number(form.duration), price: Number(form.price) }
    onSubmit && onSubmit(cleaned)
  }

  return (
    <form onSubmit={submit} className="space-y-3 p-4 bg-white dark:bg-slate-800 rounded">
      <Field label="Title" value={form.title} onChange={(v) => setForm({ ...form, title: v })} placeholder="Movie title" />
      {errors.title && <div className="text-xs text-red-500">{errors.title}</div>}

      <Field label="Genre" value={form.genre} onChange={(v) => setForm({ ...form, genre: v })} placeholder="Genre" />
      {errors.genre && <div className="text-xs text-red-500">{errors.genre}</div>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div>
          <Field label="Duration (min)" value={form.duration} onChange={(v) => setForm({ ...form, duration: v })} type="number" />
          {errors.duration && <div className="text-xs text-red-500">{errors.duration}</div>}
        </div>
        <div>
          <Field label="Price ($)" value={form.price} onChange={(v) => setForm({ ...form, price: v })} type="number" />
          {errors.price && <div className="text-xs text-red-500">{errors.price}</div>}
        </div>
        <div>
          <Field label="Release Date" value={form.releaseDate} onChange={(v) => setForm({ ...form, releaseDate: v })} type="date" />
          {errors.releaseDate && <div className="text-xs text-red-500">{errors.releaseDate}</div>}
        </div>
      </div>

      <div className="flex items-center gap-2 justify-end">
        {onCancel && (
          <button type="button" onClick={onCancel} className="px-3 py-1 border rounded">
            Cancel
          </button>
        )}
        <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded">
          Save
        </button>
      </div>
    </form>
  )
}
