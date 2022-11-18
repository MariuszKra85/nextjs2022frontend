import styled from 'styled-components';
import Login from '../components/Login';
import User from '../components/User';
import { useUser } from '../lib/useUser';

const Wrapper = styled.div`
  margin-top: 0vh;
  @media (min-width: 1200px) {
    margin: 35vh;
  }
`;

export default function SalsaApp() {
  const { userState } = useUser();
  console.log(userState);

  const user = userState?.item;
  return <Wrapper>{user?.name ? <User user={user} /> : <Login />}</Wrapper>;
}
