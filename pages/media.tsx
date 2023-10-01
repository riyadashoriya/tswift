import { styled } from "@linaria/react";
import Layout from "../components/Layout";
import React from "react";
import Link from "next/link";

const MediaContainer = styled.div`
  padding: 0 140px;
`;
const Title = styled.h2`
  align-text: center;
`;

const Media = ({ albumwithsong }) => {
  const renderAlbumWithSong = () => {
    return albumwithsong.map((a) => {
      return (
        <div key={`${a.album_id}-asas`}>
          <Title>{a.title}</Title>
          This album was released on {a.release_date}. Here's a list of all the
          songs from that album.
          <ol>
            {a.songs.map((s) => {
              return (
                <li>
                  <Link href={`/songs/${s.song_id}`} key={`${s.song_id}-asas`}>
                    {s.title}
                  </Link>
                </li>
              );
            })}
          </ol>
        </div>
      );
    });
  };

  return <MediaContainer>{renderAlbumWithSong()}</MediaContainer>;
};

Media.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps() {
  const res = await fetch("https://taylor-swift-api.sarbo.workers.dev/albums");
  const albums = await res.json();

  const songsData = await fetch(
    "https://taylor-swift-api.sarbo.workers.dev/songs",
  );
  const songs = await songsData.json();
  const albumwithsong = albums.map((a) => {
    const songtitles = songs.filter((s) => s.album_id === a.album_id);
    return { ...a, songs: [...songtitles] };
  });

  return {
    props: {
      albumwithsong,
    },
  };
}

export default Media;
