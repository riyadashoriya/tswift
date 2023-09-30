import React, { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { styled } from "@linaria/react";
import Head from "next/head";

const ComponentContainer = styled.div`
  height: 100%;
  min-height: 100vh;
  font-family: fantasy;
`;

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Taylor Swift The Eras Tour</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ComponentContainer>
        <Header />
        {children}
        <Footer />
      </ComponentContainer>
    </>
  );
};

export default Layout;
