import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import React from 'react';
import ReactPlayer from 'react-player';
import { Player } from 'video-react';
import styled from 'styled-components';
import LevelButton from '../components/LevelButton';
import { useUser } from '../lib/useUser';
import Video from '../components/Video';

const QUERY_BEGGINER_VIDEO = gql`
  query {
    allVideos {
      name
      level
      url
      description
    }
  }
`;

export default function Beginners() {
  const { data: data2, error, loading } = useQuery(QUERY_BEGGINER_VIDEO);
  const { userState } = useUser();
  console.log(userState);
  console.log(data2);

  if (userState.name === null) {
    console.log('no data!!');
    return <p>You need to be login!!!!</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!loading) {
    return (
      <>
        <p>Here will be video for beginners!!!</p>
        {data2.allVideos.map((e) => (
          <Video name={e.name} desc={e.description} url={e.url} />
        ))}
        <LevelButton level="Back" href="/" />
      </>
    );
  }
}
