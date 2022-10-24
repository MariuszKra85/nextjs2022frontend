import LevelButton from './LevelButton';

export default function User({ user }) {
  return (
    <div>
      <h2> Hello {user.name} nice to see you in our app!</h2>
      <p>you are on {user.role} level, you unlock video on levels:</p>
      <LevelButton level="Beginners" href="/beginners" />
      <LevelButton level="Improver" href="/improvers" />
      <LevelButton level="Advance" href="/beginners" />
    </div>
  );
}
