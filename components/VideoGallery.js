import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 2rem 4rem;
  iframe {
    width: 100%;
    max-height: 400px;
    min-height: 200px;
  }
`;

export default function VideoGallery({ el }) {
  const { video, title } = el;
  return (
    <Wrapper>
      <iframe
        title={video[0].name}
        src={video[0].url}
        frameBorder="0"
        key={title}
      />
    </Wrapper>
  );
}
