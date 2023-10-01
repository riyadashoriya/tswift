import { styled } from "@linaria/react";
import Layout from "../components/Layout";
import React from "react";

const AboutContainer = styled.div`
  padding: 0 140px;
`;

const Description = styled.div`
  text-align: justify;
`;

const HeadingTwo = styled.h2``;

const ListTitle = styled.span`
  font-weight: 600;
  font-family: serif;
`;

const About = () => {
  const IntroSection = () => {
    return (
      <>
        <HeadingTwo>Introduction:</HeadingTwo>
        <Description>
          Welcome to Taylor Swift Fan Website! I'm thrilled to have you here as
          we celebrate the incredible journey of the one and only Taylor Swift.
        </Description>
      </>
    );
  };

  const AboutMeSection = () => {
    return (
      <>
        <HeadingTwo>About me:</HeadingTwo>
        <Description>
          I'm Riya Dashoriya, a dedicated Swiftie who has been a fan of Taylor
          Swift since Love Story Era. From the moment I heard her music, I was
          captivated by her storytelling, her melodies, and her ability to
          connect with fans on a deeply personal level.
        </Description>
      </>
    );
  };

  const WhySection = () => {
    return (
      <>
        <HeadingTwo>Why Taylor Swift?</HeadingTwo>
        <Description>
          For me, Taylor Swift isn't just an artist; she's an inspiration. Her
          music has been the soundtrack to countless moments in my life, from
          heartbreaks to triumphs, and I know I'm not alone in feeling this way.
          I wanted to create this fan website as a tribute to her incredible
          talent and as a gathering place for fellow Swifties from around the
          world.
        </Description>
      </>
    );
  };

  const OurMissionSection = () => {
    return (
      <>
        <HeadingTwo>Our Mission:</HeadingTwo>
        <Description>
          Here, our mission is simple: to celebrate the music, the artistry, and
          the impact of Taylor Swift. We're here to provide you with the latest
          news, in-depth analysis of her songs and albums, exclusive fan
          content, and a supportive community of Swifties who share the same
          love and admiration for Taylor.
        </Description>
      </>
    );
  };

  const WhatYouWillFindHereSection = () => {
    return (
      <>
        <HeadingTwo>What You Will Find Here:</HeadingTwo>
        <Description>
          <ul>
            <li>
              <ListTitle>News & Updates:</ListTitle> Stay up-to-date with the
              latest Taylor Swift news, releases, and tour information.
            </li>
            <li>
              <ListTitle>Song and Album Analysis:</ListTitle> Dive deep into
              Taylor's lyrics, music videos, and the stories behind her songs.
            </li>
            <li>
              <ListTitle>Exclusive Content:</ListTitle> Discover fan art,
              playlists, and fan-written articles celebrating Taylor's work.
            </li>
            <li>
              <ListTitle>Connect with Fellow Swifties:</ListTitle> Join our
              community forums and social media channels to connect with fans
              from all over the world.
            </li>
          </ul>
        </Description>
      </>
    );
  };

  const JoinUsSection = () => {
    return (
      <>
        <HeadingTwo>Join Us:</HeadingTwo>
        <Description>
          Whether you're a long-time Swiftie or just discovering Taylor's music,
          we invite you to join our community. Together, we'll continue to
          support and celebrate Taylor Swift's incredible journey. Thank you for
          visiting us here, and I look forward to sharing our love for Taylor
          Swift's music with you.
        </Description>
      </>
    );
  };

  const GetInTouchSection = () => {
    return (
      <>
        <HeadingTwo>Get In Touch:</HeadingTwo>
        <Description>
          If you have any questions, suggestions, or just want to share your
          Taylor Swift story, don't hesitate to reach out. You can contact me at
          riyadashoriya@gmail.com.
        </Description>
      </>
    );
  };

  return (
    <AboutContainer>
      {IntroSection()}
      {AboutMeSection()}
      {WhySection()}
      {OurMissionSection()}
      {WhatYouWillFindHereSection()}
      {JoinUsSection()}
      {GetInTouchSection()}
    </AboutContainer>
  );
};

About.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default About;
