# Spotify Music App - Advanced Edition

An advanced music streaming application with persistent state management, user preferences, and smooth transitions.

## Demo

> **Add your demo link, screenshots, or GIF here**

<!-- Example:
- **Live Demo**: [https://your-demo-link.com](https://your-demo-link.com)
- **Video Demo**: [Link to demo video]

### Screenshots
![Home Page](path-to-screenshot.png)
![Player](path-to-screenshot.png)
-->

## 🆕 New Features (v2.0)

### 🔄 Persistent State Management
- **Redux Persist**: All state persists across browser sessions
- **LocalStorage Integration**: Automatic save/restore of user data
- **Hydration**: Seamless state recovery on app reload

### 👤 User Preferences
- **Last Played Songs**: Automatically track and display recently played songs
- **Preferred Genre**: Remember user's favorite genre selection
- **Volume Preference**: Save and restore volume settings
- **Theme Preference**: Persistent dark/light mode selection

### 🎵 Global Playback Management
- **Cross-page Playback**: Music continues playing across page navigation
- **Synchronized State**: Play/pause state synced globally
- **Queue Management**: Persistent playback queue
- **Resume Playback**: Continue from last position on app reload

### ✨ Smooth Transitions & Animations
- **Framer Motion**: Fluid page transitions
- **CSS Animations**: Smooth component animations
- **Loading States**: Elegant loading animations
- **Hover Effects**: Interactive UI feedback

## Features

- 🎵 **Responsive UI**: Enhanced SongCard, Sidebar, TopPlay components
- 🔄 **Redux Toolkit + Persist**: Advanced state management with persistence
- 🌐 **API Integration**: Mock API with fallback data
- 🎨 **Genre Filter**: Filter songs with saved preferences
- 📱 **Song Details Page**: Detailed view with smooth transitions
- ▶️ **Persistent Playback**: Resume where you left off
- 📊 **User Analytics**: Track listening history
- ⚠️ **Error Handling**: Graceful error states with retry
- ⏳ **Loading States**: Beautiful skeleton loaders
- 🌓 **Theme Toggle**: Persistent dark/light mode
- 🎯 **Smart Recommendations**: Based on listening history

## Tech Stack

- React 18
- Redux Toolkit + Redux Persist
- React Router v6
- Tailwind CSS
- Framer Motion
- Axios
- React Icons
- Swiper

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── SongCard.jsx
│   ├── Sidebar.jsx
│   ├── TopPlay.jsx
│   ├── Player.jsx
│   ├── Loader.jsx
│   ├── Error.jsx
│   └── ThemeToggle.jsx
├── pages/
│   ├── Discover.jsx
│   ├── SongDetails.jsx
│   └── RecentlyPlayed.jsx
├── redux/
│   ├── store.js
│   ├── slices/
│   │   ├── playerSlice.js
│   │   ├── songsSlice.js
│   │   ├── themeSlice.js
│   │   └── preferencesSlice.js
├── services/
│   └── api.js
├── utils/
│   └── localStorage.js
└── App.jsx
```

## Key Enhancements

### Persistent State

The app uses Redux Persist to maintain state across browser sessions:
- Player state (current song, position, volume)
- Theme preferences
- User's genre selection
- Recently played songs
- Playback queue

### User Preferences

Track and save user behavior:
- Last 20 played songs
- Preferred music genre
- Volume level
- Theme choice
- Playback mode (shuffle/repeat)

### Smooth Transitions

Enhanced UX with animations:
- Page transitions with Framer Motion
- Component mount/unmount animations
- Hover and focus states
- Loading skeletons
- Smooth theme switching

## Local Storage Structure

```javascript
{
  "persist:root": {
    "player": {...},
    "preferences": {
      "lastPlayed": [...],
      "preferredGenre": "Pop",
      "recentSongs": [...]
    },
    "theme": {
      "darkMode": true
    }
  }
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
