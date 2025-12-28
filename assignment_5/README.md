# Spotify-like Music App

A modern music streaming application built with React, Redux Toolkit, and Tailwind CSS.

## Demo

> https://youtu.be/lzjtcgVfkvE

<!-- Example:
- **Live Demo**: [https://your-demo-link.com](https://your-demo-link.com)
- **Video Demo**: [Link to demo video]

### Screenshots
![Home Page](path-to-screenshot.png)
![Player](path-to-screenshot.png)
-->

## Features

- 🎵 **Responsive UI**: SongCard, Sidebar, TopPlay components
- 🔄 **Redux Toolkit**: State management for songs, player, and genres
- 🌐 **API Integration**: Mock API with fallback data
- 🎨 **Genre Filter**: Filter songs by music genres
- 📱 **Song Details Page**: Detailed view for each song
- ▶️ **Playback UI**: Interactive music player with controls
- ⚠️ **Error Handling**: Graceful error states and user feedback
- ⏳ **Loading States**: Skeleton loaders for better UX
- 🌓 **Theme Toggle**: Dark and light mode support

## Tech Stack

- React 18
- Redux Toolkit
- React Router
- Tailwind CSS
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
│   └── Error.jsx
├── pages/
│   ├── Discover.jsx
│   └── SongDetails.jsx
├── redux/
│   ├── store.js
│   ├── slices/
│   │   ├── playerSlice.js
│   │   └── songsSlice.js
├── services/
│   └── api.js
└── App.jsx
```

## Features Overview

### Redux State Management
- Player state (current song, playing status, volume)
- Songs state (all songs, genres, filters)
- Theme state (dark/light mode)

### Components
- **SongCard**: Displays song information with play button
- **Sidebar**: Navigation and genre filters
- **TopPlay**: Shows top charts and trending songs
- **Player**: Bottom playback controls
- **Loader**: Loading skeleton components
- **Error**: Error boundary and error messages

### Pages
- **Discover**: Main page with all songs and filters
- **SongDetails**: Detailed song view with lyrics and related songs

## API Integration

The app uses a mock API service that can be easily replaced with a real API (like Shazam Core API).

## Theme Support

Toggle between dark and light themes using the theme switcher in the top navigation.
