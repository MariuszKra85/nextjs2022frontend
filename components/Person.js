export default function Person({img, name, disc, social}) {
  return (
    <div>
      <img src={img.url} alt={img.name} />
      <div>
        <h1>{name}</h1>
        <p>teacher</p>
        <p>{disc}</p>
        <div>
          <img src="/static/fb.png" alt="fb" width="30px" />
          <img src="/static/instagram.png" alt="instagram" width="30px" />
        </div>
      </div>
    </div>
  );
}
