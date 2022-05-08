import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../theme/themes';
import Header from '../Header/Header';
import { AppContainer, Content } from './styles';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <AppContainer>
        <Content>
          <Header />
          <div>Matheus</div>
        </Content>
      </AppContainer>
    </ThemeProvider>

  );
}

export default App;
