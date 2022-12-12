import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { Header, CitiesSelector, Search, WeatherDetail, ExtendedForecast, Footer } from '../components';
import { HomeGlobalStyles } from './styled';
import { useThemeContext } from '../context/theme';
import { darkTheme, lightTheme } from '../theme';

export const Home: FC = () => {
  const context = useThemeContext();
  const isDarkMode = context?.isDarkMode ?? false;
  const theme = isDarkMode ? darkTheme : lightTheme;

  const cities = ['Paris', 'New York City', 'Isla Gran Malvina', 'London', 'Bangkok'];

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <HomeGlobalStyles />
        <Header />
        <CitiesSelector
          cities={cities}
          setCity={(city) => console.log(city)}
          />
        <Search />
        <WeatherDetail />
        <ExtendedForecast />
        <Footer />
      </ThemeProvider>
    </div>
  );
}
