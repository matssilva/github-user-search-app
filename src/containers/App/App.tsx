import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useTheme } from '../../hooks/useTheme';
import { lightTheme, darkTheme } from '../../theme/themes';
import Header from '../Header/Header';
import Search from '../Search/Search';
import UserDetails from '../UserDetails/UserDetails';
import { AppContainer, Content } from './styles';

function App() {
  const { theme, themeToggler } = useTheme();
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <AppContainer>
        <Content>
          <Header themeToggler={themeToggler} theme={theme} />
          <Search theme={theme} />
          <UserDetails theme={theme} />
        </Content>
      </AppContainer>
    </ThemeProvider>

  );
}

export default App;
