import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import AlbumPage from './pages/AlbumPage';
import GenrePage from './pages/GenrePage';
import PlayerControls from './components/PlayerControls';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/album/:id" element={<AlbumPage />} />
        <Route path="/genre/:id" element={<GenrePage />} />
      </Routes>
      <PlayerControls />
    </Router>
  );
};

export default App;
