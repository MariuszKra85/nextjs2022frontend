import LevelButton from './LevelButton';

export default function User({ user }) {
  return (
    <div>
      <h2> Hello {user.name} nice to see you in our app!</h2>
      <p>you are on {user.role} level, you unlock video on levels:</p>
      <h2>Salsa:</h2>
      <LevelButton
        level="Novice"
        vidlvl="4"
        href="/levelPage?lvl=1&type=salsa"
      />
      {user.SalsaLevel > 1 ? (
        <LevelButton level="Beginner" href="/levelPage?lvl=2&type=salsa" />
      ) : null}
      {user.SalsaLevel > 2 ? (
        <LevelButton level="Improvers" href="/levelPage?lvl=3&type=salsa" />
      ) : null}
      {user.SalsaLevel > 3 && (
        <LevelButton level="Intermediate" href="/levelPage?lvl=4&type=salsa" />
      )}
      {user.SalsaLevel > 4 && (
        <LevelButton level="Advanced" href="/levelPage?lvl=5&type=salsa" />
      )}
      {user.SalsaLevel > 5 && (
        <LevelButton level="Professional" href="/levelPage?lvl=6&type=salsa" />
      )}
      <h2>Rumba:</h2>
      <LevelButton level="Novice" href="/beginners" />
      {user.RumbaLevel > 1 ? (
        <LevelButton level="Beginner" href="/improvers" />
      ) : null}
      {user.RumbaLevel > 2 ? (
        <LevelButton level="Improvers" href="/beginners" />
      ) : null}
      {user.RumbaLevel > 3 && (
        <LevelButton level="Intermediate" href="/beginners" />
      )}
      {user.RumbaLevel > 4 && (
        <LevelButton level="Advanced" href="/intermidiate" />
      )}
      {user.RumbaLevel > 5 && (
        <LevelButton level="Professional" href="/beginners" />
      )}
      <h2>Cha-cha:</h2>
      <LevelButton level="Novice" href="/beginners" />
      {user.ChachaLevel > 1 ? (
        <LevelButton level="Beginner" href="/improvers" />
      ) : null}
      {user.ChachaLevel > 2 ? (
        <LevelButton level="Improvers" href="/beginners" />
      ) : null}
      {user.ChachaLevel > 3 && (
        <LevelButton level="Intermediate" href="/beginners" />
      )}
      {user.ChachaLevel > 4 && (
        <LevelButton level="Advanced" href="/beginners" />
      )}
      {user.ChachaLevel > 5 && (
        <LevelButton level="Professional" href="/beginners" />
      )}
    </div>
  );
}
