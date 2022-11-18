import LevelButton from './LevelButton';

export default function User({ user }) {
  console.log(user);
  return (
    <div>
      <h2> Hello {user.name} nice to see you in our app!</h2>
      <p>you are on {user.role} level, you unlock video on levels:</p>
      <LevelButton level="Beginners" href="/beginners" />
      {user.level > 1 ? (
        <LevelButton level="Improver" href="/improvers" />
      ) : null}
      {user.level > 2 ? (
        <LevelButton level="Advance" href="/beginners" />
      ) : null}
    </div>
  );
}
