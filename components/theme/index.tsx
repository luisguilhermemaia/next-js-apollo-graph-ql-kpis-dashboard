import { createGlobalStyle } from 'styled-components';

const colors = {
  dark: '#222222',
  white: '#FFFFFF',
  'neutral-120': '#727272',
  'neutral-100': '#B6B6B6',
  'neutral-80': '#E6E6E6',
  'neutral-60': '#F5F5F5',
  'red-120': '#C2192E',
  'red-100': '#EC6072',
  'red-60': '#FEE5E9',
  'green-120': '#106F62',
  'green-100': '#4FB7A8',
  'green-60': '#D4EFEB',
  'yellow-120': '#81670B',
  'yellow-100': '#FBD448',
  'yellow-60': '#FCF2D1',
};

export const lightTheme = {
  body: '#FFF',
  text: '#363537',
  toggleBorder: '#FFF',
  background: '#363537',
  circle: '#FFF',
  table: '#FFF',
  toggleFontColor: '#222222',
  colors,
};
export const darkTheme = {
  body: '#363537',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#999',
  circle: '#464040',
  table: '#727272',
  toggleFontColor: '#FFFFFF',
  colors,
};

export type GlobalStyleType = {
  theme: { body: string; text: string, circle: string, toggleFontColor: string };
};

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }: GlobalStyleType) => theme?.body};
    color: ${({ theme }: GlobalStyleType) => theme?.text};
    transition: all 0.50s linear;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
