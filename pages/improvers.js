import { gql, useQuery } from '@apollo/client';
import LevelButton from '../components/LevelButton';
import Video from '../components/Video';
import { useUser } from '../lib/useUser';

const QUERY_BEGINNER_VIDEO = gql`
  query {
    allVideosLibs {
      name
      level
      url
      description
    }
  }
`;

export default function Improvers() {
  const { data, error, loading } = useQuery(QUERY_BEGINNER_VIDEO);
  const { userState } = useUser();
  console.log(userState);

  if (userState?.name === null) {
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
        {data.allVideosLibs.map((e) => {
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
        <LevelButton level="Back" href="/salsaapp" />
      </>
    );
  }
}
