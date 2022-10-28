import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  h2 {
    font-size: 3rem;
    margin-bottom: 0;
  }
  p {
    font-size: 1.5rem;
  }
  img {
    width: inherit;
    min-height: 300px;
  }
  a {
    color: var(--offWhite);
    border: 1px solid var(--offWhite);
    padding: 1rem;
  }
`;

export default function ClassBox({ el }) {
  const { title, picture, text, link } = el;
  console.log(link[0]?.name);
  return (
    <Wrapper>
      <img src={picture[0].url} alt={picture[0].name} />
      <h2>{title}</h2>
      <p>{text}</p>
      {link[0]?.name ? <a href={link[0].link}>{link[0].name}</a> : null}
    </Wrapper>
  );
}
