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

export default function HomePage() {
  const { data, error, loading } = useQuery(QUERY);
  console.log(data);
  return (
    <div>
      <h1>Home page</h1>
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
