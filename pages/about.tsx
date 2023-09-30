import { styled } from "@linaria/react";
import Layout from "../components/Layout";
import React from "react";

const AboutContainer = styled.div`
  padding: 0 140px;
`;

const About = () => {
  return <AboutContainer>About page</AboutContainer>;
};

About.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default About;
