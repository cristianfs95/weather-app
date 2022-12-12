import React, { FC } from 'react';
import { Home } from './app/pages/home';
import { GlobalStyles } from './app.styled';
import { ThemeContextProvider } from './app/context/theme';

const App: FC = () => {
  return (
    <div className="App">
      <ThemeContextProvider>
        <GlobalStyles />
        <Home />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
