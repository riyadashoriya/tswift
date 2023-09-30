import { styled } from "@linaria/react";
import Layout from "../components/Layout";
import React from "react";

const FunFactsContainer = styled.div`
  padding: 0 140px;
`;

const FunFacts = () => {
  return <FunFactsContainer>Fun facts</FunFactsContainer>;
};

FunFacts.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default FunFacts;
