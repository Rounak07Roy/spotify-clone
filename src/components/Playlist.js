import React from 'react';
import styled from 'styled-components';

const Playlist = ({ songs }) => {
  return (
    <PlaylistContainer>
      {songs.map((song, index) => (
        <Song key={index}>
          <SongTitle>{song.title}</SongTitle>
          <SongArtist>{song.artist}</SongArtist>
        </Song>
      ))}
    </PlaylistContainer>
  );
};

export default Playlist;

const PlaylistContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Song = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SongTitle = styled.div``;

const SongArtist = styled.div``;
