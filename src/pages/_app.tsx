import type { AppProps } from 'next/app';
import { useState } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Hydrate } from 'react-query/hydration';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { useRouter } from 'next/router';

import { GlobalStyle } from '@/styles/global-style';
import { theme } from '@/styles/theme';
import HeaderComponent from '@/components/Header';
import NoHeaderComponent from '@/components/NoHeader';
import FooterComponent from '@/components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { pathname } = router;

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            staleTime: 10 * 1000,
          },
        },
      }),
  );
  const HidePage = ['/notification', '/search', '/more', '/404'];

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ReactQueryDevtools initialIsOpen={false} />
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            {HidePage.includes(pathname) ? <NoHeaderComponent /> : <HeaderComponent />}
            <Component {...pageProps} />
            {HidePage.includes(pathname) ? null : <FooterComponent />}
          </ThemeProvider>
        </Hydrate>
      </QueryClientProvider>
    </RecoilRoot>
  );
}
export default MyApp;
