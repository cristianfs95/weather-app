import React from 'react';
import { ForecastItemProps } from '../../types';
import { Temperature, WeatherIcon } from '../../WeatherDetail/components';
import { ForecastItemContainer } from './styled';

export const ForecastItem: React.FC<ForecastItemProps> = (
  { day, weatherCode, main, high, low }
) => (
  <ForecastItemContainer>
    <h6> {day} </h6>
    <WeatherIcon code={weatherCode} />
    <p> {main} </p>
    <span>
      <Temperature value={high} />
      <sup>&deg;</sup>
      <small>/</small>
      <Temperature value={low} />
      <sup>&deg;</sup>
    </span>
  </ForecastItemContainer>
);
