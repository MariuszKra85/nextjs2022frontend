import { useUser } from '../lib/useUser';

export default function User() {
  const { userState } = useUser();
  console.log(userState);
  return (
    <div>
      <h2>{userState?.item?.name}</h2>
      <p>This Is for Maryem :*</p>
    </div>
  );
}
