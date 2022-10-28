import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 4rem;
  h2 {
    font-size: 3rem;
    margin-bottom: 0;
  }
  p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  img {
    width: inherit;
    min-height: 300px;
  }
  a {
    color: var(--offWhite);
    border: 1px solid var(--offWhite);
    padding: 1rem;
    transition: all 0.6s;

    &:hover {
      text-decoration: none;
      background-color: var(--offWhite);
      color: black;
    }
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
