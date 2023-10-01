import { styled } from "@linaria/react";
import Layout from "../components/Layout";
import React, { useEffect, useState } from "react";

const FunFactsContainer = styled.div`
  padding: 0 140px;
`;

const FunFacts = () => {
  const [generateLyrics, setGenerateLyrics] = useState<boolean>(true);
  const [lyrics, setLyrics] = useState<string>("");

  useEffect(() => {
    if (generateLyrics) {
      fetch(
        `https://taylor-swift-api.sarbo.workers.dev/lyrics?shouldRandomizeLyrics=true&numberOfParagraphs=2`,
      )
        .then((d) => d.json())
        .then((s) => {
          setGenerateLyrics(false);
          setLyrics(s.lyrics);
        });
    }
  }, [generateLyrics]);

  return (
    <FunFactsContainer>
      Hi! It's time to play a game with your friends. Click here to generate
      lyrics of a song. Your friend then need to guess the song.
      <button onClick={() => setGenerateLyrics(true)}>generate me!</button>
      <div>{lyrics}</div>
    </FunFactsContainer>
  );
};

FunFacts.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default FunFacts;
