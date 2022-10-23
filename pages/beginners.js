import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import React from 'react';
import ReactPlayer from 'react-player';
import { Player } from 'video-react';
import styled from 'styled-components';
import LevelButton from '../components/LevelButton';
import { useUser } from '../lib/useUser';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PlayerWrapper = styled.div`
  width: 80vw;
  max-width: 500px;
  margin-top: 10px;
`;

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
const Frame = styled.iframe`
  border: none;
`;

export default function Beginners() {
  const { data: data2, error, loading } = useQuery(QUERY_BEGGINER_VIDEO);
  const { data } = useUser();
  console.log(data);
  console.log(data2);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!loading) {
    return (
      <>
        <p>Here will be video for beginners!!!</p>
        {data2.allVideos.map((e) => (
          <Wrapper key={e.name}>
            <p>{e.name}</p>
            <Frame
              src="https://drive.google.com/file/d/1oq5VwNFgXWyCJWI-V1YbFEYrBbsYnIxe/preview"
              width="340"
              height="280"
              allow="autoplay"
              allowFullScreen
            />
            <p>{e.description}</p>
          </Wrapper>
        ))}
        <LevelButton level="Back" href="/" />
      </>
    );
  }
}
