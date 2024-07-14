import React, { useState } from 'react';
import styled from 'styled-components';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <SearchContainer>
      <SearchForm onSubmit={handleSearch}>
        <SearchInput 
          type="text" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Search for songs, albums, artists..."
        />
        <SearchButton type="submit">Search</SearchButton>
      </SearchForm>
    </SearchContainer>
  );
};

export default Search;

const SearchContainer = styled.div`
  margin: 20px;
`;

const SearchForm = styled.form`
  display: flex;
  gap: 10px;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 10px;
`;

const SearchButton = styled.button`
  padding: 10px 20px;
`;
