import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import ClassBox from '../components/ClassBox';
import TextBox from '../components/TextBox';
import VideoGallery from '../components/VideoGallery';
import DemoCarousel from '../components/Carousel';

const QUERY_HOME_PAGE = gql`
  query {
    allHomePageElements {
      id
      where
      title
      text
      link {
        name
        link
      }
      video {
        name
        url
      }
      picture {
        name
        url
      }
    }
  }
`;

const HeadText = styled.h1`
  margin: 30vh 2rem 40vh 2rem;
  max-width: 400px;
  display: flex;
  font-size: 2.4rem;
  text-align: center;
  letter-spacing: 1px;
  justify-content: center;
  padding: 2rem;
  background-color: rgba(100, 100, 100, 0.3);

  @media (min-width: 1200px) {
    margin: 50vh 26% 30vh;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Image = styled.img`
  margin: 1rem 2rem;
  opacity: 0.9;
`;
const VideoGaleryHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-weight: 200;
    font-size: 4rem;
    margin-bottom: 0;
  }
  p {
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 1.7rem;
    font-weight: 200;
  }
`;

export default function HomePage() {
  const { data, error, loading } = useQuery(QUERY_HOME_PAGE);
  const TextElement = data?.allHomePageElements.filter(
    (e) => e.where === 'TextBox'
  );

  const PictureElement = data?.allHomePageElements.filter(
    (e) => e.where === 'photoGallery'
  );

  const VideosElement = data?.allHomePageElements.filter(
    (e) => e.where === 'video gallery'
  );
  const ClassesElement = data?.allHomePageElements.filter(
    (e) => e.where === 'classBoxes'
  );

  return (
    <Wrapper>
      <HeadText>SALSA IN MANCHESTER CITY CENTER</HeadText>
      {TextElement?.map((el) => (
        <TextBox el={el} key={el.id} red />
      ))}
      {PictureElement?.map((el) => (
        <Image src={el.picture[0].url} key={el.picture[0].name} />
      ))}
      <VideoGaleryHeader>
        <h2>Video Gallery</h2>
        <p>How We do it Salsa Manchester!!!</p>
      </VideoGaleryHeader>
      {VideosElement?.map((el) => (
        <VideoGallery el={el} key={el.id} />
      ))}
      {ClassesElement?.map((el) => (
        <ClassBox el={el} key={el.id} />
      ))}
      <DemoCarousel />
    </Wrapper>
  );
}
