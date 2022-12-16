import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import React from 'react';
import styled from 'styled-components';
import LevelButton from '../components/LevelButton';
import { useUser } from '../lib/useUser';
import Video from '../components/Video';

const QUERY_BEGINNER_VIDEO = gql`
  query {
    allVideosLibs {
      name
      level
      url
      description
      type
    }
  }
`;
const Wrapper = styled.div`
  width: 80%;
  max-width: 1000px;
  margin-top: 40vh;
`;

export default function Beginners() {
  const { data, error, loading } = useQuery(QUERY_BEGINNER_VIDEO);
  const { userState } = useUser();

  if (userState?.name === null || userState === null) {
    console.log('no data!!');
    return <p>You need to be login!!!!</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!loading) {
    return (
      <Wrapper>
        <p>Here will be video for beginners!!!</p>
        {data.allVideosLibs.map((e) => {
          console.log(e);
          return (
            e.type === 'salsa' &&
            e.level === 'level 1' && (
              <Video
                key={e.name}
                name={e.name}
                desc={e.description}
                url={e.url}
              />
            )
          );
        })}
        <LevelButton level="Back" href="/salsaapp" />
      </Wrapper>
    );
  }
}
