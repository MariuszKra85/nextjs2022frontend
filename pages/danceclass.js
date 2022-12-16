import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import ClassesView from '../components/ClassesView';
import Hero from '../components/Hero';
import WidgetCenterText from '../components/WidgetCenterText';

const PIC_QUERY = gql`
  query {
    allPicturesLibs {
      name
      url
    }
  }
`;

const Wrapper = styled.div`
  padding: 1rem 1rem 5rem;
  margin: 6rem 0;
  background-color: rgba(20, 20, 20, 0.7);
  p {
    text-align: center;
    font-size: 1.6rem;
    color: var(--offWhite);
  }
`;

export default function DanceClass() {
  const { data, error, loading } = useQuery(PIC_QUERY);
  if (loading) <h3>loading... </h3>;
  return (
    <div>
      <Hero pic={data?.allPicturesLibs[5]} text="SALSA DANCE PRACTICES" />
      <Wrapper>
        <h2>Dance Class</h2>
        <p>
          Held at prestigious venues within Piccadilly, the Northern Quarter and
          Deansgate, we provide drop-in dance classes in the heart of Manchester
          City Centre. Manchester is a vibrant and culturally diverse city that
          is full of life. There is plentiful parking near our venues, and easy
          access to public transport links.
        </p>
        <p>
          No need to book or bring a partner, just bring yourself and enjoy our
          range of fantastic dance classes, social parties and events. Whether
          you are completely new to dancing, are improving or already advanced,
          we have a class to suit you. We value your thoughts and feedback, so
          do not hesitate to contact us, we are happy when you are.
        </p>
      </Wrapper>
      <WidgetCenterText
        firstLine="BEST SALSA CLASSES IN MANCHESTER"
        secondLine="WE OFFER VARIATY OF DANCE CLASSES"
      />
      <ClassesView />
    </div>
  );
}
