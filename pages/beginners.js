import ReactPlayer from 'react-player';
import LevelButton from '../components/LevelButton';

export default function Beginners() {
  return (
    <div>
      <p>Here will be video for beginners!!!</p>
      <ReactPlayer url="https://youtu.be/Y_0tB71g6-A" width="80vw" />
      <LevelButton level="Back" href="/" />
    </div>
  );
}
