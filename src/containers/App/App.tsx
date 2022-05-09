import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../theme/themes';
import Header from '../Header/Header';
import Search from '../Search/Search';
import UserDetails from '../UserDetails/UserDetails';
import { AppContainer, Content } from './styles';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <AppContainer>
        <Content>
          <Header />
          <Search />
          <UserDetails />
        </Content>
      </AppContainer>
    </ThemeProvider>

  );
}

export default App;
