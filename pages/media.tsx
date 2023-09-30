import { styled } from "@linaria/react";
import Layout from "../components/Layout";
import React from "react";

const MediaContainer = styled.div`
  padding: 0 140px;
`;

const Media = () => {
  return <MediaContainer>Media pages</MediaContainer>;
};

Media.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Media;
