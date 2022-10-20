import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const CURRENT_USER_QUERY = gql`
  query {
    authenticatedItem {
      ... on User {
        id
        email
        name
      }
    }
  }
`;

export default function User() {
  const { data, error, loading } = useQuery(CURRENT_USER_QUERY);
  console.log(data);

  return (
    <div>
      <h2>{data?.authenticatedItem?.User.name}</h2>
      <p>This Is for Maryem :*</p>
    </div>
  );
}
