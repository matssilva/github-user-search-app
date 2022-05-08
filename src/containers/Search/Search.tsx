import React from 'react'
import { Container, SearchButton, SearchIcon, SearchInput } from './styles'

const Search = () => {
  return (
    <Container>
      <SearchIcon />
      <SearchInput type="text" value='' placeholder='Search GitHub username…' />
      <SearchButton>Search</SearchButton>
    </Container>
  )
}

export default Search