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
      <main>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/KudedLV0tP0?si=qY7DF2YEWdLO6H-m"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </main>
    </div>
  );
};

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Home;
