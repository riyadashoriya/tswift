import { styled } from "@linaria/react";
import Layout from "../components/Layout";
import React from "react";

const CopyrightContainer = styled.div`
  padding: 0 140px;
`;

const HeadingTwo = styled.h2`
  text-align: center;
`;

const HeadingThree = styled.h3``;

const DisclaimerDescriptio = styled.p`
  text-align: justify;
`;

const Description = styled.p`
  text-align: justify;
`;

const Copyright = () => {
  const DisclaimerHeading = `All Content Disclaimer`;

  const DisclaimerDescription = `This website serves as a demonstration and does not claim ownership or rights to any of the materials, content, or resources presented herein. Unless explicitly stated otherwise, all content, including but not limited to text, images, videos, and other media, is used for demonstration purposes only. 
  
  The use of any third-party trademarks, logos, brand names, or copyrighted materials on this website is purely for illustrative and demonstrative purposes, and any intellectual property rights related to these materials remain with their respective owners.`;

  const NoClaimHeading = `No Copyright Claim:`;

  const NoClaimDescription = `This website does not assert any copyright or proprietary ownership over the content displayed. Visitors to this website are encouraged to respect the intellectual property rights of the original creators and owners of the materials presented.

  If you believe that your copyrighted material has been used on this website without appropriate permission or in violation of copyright law, please contact us, and we will promptly address the issue.
  `;

  const ContactHeading = `Contact Information:`;

  const ContactDescription = `If you have any questions or concerns regarding the content on this website, please contact: riyadashoriya@gmail.com`;

  return (
    <CopyrightContainer>
      <HeadingTwo>{DisclaimerHeading}</HeadingTwo>
      <DisclaimerDescriptio>{DisclaimerDescription}</DisclaimerDescriptio>
      <HeadingThree> {NoClaimHeading}</HeadingThree>
      <Description> {NoClaimDescription}</Description>
      <HeadingThree>{ContactHeading}</HeadingThree>
      <Description> {ContactDescription}</Description>
    </CopyrightContainer>
  );
};

Copyright.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Copyright;
