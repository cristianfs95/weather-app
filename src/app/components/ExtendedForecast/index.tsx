import React from 'react';
import { ForecastContainer, ForecastItems, SectionTitle } from './styled';

export const ExtendedForecast: React.FC = () => {
  return (
    <ForecastContainer>
      <SectionTitle>Extended Forecast</SectionTitle>
      <ForecastItems>
        {/* {forecast.map((item, i) => {
          return (
            <ForecastItem />
          );
        })} */}
      </ForecastItems>
    </ForecastContainer>
  );
};
