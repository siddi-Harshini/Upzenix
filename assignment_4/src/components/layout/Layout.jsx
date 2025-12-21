import React from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

export default function Layout({ children, theme, setTheme }) {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1">
        <Topbar theme={theme} setTheme={setTheme} />
        <main className="p-6 container">{children}</main>
      </div>
    </div>
  )
}
