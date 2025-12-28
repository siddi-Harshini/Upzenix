import React, { createContext, useContext, useState, useCallback } from 'react'

const NotificationContext = createContext()

export function useNotification() {
  return useContext(NotificationContext)
}

export function NotificationProvider({ children }) {
  const [notifs, setNotifs] = useState([])

  const notify = useCallback(({ type = 'info', message = '' }) => {
    const id = Date.now()
    setNotifs((s) => [...s, { id, type, message }])
    setTimeout(() => {
      setNotifs((s) => s.filter((n) => n.id !== id))
    }, 3500)
  }, [])

  return (
    <NotificationContext.Provider value={{ notifs, notify }}>
      {children}
    </NotificationContext.Provider>
  )
}
