import Image from 'next/image';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  margin: 1rem 2rem 4rem;
  padding-bottom: 4rem;
  background: rgba(10, 10, 20, 0.85);

  h2 {
    font-size: 3.2rem;
    margin-bottom: 0;
  }
  p {
    font-size: 1.7rem;
    margin-bottom: 2rem;
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
const StyledImage = styled.div`
  position: relative;
  width: inherit;
  margin: 0 auto;
  max-width: 700px;
  min-height: 600px;
`;
export default function ClassBox({ el }) {
  const { title, picture, text, link } = el;
  return (
    <Wrapper>
      {picture[0]?.name ? (
        <StyledImage>
          <Image
            src={picture[0].url}
            alt={picture[0].name}
            layout="fill"
            objectPosition="block"
          />
        </StyledImage>
      ) : null}

      <h2>{title}</h2>
      <p>{text}</p>
      {link[0]?.name ? <a href={link[0].link}>{link[0].name}</a> : null}
    </Wrapper>
  );
}
