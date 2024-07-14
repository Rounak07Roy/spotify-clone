import React from 'react';
import styled from 'styled-components';

const Genre = ({ genre, songs }) => {
  return (
    <GenreContainer>
      <GenreTitle>{genre}</GenreTitle>
      <GenreSongs>
        {songs.map((song, index) => (
          <Song key={index}>{song.title}</Song>
        ))}
      </GenreSongs>
    </GenreContainer>
  );
};

export default Genre;

const GenreContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const GenreTitle = styled.h2``;

const GenreSongs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Song = styled.div``;
