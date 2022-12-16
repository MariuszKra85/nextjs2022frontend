import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: rgba(30, 30, 30, 0.7);
  padding: 2rem;
  margin: 2rem 0;
  h2 {
    letter-spacing: 0.7px;
    font-weight: 200;
  }
  p {
    font-size: 1.8rem;
  }
  a {
    transition: all 0.5s;
    display: inline-flex;
    text-transform: uppercase;
    border: 1px solid ${(red) => (red ? 'var(--red)' : 'var(--offWhite)')};
    padding: 1rem;
    background-color: ${(red) => (red ? 'var(--red)' : null)};
    color: var(--offWhite);
    &:hover {
      text-decoration: none;
      background-color: var(--offWhite);
      color: black;
    }
  }
`;

export default function TextBox({ el, red }) {
  return (
    <Wrapper>
      <h2>{el.title}</h2>
      <p>{el.text}</p>
      {el?.link?.[0].name
        ? el.link.map((e) => (
            <a href={e.link} target="_blank" rel="noreferrer">
              {e.name}
            </a>
          ))
        : null}
    </Wrapper>
  );
}
