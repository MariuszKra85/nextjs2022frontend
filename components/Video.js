import styled from 'styled-components';

const Frame = styled.iframe`
  width: 100%;
  border: none;
`;

const Wrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #131318;
  h3 {
    text-transform: uppercase;
  }
  p {
    padding: 1rem;
    font-size: 1.4rem;
    color: var(--lightGrey);
  }
`;

export default function Video({ name, url, desc }) {
  return (
    <Wrapper key={name}>
      <h3>{name}</h3>
      <Frame
        src={url}
        width="400px"
        height="240px"
        allow="autoplay"
        allowFullScreen
      />
      <p>{desc}</p>
    </Wrapper>
  );
}
