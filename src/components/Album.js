import React from 'react';
import styled from 'styled-components';

const Album = ({ album }) => {
  return (
    <AlbumContainer>
      <AlbumCover src={album.cover} alt={album.title} />
      <AlbumDetails>
        <AlbumTitle>{album.title}</AlbumTitle>
        <AlbumArtist>{album.artist}</AlbumArtist>
        <AlbumSongs>
          {album.songs.map((song, index) => (
            <Song key={index}>{song.title}</Song>
          ))}
        </AlbumSongs>
      </AlbumDetails>
    </AlbumContainer>
  );
};

export default Album;

const AlbumContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const AlbumCover = styled.img`
  width: 200px;
  height: 200px;
`;

const AlbumDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const AlbumTitle = styled.h2``;

const AlbumArtist = styled.h3``;

const AlbumSongs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Song = styled.div``;
