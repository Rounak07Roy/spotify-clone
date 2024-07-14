import React from 'react';
import Playlist from '../components/Playlist';
import Album from '../components/Album';
import Genre from '../components/Genre';

const Home = () => {
  const playlists = [
    // Array of playlist data
  ];

  const albums = [
    // Array of album data
  ];

  const genres = [
    // Array of genre data
  ];

  return (
    <div>
      <h1>Home</h1>
      <div>
        <h2>Playlists</h2>
        {playlists.map((playlist, index) => (
          <Playlist key={index} songs={playlist.songs} />
        ))}
      </div>
      <div>
        <h2>Albums</h2>
        {albums.map((album, index) => (
          <Album key={index} album={album} />
        ))}
      </div>
      <div>
        <h2>Genres</h2>
        {genres.map((genre, index) => (
          <Genre key={index} genre={genre.name} songs={genre.songs} />
        ))}
      </div>
    </div>
  );
};

export default Home;
