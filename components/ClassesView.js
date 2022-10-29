import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Classes from './Classes';

const PHOTO_QUERY = gql`
  query {
    allPicturesLibs(where: { name_contains: "circle" }) {
      name
      url
    }
  }
`;

export default function ClassesView() {
  const { data, loading } = useQuery(PHOTO_QUERY);

  if (loading) <h2>Loading...</h2>;
  let number = 0;
  return (
    <div>
      <h2>Our Classes</h2>

      {data?.allPicturesLibs.map((e) => {
        number += 1;
        return <Classes el={e} number={number} />;
      })}
    </div>
  );
}
