import { createGlobalStyle } from 'styled-components';
import { Theme } from '../theme';

declare module 'styled-components' {
  /* tslint:disable */
  export interface DefaultTheme extends Theme {}
}

export const HomeGlobalStyles = createGlobalStyle`
  body {
    background: url(${({ theme }) => theme.backgroundImage}) no-repeat center 120%, linear-gradient(${({ theme }) =>
    theme.backgroundGradient.color1} 0%, ${({ theme }) => theme.backgroundGradient.color2} 100%);
  }
`;
