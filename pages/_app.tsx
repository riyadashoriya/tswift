// pages/_app.tsx

import { AppPropsWithLayout } from "../types/page";
import React from "react";
import { styled } from "@linaria/react";
import { css } from "@linaria/core";

const Container = styled.div`
  padding: 90px 60px;
  background-color: #c2e7ff;
`;

const _ = css`
  :global() {
    html,
    body {
      margin: 0px;
      padding: 0px;
    }
  }
`;

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <Container>
      <Component {...pageProps} />
    </Container>,
  );
}

export default MyApp;
