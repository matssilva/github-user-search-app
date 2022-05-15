import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { useTheme } from '../../hooks/useTheme';
import { lightTheme, darkTheme } from '../../theme/themes';
import { IUser } from '../../types/IUser';
import Header from '../Header/Header';
import Search from '../Search/Search';
import UserDetails from '../UserDetails/UserDetails';
import { AppContainer, Content } from './styles';

function App() {
  const [user, setUser] = useState<IUser | null>(null);

  const { theme, themeToggler } = useTheme();
  
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <AppContainer>
        <Content>
          <Header themeToggler={themeToggler} theme={theme} />
          <Search theme={theme} setUser={setUser} />
          <UserDetails theme={theme} user={user} />
        </Content>
      </AppContainer>
    </ThemeProvider>

  );
}

export default App;
