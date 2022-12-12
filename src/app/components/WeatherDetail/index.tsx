import React, { FC } from 'react';
import { HighIcon, HumidityIcon, LowIcon, PressureIcon, WindIcon } from '../../../assets';
import { WeatherIcon } from './components/WeatherIcon';
import {
  CurrentWeather,
  CurrentWeatherContainer,
  CurrentWeatherInfo,
  FeelsLike,
  HighLowContainer,
  InfoRow,
  SectionTitle,
  WeatherContainer,
  WeatherDegree
} from './styled';
import { Temperature } from './components/Temperature';

export const WeatherDetail: FC = () => {
  return (
    <WeatherContainer>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <SectionTitle>Current Weather</SectionTitle>
      </div>
      <CurrentWeatherContainer>
        <CurrentWeather>
          <div style={{ display: 'flex' }}>
            <WeatherIcon code={800} isBig />
            <span>
              <Temperature value={64} />
              <sup>&deg;</sup>
            </span>
          </div>
          <h6> Cloudy </h6>
        </CurrentWeather>

        <CurrentWeatherInfo>
          <FeelsLike>
            Feels like <Temperature value={33} />
            <sup>&deg;</sup>
          </FeelsLike>
          <HighLowContainer>
            <WeatherDegree>
              <HighIcon />
              <Temperature value={12} />
              <sup>&deg;</sup>
            </WeatherDegree>
            <WeatherDegree>
              <LowIcon />
              <Temperature value={54} />
              <sup>&deg;</sup>
            </WeatherDegree>
          </HighLowContainer>
          <InfoRow>
            <div>
              <HumidityIcon /> Humidity
            </div>
            <span>{44}%</span>
          </InfoRow>
          <InfoRow>
            <div>
              <WindIcon /> Wind
            </div>
          </InfoRow>
          <InfoRow>
            <div>
              <PressureIcon /> Pressure
            </div>
            <span>{123}hPa</span>
          </InfoRow>
        </CurrentWeatherInfo>
      </CurrentWeatherContainer>
    </WeatherContainer>
  );
};
