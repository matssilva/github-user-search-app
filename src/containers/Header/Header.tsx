import React from 'react'
import { Container, ThemeLabel, Title } from './styles';
import { ReactComponent as MoonIcon } from '../../assets/moon.svg';
import { ReactComponent as SunIcon } from '../../assets/sun.svg';

interface Props {
  themeToggler: () => void;
  theme: string;
}

const Header = ({ themeToggler, theme }: Props) => {
  return (
    <Container themeSelected={theme}>
      <Title htmlFor=''>devfinder</Title>
      <div onClick={themeToggler}>
        <ThemeLabel>{theme === 'light' ? 'dark' : 'light'}</ThemeLabel>
        {theme === 'light' ? <MoonIcon /> : <SunIcon />}
      </div>
    </Container>
  )
}

export default Header