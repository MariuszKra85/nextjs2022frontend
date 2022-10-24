import { gql, useQuery } from '@apollo/client';
import { useUser } from '../lib/useUser';

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

export default function Improvers() {
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
        {data2.allVideos.map((e) => {
          console.log(e.level);
          if (e.level === 'improver') {
            return (
              <Video
                key={e.name}
                name={e.name}
                desc={e.description}
                url={e.url}
              />
            );
          }
        })}
        <LevelButton level="Back" href="/" />
      </>
    );
  }
}
