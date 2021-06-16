import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from '../graphql/Provider';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

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

const theme = {
  colors,
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  </>
);

export default MyApp;
