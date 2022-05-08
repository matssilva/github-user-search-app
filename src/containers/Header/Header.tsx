import React from 'react'
import { Container, MoonIcon, ThemeLabel, Title } from './styles'

const Header = () => {
  return (
    <Container>
      <Title htmlFor=''>devfinder</Title>
      <div>
        <ThemeLabel htmlFor=''>dark</ThemeLabel>
        <MoonIcon />
      </div>
    </Container>
  )
}

export default Header