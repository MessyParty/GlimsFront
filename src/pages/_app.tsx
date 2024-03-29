import "@/styles/globals.css";
import reset from "@/styles/reset";
import theme from "@/styles/theme";

import { useState } from "react";
import type { AppProps } from "next/app";
import {
  QueryClientProvider,
  QueryClient,
  Hydrate,
} from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import { CookiesProvider } from "react-cookie";
import { Global, ThemeProvider } from "@emotion/react";
import NavBar from "@/components/NavBar";
import styled from "@emotion/styled";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  // ssr 적용시를 위한 useState
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: { queries: { refetchOnWindowFocus: false } },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <RecoilRoot>
          <CookiesProvider>
            <ThemeProvider theme={theme}>
              <Global styles={reset} />
              <Container>
                <NavBar />
                <Component {...pageProps} />
                <Footer />
              </Container>
            </ThemeProvider>
          </CookiesProvider>
        </RecoilRoot>
      </Hydrate>
    </QueryClientProvider>
  );
}

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  margin: 0 auto;
`;
