import type { AppProps } from 'next/app';

import { Provider } from '../graphql/Provider';
import { ThemeProvider } from 'styled-components';
import { useToggletheme } from '../localFields/useDarkMode';
import { darkTheme, lightTheme, GlobalStyle } from '../shared/theme/index';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [theme] = useToggletheme();
  const themeMode = theme ? darkTheme : lightTheme;
  return (
    <>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <Provider>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </>
  );
};
export default MyApp;
