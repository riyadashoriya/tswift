import React from "react";
import Layout from "../../components/Layout";

const SongDetails = ({ posts, lyrics }) => {
  
  return <div>Here are the song lyrics: {lyrics.lyrics}</div>;
};

SongDetails.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default SongDetails;

export async function getStaticPaths() {
  const res = await fetch("https://taylor-swift-api.sarbo.workers.dev/songs");
  const posts = await res.json();

  const ids = posts.map((p) => {
    return {
      params: {
        id: p.song_id.toString(),
      },
    };
  });

  return {
    paths: ids,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  console.log(params.id, "param");

  const res = await fetch(
    `https://taylor-swift-api.sarbo.workers.dev/songs/${params.id}`,
  );

  const posts = await res.json();


  const lyricsData = await fetch(
    `https://taylor-swift-api.sarbo.workers.dev/lyrics/${params.id}`,
  );

  const lyrics = await lyricsData.json();

  return {
    props: {
      posts,
      lyrics
    },
  };
}
