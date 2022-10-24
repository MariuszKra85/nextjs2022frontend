import { el } from 'date-fns/locale';

export default function PictureBox({ el }) {
  return (
    <div>
      <img src={el.url} alt="el.name" />
    </div>
  );
}
