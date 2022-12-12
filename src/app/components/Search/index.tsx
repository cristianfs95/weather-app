import React, { FC } from 'react';
import { LocationIcon, SearchElement, SearchIcon } from './styled';

export const Search: FC = () => {
  return (
    <SearchElement>
      <SearchIcon />
      <LocationIcon />
    </SearchElement>
  );
};
