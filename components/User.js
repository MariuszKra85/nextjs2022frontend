import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const QUERY = gql`
  query {
    allUsers {
      id
      name
    }
  }
`;

export default function User() {
  const { data, error, loading } = useQuery(QUERY);
  console.log(data);

  return (
    <div>
      <h2>Name</h2>
      <p>user</p>
    </div>
  );
}
