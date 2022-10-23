import Login from '../components/Login';
import User from '../components/User';
import { useUser } from '../lib/useUser';

export default function HomePage() {
  const { userState } = useUser();

  const user = userState.item;
  return <div>{user?.name ? <User user={user} /> : <Login />}</div>;
}

// eslint-disable-next-line no-unused-vars
export async function getServerSideProps(context) {
  return {
    props: {
      data: {},
    }, // will be passed to the page component as props
  };
}
