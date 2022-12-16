import LevelButton from './LevelButton';

export default function User({ user }) {
  console.log(user);
  return (
    <div>
      <h2> Hello {user.name} nice to see you in our app!</h2>
      <p>you are on {user.role} level, you unlock video on levels:</p>
      <h2>Salsa:</h2>
      <LevelButton level="level 1" href="/beginners" />
      {user.SalsaLevel > 1 ? (
        <LevelButton level="level 2" href="/improvers" />
      ) : null}
      {user.SalsaLevel > 2 ? (
        <LevelButton level="level 3" href="/beginners" />
      ) : null}
      {user.SalsaLevel > 3 && <LevelButton level="level 4" href="/beginners" />}
      {user.SalsaLevel > 4 && <LevelButton level="level 5" href="/beginners" />}
      {user.SalsaLevel > 5 && <LevelButton level="level 6" href="/beginners" />}
      <h2>Rumba:</h2>
      <LevelButton level="level 1" href="/beginners" />
      {user.RumbaLevel > 1 ? (
        <LevelButton level="level 2" href="/improvers" />
      ) : null}
      {user.RumbaLevel > 2 ? (
        <LevelButton level="level 3" href="/beginners" />
      ) : null}
      {user.RumbaLevel > 3 && <LevelButton level="level 4" href="/beginners" />}
      {user.RumbaLevel > 4 && <LevelButton level="level 5" href="/beginners" />}
      {user.RumbaLevel > 5 && <LevelButton level="level 6" href="/beginners" />}
      <h2>Cha-cha:</h2>
      <LevelButton level="level 1" href="/beginners" />
      {user.ChachaLevel > 1 ? (
        <LevelButton level="level 2" href="/improvers" />
      ) : null}
      {user.ChachaLevel > 2 ? (
        <LevelButton level="level 3" href="/beginners" />
      ) : null}
      {user.ChachaLevel > 3 && (
        <LevelButton level="level 4" href="/beginners" />
      )}
      {user.ChachaLevel > 4 && (
        <LevelButton level="level 5" href="/beginners" />
      )}
      {user.ChachaLevel > 5 && (
        <LevelButton level="level 6" href="/beginners" />
      )}
    </div>
  );
}
