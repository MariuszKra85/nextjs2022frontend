import Image from 'next/image';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 90vh;
  max-width: 600px;
  overflow-x: hidden;
  position: relative;
  margin: 0 auto;
  h2 {
    position: absolute;
    top: 45%;
    right: 12%;
    left: 12%;
    padding: 2rem;
    background-color: rgba(10, 10, 10, 0.4);
    text-align: center;
    font-size: 3rem;
  }
  img {
    height: 90vh;
  }
`;

export default function Hero({ pic, text }) {
  return (
    <Wrapper>
      {pic ? <Image layout="fill" src={pic.url} alt={pic.name} /> : null}
      <h2>{text}</h2>
    </Wrapper>
  );
}
