import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = momentLocalizer(moment)

const events = [
  {
    title: 'Premiere: The Starlight',
    start: new Date(),
    end: new Date(moment().add(2, 'hours')),
  },
  {
    title: 'VIP Screening',
    start: new Date(moment().add(1, 'days')),
    end: new Date(moment().add(1, 'days').add(3, 'hours')),
  },
]

export default function CalendarView() {
  return <Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" style={{ height: 500 }} />
}
