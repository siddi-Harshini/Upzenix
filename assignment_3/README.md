# 🎬 Assignment 3 — Movie Booking Admin Dashboard

## 📽️ Demo
🔗 **Add demo video link here** — paste your demo URL below:

`https://youtu.be/your-demo-link`

---

A polished admin dashboard scaffold for a *movie booking system* built with **React**, **Vite**, and **Tailwind CSS**. This project contains UI building blocks you can extend and connect to a backend: analytics charts, calendar events, a kanban board, dynamic tables with CRUD and pagination, and a dark/light theme.

## ✨ Features

- ✅ **Dashboard Cards** — Users, Tickets Sold, Revenue
- ✅ **Calendar** — `react-big-calendar` powered with `moment` localizer
- ✅ **Kanban Board** — Task columns with drag & drop (`react-beautiful-dnd`)
- ✅ **Analytics Charts** — Built with `recharts` (line/area charts)
- ✅ **Dynamic Table** — Add/Delete rows, filter, and pagination (client-side)
- ✅ **Theme Toggle** — Dark/Light theme with `localStorage` persistence
- ✅ **Responsive Layout** — Sidebar, Topbar, and main content area
- ✅ **Icons** — `lucide-react` icons across the UI

## 🛠️ Technologies Used

- React 18 + Vite
- Tailwind CSS (dark mode via `class`)
- Lucide Icons
- react-big-calendar + moment
- react-beautiful-dnd
- recharts

## 📁 Project Structure

```
assignment_3/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx            # React entry
    ├── App.jsx             # Router + theme handling
    ├── index.css           # Tailwind + CSS variables
    ├── pages/
    │   ├── Dashboard.jsx
    │   ├── CalendarPage.jsx
    │   └── KanbanPage.jsx
    └── components/
        ├── layout/         # Sidebar, Topbar, Layout
        ├── dashboard/      # Cards
        ├── charts/         # Recharts components
        ├── calendar/       # Calendar view
        ├── kanban/         # Kanban board
        └── table/          # Dynamic table
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm (or pnpm)

### Install

```bash
cd assignment_3
npm install
```

### Run (dev)

```bash
npm start
# open http://localhost:5173
```

## 📖 Usage Notes

- This scaffold focuses on frontend components. To persist data, connect the table and kanban board to an API (or add a mock server).  
- The theme toggle adds/removes the `dark` class on the `document.documentElement` and saves the choice to `localStorage`.

## ✅ Next steps you might want

- Add authentication and real API endpoints
- Replace demo data with a backend (REST or GraphQL)
- Add more charts (revenue by movie, bookings by day)
- Add tests and CI workflows

---

If you'd like, paste your demo video link above and I can also add it into the README for you. 🎥
