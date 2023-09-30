import Head from "next/head";

import Link from "next/link";
import { styled } from "@linaria/react";
import { NextPageWithLayout } from "../types/page";
import Layout from "../components/Layout";
import React from "react";

const Abc = styled.div`
  margin: 40px;
  border: 2px;
  color: red;
`;

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <main>asasasas</main>
    </div>
  );
};

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Home;
