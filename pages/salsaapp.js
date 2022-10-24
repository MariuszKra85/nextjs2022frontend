import Login from '../components/Login';
import User from '../components/User';
import { useUser } from '../lib/useUser';

export default function SalsaApp() {
  const { userState } = useUser();

  const user = userState?.item;
  return <div>{user?.name ? <User user={user} /> : <Login />}</div>;
}
