import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: rgba(30, 30, 30, 0.7);
  padding: 2rem;
  margin: 2rem;
  h2 {
    font-family: 'Bebas Neue';
    letter-spacing: 0.7px;
    font-weight: 200;
  }
  p {
    font-size: 1.6rem;
  }
  a {
    display: inline-flex;
    text-transform: uppercase;
    border: 1px solid var(--offWhite);
    padding: 1rem;
    color: var(--offWhite);
  }
`;

export default function TextBox({ el }) {
  return (
    <Wrapper>
      <h2>{el.title}</h2>
      <p>{el.paragraph}</p>
      {el.link ? <a href={el.link.link}>{el.link.name}</a> : null}
    </Wrapper>
  );
}
