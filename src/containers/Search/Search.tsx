import React, { useState } from 'react'
import { Container, SearchButton, SearchInput } from './styles'
import { ReactComponent as SearchIcon } from '../../assets/search.svg';

const Search = () => {
  const [term, setTerm] = useState<string>('');

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => setTerm(e.target.value)

  return (
    <Container>
      <SearchIcon />
      <SearchInput type="text" value={term} placeholder='Search GitHub username…' onChange={onChangeInput} />
      <SearchButton>Search</SearchButton>
    </Container>
  )
}

export default Search