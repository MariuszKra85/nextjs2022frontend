import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import TextBox from '../components/TextBox';

const QUERY_HOME_PAGE = gql`
  query {
    allHomePages {
      title
      paragraph
      link {
        name
        link
      }
    }
  }
`;

const QUERY_HOME_PAGE_PICTURE = gql`
  query {
    allHomePagePictures {
      name
      url
    }
  }
`;

const HeadText = styled.h1`
  margin: 30vh 2rem 40vh 2rem;
  display: flex;
  font-size: 4rem;
  font-family: 'Bebas Neue';
  letter-spacing: 1px;
  text-align: center;
  padding: 2rem;
  background-color: rgba(100, 100, 100, 0.3);
`;
const Wrapeer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function HomePage() {
  const { data, error, loading } = useQuery(QUERY_HOME_PAGE);
  const { data: picture } = useQuery(QUERY_HOME_PAGE_PICTURE);
  console.log(data);
  console.log(picture);
  return (
    <Wrapeer>
      <HeadText>SALSA IN MANCHESTER CITY CENTER</HeadText>
      {data?.allHomePages.map((el) => (
        <>
          <TextBox el={el} />
        </>
      ))}
    </Wrapeer>
  );
}

// eslint-disable-next-line no-unused-vars
export async function getServerSideProps(context) {
  return {
    props: {
      data: {},
    }, // will be passed to the page component as props
  };
}
