import styled from 'styled-components';
import Image from 'next/image';

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 4rem 1rem;
  padding: 2rem;
  background-color: rgba(20, 20, 30, 0.9);

  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 3rem;
  }
`;
const SocialWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;
export default function Person({ photo, name, disc, social }) {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={photo} alt="no" width="350" height="350" />
      </ImageWrapper>
      <div>
        <h1>{name}</h1>
        <p>teacher</p>
        <p>{disc}</p>
        <SocialWrapper>
          <img src="/static/fb.png" alt="fb" width="30px" />
          <img src="/static/instagram.png" alt="instagram" width="30px" />
        </SocialWrapper>
      </div>
    </Wrapper>
  );
}
