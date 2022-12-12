import React, { FC } from 'react';
import { CitiesSelectorContainer } from './styled';
import { CitiesSelectorProps } from '../types';

export const CitiesSelector: FC<CitiesSelectorProps> = ({ cities, setCity }) => (
  <CitiesSelectorContainer>
    {cities.map((city, index) => (
      <button
        key={index}
        onClick={() => setCity(city)}
      >
        {city}
      </button>
    ))}
  </CitiesSelectorContainer>
);
