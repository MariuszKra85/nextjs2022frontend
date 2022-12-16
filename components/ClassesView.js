import { useQuery } from '@apollo/client';
import { logDOM } from '@testing-library/react';
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
  console.log(data);
  if (loading) <h2>Loading...</h2>;
  return (
    <div>
      <h2>Our Classes</h2>

      <Classes el={data?.allPicturesLibs[0]} name="Bachata" />
      <Classes el={data?.allPicturesLibs[1]} name="Salsa" />
    </div>
  );
}
