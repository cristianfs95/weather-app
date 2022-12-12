import React from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';
import { useThemeContext } from '../../context/theme';
import { GithubLink, HeaderContainer, Title, HeaderIconsContainer } from './styled';
import { GithubIcon } from '../../../assets';

export const Header: React.FC = () => {
  const context = useThemeContext();
  const isDarkMode = context?.isDarkMode ?? false;
  const setToggleDarkMode = context?.setToggleDarkMode ?? (() => false);

  return (
    <HeaderContainer>
      <Title>React Weather App</Title>
      <HeaderIconsContainer>
        <DarkModeToggle checked={isDarkMode} onChange={() => setToggleDarkMode()} size={60} />
        <GithubLink href="https://github.com/cristianfs95" target="_blank" rel="noopener noreferrer">
          <GithubIcon />
        </GithubLink>
      </HeaderIconsContainer>
    </HeaderContainer>
  );
};
