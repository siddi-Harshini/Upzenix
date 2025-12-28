import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Sidebar from './components/Sidebar';
import TopPlay from './components/TopPlay';
import Player from './components/Player';
import ThemeToggle from './components/ThemeToggle';
import Discover from './pages/Discover';
import SongDetails from './pages/SongDetails';

function App() {
  const { darkMode } = useSelector((state) => state.theme);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-dark transition-colors">
        <ThemeToggle />
        <Sidebar />
        
        <main className="ml-64 mr-0 xl:mr-80 pb-24 min-h-screen">
          <Routes>
            <Route path="/" element={<Discover />} />
            <Route path="/songs/:id" element={<SongDetails />} />
            <Route path="/library" element={<ComingSoon page="Library" />} />
            <Route path="/favorites" element={<ComingSoon page="Favorites" />} />
            <Route path="/recent" element={<ComingSoon page="Recent" />} />
            <Route path="/settings" element={<ComingSoon page="Settings" />} />
          </Routes>
        </main>

        <TopPlay />
        <Player />
      </div>
    </Router>
  );
}

// Placeholder component for unimplemented pages
const ComingSoon = ({ page }) => (
  <div className="flex items-center justify-center min-h-[80vh]">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        {page} Coming Soon
      </h1>
      <p className="text-gray-600 dark:text-gray-400">
        This feature is currently under development.
      </p>
    </div>
  </div>
);

export default App;
